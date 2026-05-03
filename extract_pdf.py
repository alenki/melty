import pypdf, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
r = pypdf.PdfReader(r'E:\Desktop\PC\WORK\Web Development\melty\menu.pdf')
print('TOTAL PAGES:', len(r.pages))
for i, p in enumerate(r.pages):
    print(f'\n========== PAGE {i+1} ==========')
    try:
        t = p.extract_text()
        print(t if t else '(no text)')
    except Exception as e:
        print('ERR:', e)
