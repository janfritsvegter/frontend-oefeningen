node // ==========================================
// 0. Voorbeeldvraag: declareer een variabele met daarin de vergelijking of 2 gelijk is aan 2.                // geeft true wanneer gelogd
// ==========================================

const equalNumbers = 2 === 2;
console.log('Is 2 gelijk aan 2?', equalNumbers);

// ==========================================
// 1. Declareer een variabele en sla daar de uitkomst van de vergelijking "Is 10 groter dan 20?" in op        // geeft false wanneer gelogd
// ==========================================
const differentNumbers = 10 > 20;
console.log("Is 10 groter dan 2?", differentNumbers)

// ==========================+================
// 2. Declareer een variabele en sla daar de uitkomst van de vergelijking "Is 10 ongelijk aan 11?" in op        // geeft true wanneer gelogd
// ==========================================
const comparisson2 = 10 !== 11;
console.log("Is 10 ongelijk aan 11?", comparisson2)

// ==========================================
// 3. Declareer een variabele en sla daar in op of de woorden 'zoet' en 'sappig' hetzelfde zijn                // geeft false wanneer gelogd
// ==========================================
const comparisson3 = "zoet" === "sappig";
console.log(comparisson3)

// ==========================================
// 4a. Declareer een variabele en sla daar het rapportcijfer 9 in op.
// 4b. schrijf een script dat checkt of het rapportcijfer groter is dan 8.
//     Als dat zo is, loggen we 'Cum laude!' in de console.                                                     // geeft 'Cum laude!' wanneer gelogd
// ==========================================
const score = 9;
if (score >= 8) {
    console.log("Cum laude!")
}



// ==========================================
// 5a. Gebruik onderstaande variabelen isRaining en temperature;
// 5b. Schrijf een script dat "Je kunt een korte broek aan!" logt wanneer het niet regent EN de temperatuur hoger is dan 21 graden
// 5c. Log "Doe een jas aan!" Als het regent OF kouder is dan 12 graden
// Tip: verander de waarde van isRaining en temperature even handmatig om te kijken of jouw 2e conditie klopt
// ==========================================

const isRaining = false;
const temperature = 23;

if ((isRaining == false) && (temperature > 21)) {
    console.log("Je kunt een korte broek aan!")
}

else if ((isRaining !== false) || (temperature <= 12)) {
    console.log("Doe een jas aan!")
}