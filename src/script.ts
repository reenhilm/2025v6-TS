//1
//1a done (Skapa ett nytt npm-projekt)

//1b done (Skapa en config-fil för TypeScript)

//1c
let x: number = 42;

//1d
const myString: string = 'foo';
const myNumber: number = 123;
const myBool: boolean = true;

//2
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

//3 Skriv en funktion som summerar två tal
function sum(num1: number, num2: number): number {
    return num1 + num2;
}
console.log(`Summan av 1 + 2 är: ${ sum(1, 2) }`);

//4 Kontrollera om ett tal är udda eller jämnt
function isEven(num: number): boolean {
    return num % 2 === 0;
}
console.log(`Är talet 3 jämt? ${isEven(3)}`)
console.log(`Är talet 4 jämt? ${isEven(4)}`)

//5 Typdeklarera en array
const numbers: number[] = [1, 2, 3];

//6 Filtrera jämna tal från en array
function filterEvenNumbers(numbers: number[]): number[] {   
    return numbers.filter(e => e % 2 === 0);
}
console.log('Jämna talen av 1 2 3 4 5 6 är');
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

//7 Hantera en unionstyp.
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