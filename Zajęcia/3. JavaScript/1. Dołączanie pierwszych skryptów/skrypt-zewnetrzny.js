console.log("Rozpoczęcie działania skryptu zewnętrznego...");

// const - definicja stałej (nie można jej zmieniać w trakcie działania skryptu)
const a = 5;
// let - definicja zmiennej (można zmienić jej wartość w dowolnym momencie działania skryptu)
let message = "Pierwotna wiadomość"
console.log("Wiadomość przed zmianą: " + message);

const result = a * a;
message = "Pole kwadratu o boku " + a + " wynosi " + result;
console.log("Wiadomość po zmianie: " + message);

alert(message);