const menu = [
    10000,
    25000,
    18000,
    12000,
    50000
];

console.log("--- DAFTAR KATEGORI MENU CAFE ---");

menu.forEach((harga, index) => {
    const kategori = harga > 20000 ? "Menu Premium" : "Menu Reguler";
    console.log(`Menu ke-${index + 1} (Rp${harga}) -> ${kategori}`);
});