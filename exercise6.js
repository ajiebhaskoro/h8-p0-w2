console.log("=========while==========")

console.log("LOOPING PERTAMA");

var counter = 0;

while (counter < 20) {
    counter = counter + 2;
    console.log(counter + "- I love coding");
}

console.log("LOOPING KEDUA");

var counter = 22;

while (counter > 2) {
    counter = counter - 2;
    console.log(counter + "- I will become a fullstack developer");
}
console.log("\n");

console.log("=========for==========")

console.log("LOOPING PERTAMA");

for (i = 1; i <= 20; i++) {
    console.log(i + "- I love coding");
}

console.log("LOOPING KEDUA");

for (i = 20; i > 0; i--) {
    console.log(i + "- I will become a fullstack developer");
}
console.log("\n")

console.log("=========ganjilGenap==========")

var counter = 0;

for (i = 0; i < 100; i++) {
    counter = counter + 1;
    if (counter % 2 == 0) {
        console.log(counter + " adalah Genap");
    } else {
        console.log(counter + " adalah Ganjil")
    }
}
console.log("\n")


console.log("Pertambahan Counter 2");

var counter = 0;

for (counter = 1; counter <= 100; counter++) {
    counter = counter + 2;
    if (counter % 3 == 0) {
        console.log(counter + " Kelipatan 3");
    }
}
console.log("\n")


console.log("Pertambahan Counter 5");

var counter = 0;

for (counter = 1; counter <= 100; counter++) {
    counter = counter + 5;
    if (counter % 6 == 0) {
        console.log(counter + " Kelipatan 6");
    }
}
console.log("\n")


console.log("Pertambahan Counter 9");

var counter = 0;

for (counter = 1; counter <= 100; counter++) {
    counter = counter + 9;
    if (counter % 10 == 0) {
        console.log(counter + " Kelipatan 10");
    }
}
console.log("\n")