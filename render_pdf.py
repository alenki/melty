import fitz, os
src = r'E:\Desktop\PC\WORK\Web Development\melty\menu.pdf'
out = r'E:\Desktop\PC\WORK\Web Development\melty\pdf_pages'
os.makedirs(out, exist_ok=True)
doc = fitz.open(src)
print('PAGES:', len(doc))
for i, page in enumerate(doc):
    # split each page into 2 halves vertically for higher detail (zoom 2x)
    mat = fitz.Matrix(2.5, 2.5)
    pix = page.get_pixmap(matrix=mat)
    p = os.path.join(out, f'page_{i+1}.png')
    pix.save(p)
    print(f'wrote {p} ({pix.width}x{pix.height})')
