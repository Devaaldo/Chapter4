def jumlah_baris(matriks):
    return list(map(sum, matriks))
print(jumlah_baris([
    [1,2,3],
    [4,5,6],
    [7,8,9]
]))