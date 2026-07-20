const skor = [100, 450, 800, 150, 900];

skor.forEach((skorPlayer, index) => {
    let rank = "";

    if (skorPlayer >= 800) {
        rank = "Mythic";
    } else if (skorPlayer >= 500) {
        rank = "Legend";
    } else if (skorPlayer >= 300) {
        rank = "Epic";
    } else {
        rank = "Warrior";
    }

    console.log(`Player ${index + 1} : ${skorPlayer} -> ${rank}`);
});