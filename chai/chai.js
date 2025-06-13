function calculateChaiIngerient() {
    
let userinput = prompt("Karibu! how many cups of chai would you like")
let numberOfCups = Number(userinput)

// validation
if (isNaN(numberOfCups)|| numberOfCups<=0) {
    console.log('Oops! enter a valid number of cups');
    return;
}

// ingeriends quantities per cup
const standardwaterInml = 200;
const standardmilkInml = 50;
const standardtealeavesinTsp = 1;
const standardsugarinTsp = 2;
 
// total quantities
const totalwater = numberOfCups * standardwaterInml;
const totalmilk = numberOfCups * standardmilkInml;
const totaltealeaves = numberOfCups * standardtealeavesinTsp;
const totalsugar = numberOfCups * standardsugarinTsp;

// display the results 
console.log(`${totalwater} ml of water`);
console.log(`${totalmilk} ml of milk`);
console.log (`${totaltealeaves} Tsp of tealeaves`);
console.log (`${totalsugar} Tsp of sugar`);

}


calculateChaiIngerient();