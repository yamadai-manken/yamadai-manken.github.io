filename = "./out/index.html"
with open(filename, encoding="UTF-8") as f:
    deta = f.read()

deta = deta.replace("/_next/static", "./_next/static")


with open(filename, mode="w", encoding="UTF-8") as f:
    f.write(deta)
