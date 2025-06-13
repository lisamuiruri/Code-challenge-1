function estimateTransactionFee() {
    const welcomeMessage = prompt("Unatuma ngapi?(Enter amount in KSH")
const amountToSend = Number (welcomeMessage);
const minimumFee = 10;
const maximumFee = 70;

//condition tomake sure the amount keyed in is a valid positive number
if (isNaN(amountToSend)|| amountToSend<=0){ // Corrected syntax
    console.log(`oops! Please enter a valid number`);
    return;
}
//information about transactions and their fees
const basicTransactionFee = 1.5 * amountToSend / 100
let finalFee;
//validation condition for the maximum and minimum amount to send.

if(basicTransactionFee < minimumFee){
    //charge ksh10 if the transaction fee is less than 10
    finalFee = minimumFee;
    //return;

} else if (basicTransactionFee>maximumFee){
    finalFee = maximumFee;
    //return;
    //charge ksh70 if the transaction fee is more than 70
} else{//therwise charge the transaction fee.
    finalFee=basicTransactionFee;}

    // variable to the amount of money to be debited 
    const amountToBeDebited=amountToSend+finalFee;
    //console output to the user
    console.log("calculated transaction fee ksh${finalFee}");

    console.log("total amount to be debited Ksh${finalFee}");

    console.log("Send Money Securely!");

}

estimateTransactionFee();
