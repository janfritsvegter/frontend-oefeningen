/* Opdracht 0: voorbeeld */
// Maak een nieuw date-object aan voor dit huidige moment en log dit in de terminal
// ---- Verwachte uitkomst: 2021-04-06T14:54:34.062Z (afhankelijk van het moment)

const currentDay = new Date();
console.log(currentDay);


/* Opdracht 1 */
// 1a. Maak een nieuw date-object aan voor dit huidige moment en log het aantal uren in de terminal
// 1b. Log daarna het aantal minuten in de terminal
// ---- Verwachte uitkomsten:
// Uren: 16 (als er een vier in de klok zit op het moment van aanroepen)
// Minuten: 36 (als het 16:36 is op het moment van aanroepen)

const hours = currentDay.getHours();
const minutes = currentDay.getMinutes();
console.log(hours);
console.log(minutes);

/* Opdracht 2 */
// Format het date-object dat je bij de vorige vraag hebt gemaakt naar een leesbare datum
// ---- Verwachte uitkomst: Tue Apr 06 2021 (afhankelijk van het moment)

let readableDate = currentDay.toDateString();
console.log(readableDate);

// Nederlandse versie voluit
const longOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};

readableDate = currentDay.toLocaleDateString('nl-NL', longOptions); // geeft zaterdag 26 december 1992
console.log(readableDate);

// Nederlandse versie kort
const shortOptions = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',

};

readableDate = currentDay.toLocaleDateString('nl-NL', shortOptions); // geeft zaterdag 26 december 1992
console.log(readableDate);