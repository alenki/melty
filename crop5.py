import fitz, os
src = r'E:\Desktop\PC\WORK\Web Development\melty\menu.pdf'
out = r'E:\Desktop\PC\WORK\Web Development\melty\pdf_pages'
doc = fitz.open(src)
page = doc[1]
rect = page.rect
# Right half of page (drinks side), split into 8 horizontal strips for max detail
half_x = rect.x0 + rect.width * 0.55
right = fitz.Rect(half_x, rect.y0, rect.x1, rect.y1)
strips = 10
sh = right.height / strips
for r in range(strips):
    clip = fitz.Rect(right.x0, right.y0 + r*sh, right.x1, right.y0 + (r+1)*sh)
    pix = page.get_pixmap(matrix=fitz.Matrix(4.5, 4.5), clip=clip)
    p = os.path.join(out, f'rs_{r+1}.png')
    pix.save(p)
print('done')
