const produk = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor",
    "Flashdisk"
];
 
const harga = [
    7000000,
    150000,
    350000,
    1800000,
    120000
];

console.log("--- DAFTAR HARGA DAN KATEGORI PRODUK ---");

produk.forEach((namaProduk, index) => {
    const hargaProduk = harga[index];
    const kategori = hargaProduk > 1000000 ? "Produk Mahal" : "Produk Murah";
    console.log(`${namaProduk} - Rp${hargaProduk} -> ${kategori}`);
});