function calculateBodaFare (distanceInkm) {
const baseFare = 50;
const chargePerkm =20;
const totalFare =baseFare + (distanceInkm * chargePerkm)

console.log(`foratrip of $ {distanceInkm} km, your estimatedbodafare is: ${totalFare}`);
}

//prompt the user for distance and convert to number
 const userinput = prompt(`enter the distance of your trip in kilometers`);
 const distance = Number(userinput); // Corrected line: convert the string to a number

 // validation
 if(isNaN(distance) || distance < 0){ // changed && to || as both make the input invalid
    console.log("enter a valid distance in kilometers");
 }
 
 // Assuming calculateBodaFare excepts a distance arguement, // you should pass the `distance` variable to it.

 calculateBodaFare();

