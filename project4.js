const stok = [12, 0, 5, 8, 0, 20];

let barangHabis = 0;
let barangTersedia = 0;

console.log("--- STATUS STOK GUDANG ---");

stok.forEach((jumlahStok, index) => {
    let status = "";

    if (jumlahStok === 0) {
        status = "Barang Habis";
        barangHabis++;
    } else {
        status = "Stok tersedia";
        barangTersedia++;
    }
    console.log(`Barang ke-${index + 1} (Stok: ${jumlahStok}) -> ${status}`);
});

console.log("--------------------------");

console.log(`Jumlah barang yang habis   : ${barangHabis}`);
console.log(`Jumlah barang yang tersedia: ${barangTersedia}`);