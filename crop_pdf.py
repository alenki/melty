import fitz, os
src = r'E:\Desktop\PC\WORK\Web Development\melty\menu.pdf'
out = r'E:\Desktop\PC\WORK\Web Development\melty\pdf_pages'
os.makedirs(out, exist_ok=True)
doc = fitz.open(src)
# render at high zoom and split each page into a 2x3 grid (6 tiles per page)
for pi, page in enumerate(doc):
    rect = page.rect
    cols, rows = 3, 2
    cw = rect.width / cols
    rh = rect.height / rows
    for r in range(rows):
        for c in range(cols):
            clip = fitz.Rect(rect.x0 + c*cw, rect.y0 + r*rh, rect.x0 + (c+1)*cw, rect.y0 + (r+1)*rh)
            mat = fitz.Matrix(3.0, 3.0)
            pix = page.get_pixmap(matrix=mat, clip=clip)
            p = os.path.join(out, f'p{pi+1}_r{r+1}c{c+1}.png')
            pix.save(p)
print('done')
