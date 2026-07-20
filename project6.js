const umur = [8, 13, 17, 20, 25, 11];

console.log("--- STATUS IZIN MASUK PENGUNJUNG ---");

umur.forEach((usiaPengunjung, index) => {
    const status = usiaPengunjung >= 17 ? "Boleh Masuk" : "Tidak Boleh Masuk";
    console.log(`Pengunjung ke-${index + 1} (Umur: ${usiaPengunjung}) -> ${status}`);
});