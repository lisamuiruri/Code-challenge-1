function calculateChaiIngredient() {
  let userinput = prompt("Karibu! How many cups of chai would you like?");
  let numberOfCups = Number(userinput);

  // validation
  if (isNaN(numberOfCups) || numberOfCups <= 0) {
    console.log('Oops! Enter a valid number of cups.');
    return;
  }

  // ingredient quantities per cup
  const waterPerCup = 200; // ml
  const milkPerCup = 50; // ml
  const teaLeavesPerCup = 1; // tablespoon
  const sugarPerCup = 2; // teaspoons

  // total quantities
  const totalWater = numberOfCups * waterPerCup;
  const totalMilk = numberOfCups * milkPerCup;
  const totalTeaLeaves = numberOfCups * teaLeavesPerCup;
  const totalSugar = numberOfCups * sugarPerCup;

  // display the results
  console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
  console.log(`Water: ${totalWater} ml`);
  console.log(`Milk: ${totalMilk} ml`);
  console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoons`);
  console.log(`Sugar (Sukari): ${totalSugar} teaspoons\n`);
  console.log("Enjoy your Chai Bora!");
}

