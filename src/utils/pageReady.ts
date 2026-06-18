/**
 * Asset-readiness helpers for the loading screen.
 *
 * The loading screen must stay up until the page is *actually* paintable — web
 * fonts loaded, the route's code chunk fetched, and the above-the-fold hero
 * image decoded — instead of a fixed timer that fires before any of that
 * finishes. Every helper here is defensive: it always resolves (never rejects),
 * so a missing Font Loading API or a 404 image can never trap the user behind
 * the loader.
 */

/** Resolve once all in-use web fonts have settled (or immediately if the Font
 *  Loading API is unavailable). */
export function whenFontsReady(): Promise<void> {
  if (typeof document === 'undefined' || !document.fonts) return Promise.resolve();
  return document.fonts.ready.then(() => undefined).catch(() => undefined);
}

/** Resolve once the image at `url` is decoded, loaded, errored, or the timeout
 *  elapses — whichever comes first. Never rejects, so a broken/slow image can't
 *  hang the loader. */
export function decodeImage(url: string, timeoutMs: number): Promise<void> {
  return new Promise<void>((resolve) => {
    let settled = false;
    const done = () => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      resolve();
    };
    const timer = setTimeout(done, timeoutMs);

    const img = new Image();
    img.src = url;
    // decode() yields a fully-decoded bitmap (no paint jank on reveal); fall
    // back to load/error for browsers or paths where it rejects.
    if (typeof img.decode === 'function') {
      img.decode().then(done, done);
    }
    img.onload = done;
    img.onerror = done;
    // Already cached and complete synchronously — resolve right away.
    if (img.complete) done();
  });
}

/** Resolve after the browser has had a chance to commit and paint (two animation
 *  frames). We need this so the page's text is actually laid out — only then
 *  does it request its real fonts and `document.fonts.ready` reflects them.
 *
 *  In a foreground tab we wait for two real frames, with a generous ceiling in
 *  case frames are starved (slow CPU / large chunk parse) — a short fallback
 *  here would defeat the font wait by resolving before first paint. In a
 *  backgrounded tab rAF is paused, so we fall back to a short timer (the user
 *  isn't looking, and the caller's hard timeout still bounds everything). */
function whenPainted(): Promise<void> {
  return new Promise<void>((resolve) => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    let settled = false;
    const done = () => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      resolve();
    };
    const hidden = typeof document !== 'undefined' && document.hidden;
    if (typeof requestAnimationFrame === 'function' && !hidden) {
      requestAnimationFrame(() => requestAnimationFrame(done));
      timer = setTimeout(done, 2000);
    } else {
      timer = setTimeout(done, 120);
    }
  });
}

export interface PageAssets {
  /** Dynamic import of the route's lazy chunk (cached after the first call). */
  loadChunk?: () => Promise<unknown>;
  /** Above-the-fold hero image to decode before reveal, if any. */
  criticalImage?: string | null;
  /** Whether to wait for web fonts (essentially instant after first load). */
  waitFonts?: boolean;
  /** Hard cap so a slow network never traps the user behind the loader. */
  timeoutMs: number;
}

/** Resolve once the page's critical assets are ready, or the timeout elapses —
 *  whichever comes first.
 *
 *  Ordering matters for fonts: all faces are `font-display: swap` and only
 *  download once rendered text uses them, so we must load the route chunk and
 *  let it paint *before* waiting on `document.fonts.ready` — checked any
 *  earlier it resolves before a single glyph has mounted. The hero image
 *  decodes in parallel the whole time. */
export function waitForAssets({
  loadChunk,
  criticalImage,
  waitFonts = true,
  timeoutMs,
}: PageAssets): Promise<void> {
  // Kick off the (render-independent) image decode immediately, but on its own
  // shorter budget: a hero image that stalls (connection open, no bytes, no
  // error — common on flaky mobile) shouldn't be able to hold the loader for
  // the full hard timeout. The outer race still enforces the absolute cap.
  const imageBudget = Math.min(timeoutMs, 4000);
  const image = criticalImage ? decodeImage(criticalImage, imageBudget) : Promise.resolve();

  const ready = (async () => {
    if (loadChunk) await loadChunk().catch(() => undefined);
    await whenPainted();
    await Promise.all([waitFonts ? whenFontsReady() : Promise.resolve(), image]);
  })();

  let timer: ReturnType<typeof setTimeout> | undefined;
  const timeout = new Promise<void>((resolve) => {
    timer = setTimeout(resolve, timeoutMs);
  });
  // Clear the hard-cap timer once readiness wins so it doesn't linger for the
  // full 6–8s (one stale timer per navigation otherwise).
  ready.finally(() => clearTimeout(timer));
  return Promise.race([ready, timeout]);
}
