//1
//1a done (Skapa ett nytt npm-projekt) - Installera TypeScript med npm typescript . Skapa konfigurationsfil med tsc --init . Du ska kunna skriva package.json-skript som kör "tsc" i terminalen. Målet är att kunna omvandla en TypeScript-fil till vanlig JavaScript.

//1b done (Skapa en config-fil för TypeScript) - Ställ in outDir så att js-filer läggs i en mapp med namnet dist/. Skriv ett skript som kör tsc.

//1c Skapa filen "src/script.ts" och gör ett skript som kör "dist/script.js" - skriv in: let x: string = 42; Vad händer? Ta reda på vad felmeddelandet betyder och lös det.
let x: number = 42;

//1d Deklarera variabler med olika datatyper - Skapa tre variabler av typen string, number och boolean. Tilldela dem lämpliga värden.
const myString: string = 'foo';
const myNumber: number = 123;
const myBool: boolean = true;

//2 Läs Documentation - TypeScript for JavaScript Programmers och svara på frågorna.
//2a Types by Inference means:
//När man tilldelar en variabel som man inte angett typ för, ett värde. Då använder TypeScript värdet för att gissa och sätta typ på variabeln.

//2b Vad är ett interface
//En typ-definition för vad ett objekt/class ska innehålla

//2c Vilka datatyper har JavaScript?
//boolean, bigint, null, number, string, symbol, and undefined

//2d Vilka nya datatyper tillför TypeScript
//any, unknown, never, and void

//2e Vad är generics?
//generalisering.. Vi vet inte vad typen kommer vara. Så vi skriver den på ett dynamiskt sätt. En typ-struktur för att typen kommer bli låst senare, ungefär som att vi använder en variabel för att hålla typen.

//3 Skriv en funktion som summerar två tal - Skapa en funktion sum som tar två number-argument och returnerar deras summa.
function sum(num1: number, num2: number): number {
    return num1 + num2;
}
console.log(`Summan av 1 + 2 är: ${ sum(1, 2) }`);

//4 Kontrollera om ett tal är udda eller jämnt - Skriv en funktion isEven som returnerar true om ett tal är jämnt och false om det är udda.
function isEven(num: number): boolean {
    return num % 2 === 0;
}
console.log(`Är talet 3 jämt? ${isEven(3)}`)
console.log(`Är talet 4 jämt? ${isEven(4)}`)

//5 Typdeklarera en array - Skapa en variabel numbers av typen number[] och fyll den med minst tre tal.
const numbers: number[] = [1, 2, 3];

//6 Filtrera jämna tal från en array - Skriv en funktion filterEvenNumbers som tar en array av number[] och returnerar bara de jämna talen.
function filterEvenNumbers(numbers: number[]): number[] {   
    return numbers.filter(e => e % 2 === 0);
}
console.log('Jämna talen av 1 2 3 4 5 6 är');
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

//7 Hantera en unionstyp - Skapa en funktion describeValue som tar ett argument som kan vara antingen string eller number och returnerar en strängbeskrivning av värdet.
function describeValue(param: string | number): string {
    if (typeof param === "string") {
        return 'string';
    } else {
        return 'number';
    }
}
console.log('typ1', describeValue('hej'));
console.log('typ2', describeValue(1));
console.log('typ3', describeValue('1'));

//8 En enkel typalias - Skapa ett typalias Person som innehåller ett namn(name: string) och ålder(age: number).Skapa en variabel av den typen.
interface Person {
    name: string;
    age: number;
}
const myPerson: Person = { name: 'Christian', age: 43 };

//9. Objekt som funktionens argument - Skriv en funktion printPersonInfo som tar ett objekt av typen Person och skriver ut namn och ålder.
function printPersonInfo(person: Person): void {
    console.log(`${person.name} ${person.age}år`);
}
printPersonInfo(myPerson);

//10. Enum-övning - Definiera en enum för veckodagar och skriv en funktion isWeekend som returnerar true för helgdagar.
enum Weekday {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
function isWeekend(day: Weekday): boolean {
    return day === Weekday.Saturday || day === Weekday.Sunday;
}
console.log(isWeekend(Weekday.Monday));
console.log(isWeekend(Weekday.Sunday));

//11 Kontrollera längden på en sträng - Skriv en funktion isLongString som returnerar true om en sträng har mer än 10 tecken.
function isLongString(paramString: string): boolean {
    return paramString.length > 10;
}
console.log(isLongString('elva tecken')); //true
console.log(isLongString('tio tecken'));  //false

//12 Sortera en array av tal - Skriv en funktion sortNumbers som tar en array av number[] och returnerar den sorterad i stigande ordning.
function sortNumbers(numArr: number[]): number[] {
    return numArr.sort((a, b) => a - b);
}
console.log(sortNumbers([3, 2, 1]));

//13 En enkel tuple - Skapa en tuple coordinate som innehåller två värden: latitud och longitud(number båda).Skriv ut värdena.
const coordinate: [number, number] = [59, 18];
console.log(`latitud: ${coordinate[0]}, longitud: ${coordinate[1]}`);

//14. Typvakt med typeof - Skriv en funktion isString som returnerar true om argumentet är en sträng och false annars.
function isString(value: any): value is string {
    return typeof value === 'string';
}
console.log(isString('test')); //true
console.log(isString(42));     //false
console.log(isString('42'));   //true
console.log(isString(true));   //false
console.log(isString({}));     //false

//15 Omvandla array till sträng - Skriv en funktion joinStrings som tar en array av string[] och returnerar en enda sammanslagen sträng.
function joinStrings(strArr: string[]): string {
    return strArr.join('');
}
console.log(joinStrings(['Jag', ' ', 'heter', ' ', 'Christian']));

//16 Defaultvärde i en funktion - Skapa en funktion greet som tar ett valfritt namn och returnerar "Hello, Guest" om inget namn ges.
function greet(name?: string): string {    
    return `Hello, ${name ?? 'Guest' }`;
}
console.log(greet('Christian'));
console.log(greet());

//17 Returnera en funktion - Skriv en funktion createMultiplier som tar ett tal som argument och returnerar en funktion som multiplicerar sina argument med det talet.
function createMultiplier(factor: number): (num: number) => number {
    return (num: number) => num * factor;
}
const double = createMultiplier(2);
const triple = createMultiplier(3);
console.log(double(5));  //10 (5 * 2)
console.log(triple(4));  //12 (4 * 3)

//18 Hantera null och undefined - Skriv en funktion printValue som skriver ut värdet om det inte är null eller undefined.Skriv "No value" annars.
function printValue(value: unknown): void {
    console.log(value ?? "No value");
}
printValue("Hello");   //Hello
printValue(42);        //42
printValue(null);      //No value
printValue(undefined); //No value

//19 Skapa en enkel interface - Definiera ett interface för ett Book - objekt med title, author och year.Skapa ett objekt som följer interfacet.
interface Book {
    title: string;
    author: string;
    year: number;
}
const myBook: Book = { title: 'Pippi långstrump', author: 'Astrid Lindgren', year: 1950 };
console.log(myBook);

//20 Implementera logik med if/else - Skriv en funktion gradeEvaluator som returnerar "Pass" om betyget är minst 50 och "Fail" annars.
function gradeEvaluator(grade: number): string {
    if (grade >= 50)
        return 'Pass';
    else
        return 'Fail';
}
console.log(gradeEvaluator(50)); //Pass
console.log(gradeEvaluator(49)); //Fail

//21 Rekursion: räkna ner - Skapa en funktion countdown som tar ett heltal och skriver ut en nedräkning till noll.
function countdown(num: number): void {
    if (num >= 0) {
        console.log(num);
        //Rekursivt anrop
        countdown(num - 1);
    }
}
countdown(5); //5, 4, 3, 2, 1, 0

//22 Skapa en variabel color som innehåller namnet på ett färg. - Skriv en funktion som producerar en mening med variabeln.Om color till exempel är 'blå' ska programmet skriva ut: 'En blå bil'.Variabeln och funktionen ska ha type annotations; dvs du ska tala om vilka datatyper variabeln, parametern och returvärdet har.
const colorName: string = 'blå';
function createSentence(colorName: string): string {
    return `En ${colorName} bil`;
}
console.log(createSentence(colorName)); //En blå bil

//23 Skriv en loop som kör 10 gånger. - Du kan lägga den i en funktion för att få bättre struktur på koden.Loopen ska simulera ett trafikljus och därför omväxlande skriva ut "rött", "gult", "grönt" i den ordningen.En färg per varv i loopen.
const colorOrder:string[] = ["rött", "gult", "grönt", "gult"];
let currentColor:number = 0;
for (let i:number = 0; i < 10; i++) {
    console.log(colorOrder[currentColor]);
    currentColor++;
    if (currentColor >= colorOrder.length)
        currentColor = 0;
}

//24. Skriv ett program som skriver ut talen 1 till 20 och om varje tal är udda eller jämnt.
const numArr: number[] = Array.from({ length: 20 }, (_, index) => index + 1);
numArr.forEach((num:number) => {
    console.log(`${num} ${isEven(num) ? 'är jämt' : 'är udda'}`);
});