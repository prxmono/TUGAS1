const hadir = [
    true,
    false,
    true,
    true,
    false,
    true
];

let totalHadir = 0;
let totalTidakHadir = 0;

console.log("--- REKAP KEHADIRAN SISWA ---");

hadir.forEach((statusHadir, index) => {
    let keterangan = "";

    if (statusHadir) {
        keterangan = "Hadir";
        totalHadir++; 
    } else {
        keterangan = "Tidak Hadir";
        totalTidakHadir++; 
    }
    console.log(`Siswa ke-${index + 1} -> ${keterangan}`);
});

console.log("-----------------------------");
console.log(`Total siswa hadir       : ${totalHadir}`);
console.log(`Total siswa tidak hadir : ${totalTidakHadir}`);