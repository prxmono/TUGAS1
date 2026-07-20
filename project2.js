const nilaiSiswa = [
    { nama: "A", nilai: 90 },
    { nama: "B", nilai: 75 },
    { nama: "C", nilai: 60 },
    { nama: "D", nilai: 45 },
    { nama: "E", nilai: 88 }
];

let jumlahLulus = 0;
let jumlahTidakLulus = 0;

nilaiSiswa.forEach((siswa, index) => {
    const status = siswa.nilai >= 75 ? "Lulus" : "Tidak Lulus";
    console.log(`Siswa ke-${index + 1} : ${siswa.nilai} -> ${status}`);
    
    if (siswa.nilai >= 75) {
        jumlahLulus++;
    } else {
        jumlahTidakLulus++;
    }
});
console.log(`Total Siswa Lulus: ${jumlahLulus}`);
console.log(`Total Siswa Tidak Lulus: ${jumlahTidakLulus}`);