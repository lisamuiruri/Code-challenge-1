function calculateBodaFare() {
  console.log("Boda Fare button clicked!"); // Debug line to confirm button works

  const baseFare = 50;
  const chargePerKm = 15;

  const userInput = prompt("Enter the distance of your trip in kilometers:");
  const distance = Number(userInput);

  if (isNaN(distance) || distance <= 0) {
    console.log("Oops! Enter a valid distance in kilometers.");
    return;
  }

  const totalFare = baseFare + (distance * chargePerKm);
  console.log(`For a trip of ${distance} km, your estimated boda fare is: KES ${totalFare}`);
}



