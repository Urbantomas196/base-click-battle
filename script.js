// Pomocná zpráva pro nás
console.log("Startujeme skript... 🚀");

const mujBuilderCode = "vvc8idg5";

function odesliKliknuti(tym) {
    console.log("--------------------------");
    console.log("Kliknuto na tým: " + tym);
    console.log("Tvůj kód: " + mujBuilderCode);
    
    if (window.ethereum) {
        console.log("Peněženka je připravena! ✅");
    } else {
        console.log("Peněženka nenalezena (to je v Acode OK). 🦊");
    }
}

// Tato funkce propojí tlačítka, až budou vidět
function pripojTlacitka() {
    const tlacitkoModry = document.getElementById('modry-tym');
    const tlacitkoCerveny = document.getElementById('cerveny-tym');

    if (tlacitkoModry && tlacitkoCerveny) {
        tlacitkoModry.onclick = () => odesliKliknuti('modry');
        tlacitkoCerveny.onclick = () => odesliKliknuti('cerveny');
        console.log("Tlačítka úspěšně propojena! 🔗");
    } else {
        // Pokud tlačítka ještě neexistují, zkusíme to znovu za zlomek sekundy
        setTimeout(pripojTlacitka, 100);
    }
}

// Spustíme propojování
pripojTlacitka();
