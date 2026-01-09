// ----- CONDITIONAL STATEMENTS -----
var number = 7;

if (number > 0) {
    console.log("Number is positive");
} else if (number < 0) {
    console.log("Number is negative");
} else {
    console.log("Number is zero");
}

// ----- FOR LOOP -----
console.log("For Loop:");
for (var i = 1; i <= 5; i++) {
    console.log(i);
}

// ----- WHILE LOOP -----
console.log("While Loop:");
var j = 1;
while (j <= 5) {
    console.log(j);
    j++;
}

// ----- DO...WHILE LOOP -----
console.log("Do...While Loop:");
var k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);
