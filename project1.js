const nama = "Budi";
const umur = 20;


console.log("Nama: " + nama);
console.log("Umur: " + umur);


const hargaBarang = [12000, 15000, 8000, 5000];


let totalBelanja = 0;
for (let i = 0; i < hargaBarang.length; i++) {
  totalBelanja += hargaBarang[i];
}
console.log("Total Belanja: " + totalBelanja);


if (totalBelanja > 30000) {
  console.log("Status: Selamat! Anda mendapatkan diskon")
} else {
  console.log("Status: Belanja lagi agar mendapat diskon");
}