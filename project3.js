const hero = [
    "Layla",
    "Ling",
    "Franco",
    "Fanny",
    "Miya",
    "Eudora"
];

console.log("--- DAFTAR HERO MOBILE LEGENDS ---");

hero.forEach((namaHero) => {
    if (namaHero[0].toUpperCase() === "F") {
        console.log(`${namaHero} -> Hero Assassin/Tank Favorit`);
    } else {
        console.log(`${namaHero} -> Hero Biasa`);
    }
});