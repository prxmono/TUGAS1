const nilai = [80, 95, 70, 88, 100, 65];

let nilaiTertinggi = nilai[0];
let nilaiTerendah = nilai[0];

nilai.forEach((angka) => {
    if (angka > nilaiTertinggi) {
        nilaiTertinggi = angka;
    }
    
    if (angka < nilaiTerendah) {
        nilaiTerendah = angka;
    }
});
console.log(`Nilai tertinggi : ${nilaiTertinggi}`);
console.log(`Nilai terendah  : ${nilaiTerendah}`);