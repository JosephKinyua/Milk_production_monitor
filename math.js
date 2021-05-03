//shedA,B,C,D are variables representing the amount of milk in liters per day
var totalProduction = function() {
    var shedA = 510;
    var shedB = 308;
    var shedC = 486;
    var shedD = 572;
    var totalProduce = (shedA + shedB + shedC + shedD);
    console.log("Your production in Shed A" + " " + shedA + " " + "litres per day ");
    console.log("Your production in Shed A" + " " + shedB + " " + "litres per day ");
    console.log("Your production in Shed A" + " " + shedC + " " + "litres per day ");
    console.log("Your production in Shed A" + " " + shedD + " " + "litres per day ");
    console.log("The total production is" + " " + totalProduce + " " + "litres per day");

};

totalProduction();
//The program have two index month and incomes
//Income is defined by putting the income in index and giving it a name and it value contains the multiple of the the month days the milk price which is 45 ksh and total liters which is 1876
//we output the month and income per month through specifying each index

var monthlyIncome = {
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    incomes: [Jan = 31 * 45 * 1876, Feb = 29 * 45 * 1876, March = 31 * 45 * 1876, April = 30 * 45 * 1876,
        May = 31 * 45 * 1876, June = 30 * 45 * 18, July = 31 * 45 * 1876, Aug = 31 * 45 * 1876, Sept = 30 * 45 * 1876,
        Oct = 31 * 45 * 1876, Nov = 30 * 45 * 1876, Dec = 31 * 45 * 1876
    ]
}
console.log("your income for" + " " + monthlyIncome.months[0] + " " + "is" + " " + monthlyIncome.incomes[0]);
console.log("your income for" + " " + monthlyIncome.months[1] + " " + "is" + " " + monthlyIncome.incomes[1]);
console.log("your income for" + " " + monthlyIncome.months[2] + " " + "is" + " " + monthlyIncome.incomes[2]);
console.log("your income for" + " " + monthlyIncome.months[3] + " " + "is" + " " + monthlyIncome.incomes[3]);
console.log("your income for" + " " + monthlyIncome.months[4] + " " + "is" + " " + monthlyIncome.incomes[4]);
console.log("your income for" + " " + monthlyIncome.months[5] + " " + "is" + " " + monthlyIncome.incomes[5]);
console.log("your income for" + " " + monthlyIncome.months[6] + " " + "is" + " " + monthlyIncome.incomes[6]);
console.log("your income for" + " " + monthlyIncome.months[7] + " " + "is" + " " + monthlyIncome.incomes[7]);
console.log("your income for" + " " + monthlyIncome.months[8] + " " + "is" + " " + monthlyIncome.incomes[8]);
console.log("your income for" + " " + monthlyIncome.months[9] + " " + "is" + " " + monthlyIncome.incomes[9]);
console.log("your income for" + " " + monthlyIncome.months[10] + " " + "is" + " " + monthlyIncome.incomes[10]);
console.log("your income for" + " " + monthlyIncome.months[11] + " " + "is" + " " + monthlyIncome.incomes[11]);