import fitz, os
src = r'E:\Desktop\PC\WORK\Web Development\melty\menu.pdf'
out = r'E:\Desktop\PC\WORK\Web Development\melty\pdf_pages'
doc = fitz.open(src)
page = doc[1]  # page 2 = drinks
rect = page.rect
# split in 4 cols x 6 rows for max detail on dense pricing
cols, rows = 4, 6
cw = rect.width / cols
rh = rect.height / rows
for r in range(rows):
    for c in range(cols):
        clip = fitz.Rect(rect.x0 + c*cw, rect.y0 + r*rh, rect.x0 + (c+1)*cw, rect.y0 + (r+1)*rh)
        pix = page.get_pixmap(matrix=fitz.Matrix(4.0, 4.0), clip=clip)
        p = os.path.join(out, f'd_r{r+1}c{c+1}.png')
        pix.save(p)
print('done')
