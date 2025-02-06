def jumlah_baris(matriks):
    hasil = []
    for baris in matriks:
        total = 0
        for nilai in baris:
            total += nilai
        hasil.append(total)
    return hasil

print(jumlah_baris([
    [1,2,3],
    [4,5,6],
    [7,8,9]
]))