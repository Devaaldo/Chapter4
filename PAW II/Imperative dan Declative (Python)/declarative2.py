def jumlah_baris(matriks):
    return [sum(baris) for baris in matriks]
print(jumlah_baris([
    [1,2,3],
    [4,5,6],
    [7,8,9]
]))