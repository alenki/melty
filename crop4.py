import fitz, os
src = r'E:\Desktop\PC\WORK\Web Development\melty\menu.pdf'
out = r'E:\Desktop\PC\WORK\Web Development\melty\pdf_pages'
doc = fitz.open(src)
page = doc[1]
rect = page.rect
# Split page 2 into 4 columns x 4 rows for max detail
cols, rows = 4, 4
cw = rect.width / cols
rh = rect.height / rows
for r in range(rows):
    for c in range(cols):
        clip = fitz.Rect(rect.x0 + c*cw, rect.y0 + r*rh, rect.x0 + (c+1)*cw, rect.y0 + (r+1)*rh)
        pix = page.get_pixmap(matrix=fitz.Matrix(5.0, 5.0), clip=clip)
        p = os.path.join(out, f'p2_{r+1}_{c+1}.png')
        pix.save(p)
print('done')
