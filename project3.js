const hero = [
  "Layla",
  "Ling",
  "Franco",
  "Fanny",
  "Miya",
  "Eudora"
];

hero.forEach(namaHero => {
  if (namaHero.startsWith("F")) {
    console.log(`${namaHero} -> Hero Assassin/Tank Favorit`);
  } else {
    console.log(`${namaHero} -> Hero Biasa`);
  }
});