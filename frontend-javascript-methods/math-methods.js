/* Opdracht 0: voorbeeld */
// Log het cijfer PI in de terminal
// ---- Verwachte uitkomst: 3.141592653589793

console.log(Math.PI);

/* Opdracht 1: */
// Bereken de omtrek van een cirkel met een diameter van 4 en log dit in de terminal. De eenheid (cm, meters, etc. maakt niet uit).
// Tip: de formule is omtrek = diameter * pi
// ---- Verwachte uitkomst: 12.566370614359172

console.log(Math.PI*4);
/* Opdracht 2: */
// Bereken de omtrek van een cirkel met een diameter van 12 en rond dit af naar een heel getal. Log dit in de terminal.
// ---- Verwachte uitkomst: 38

console.log(Math.round(Math.PI*12));

/* Opdracht 3: */
// Bereken de wortel van 9 en log dit in de terminal
// ---- Verwachte uitkomst: 3

console.log(Math.sqrt(9));

/* Opdracht 4: */
// Genereer een willekeurig getal tussen de 0 en 1 en doe dan een check:
// * is het willekeurige getal groter dan 0.5 ? Log dan het getal met "Het glas is halfvol" in de terminal
// * is het willekeurige getal kleiner dan 0.5 ? Log dan het getal met "Het glas is half leeg" in de terminal
// Tip: iedere keer als je het script opnieuw draait (wel even een extra spatie toevoegen o.i.d.) is dit getal anders ;)
// ---- Verwachte uitkomst: Bijbehorende zin afhankelijk van de uitkomst

for (let i = 0; i < 100; i++) {
    const rand = Math.random();
    if (rand>0.5){
        console.log(rand +" Het glas is half vol");
    }else{
        console.log(rand +" Het glas is half leeg");
    }
}
const arr = [0,0,0,0,0,0,0,0,0,0,0,0];
for (let i = 0; i < 10000; i++) {
    const rand = Math.round(Math.random()*10);
    arr[rand]++;
}
console.log(arr);
for (let i = 0; i < arr.length; i++) {
    console.log(i+" "+arr[i]);
}

const arr2 = [0,0,0,0,0,0,0,0,0,0,0,0];
for (let i = 0; i < 1000000; i++) {
    const rand = Math.round((Math.random()*10)+0.5);
    arr2[rand]++;
}
console.log(arr2);
for (let i = 0; i < arr2.length; i++) {
    console.log(i+" "+arr2[i]);
}