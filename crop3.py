import fitz, os
src = r'E:\Desktop\PC\WORK\Web Development\melty\menu.pdf'
out = r'E:\Desktop\PC\WORK\Web Development\melty\pdf_pages'
doc = fitz.open(src)
page = doc[1]
rect = page.rect
# Wider columns: split right half of page into vertical strips
# right half = drinks
half_x = rect.x0 + rect.width / 2
right = fitz.Rect(half_x, rect.y0, rect.x1, rect.y1)
# Split right half into 6 vertical rows
rows = 6
rh = right.height / rows
for r in range(rows):
    clip = fitz.Rect(right.x0, right.y0 + r*rh, right.x1, right.y0 + (r+1)*rh)
    pix = page.get_pixmap(matrix=fitz.Matrix(3.5, 3.5), clip=clip)
    p = os.path.join(out, f'right_r{r+1}.png')
    pix.save(p)
print('done')
