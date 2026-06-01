/**
 * Display images under /public/data have pre-generated downscaled variants
 * (see scripts/generate-thumbnails.mjs):
 *
 *   foo.webp        full   (<=1600px)  gallery lightbox, menu modal slider
 *   foo-md.webp     medium (<=1100px)  featured hero cards
 *   foo-sm.webp     thumb  (<=600px)   menu grid cards, gallery masonry
 *
 * Serving the small surface a small file keeps its decoded bitmap tiny, which
 * is what removes the fast-scroll jank: a 1600px image decodes to a ~7-8 MB
 * RGBA bitmap on the main thread regardless of file size, and decoding a
 * screenful of them while scrolling stalls the thread and stutters Lenis.
 *
 * The full path is always a safe fallback (it is guaranteed to exist), so
 * callers point `src` at a variant and fall back to the original on error.
 */
export type ImgVariant = 'sm' | 'md';

export function imgVariant(src: string | undefined | null, variant: ImgVariant): string {
  if (!src) return '';
  // Only our optimized .webp assets have variants; anything else is unchanged.
  return src.replace(/\.webp$/i, `-${variant}.webp`);
}
