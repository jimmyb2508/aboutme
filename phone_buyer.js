const TAX_RATE = 0.2;
const PHONE_PRICE = 1000;
const ACCESSORY_PRICE = 50;
const SPENDING_THRESHOLD = 2500;

var bank_balance = 3000;
var amount = 0;

//keep buying phones whilst you still have money
while (amount < bank_balance) {
amount = amount + PHONE_PRICE;

if (amount < SPENDING_THRESHOLD)
amount = amount + ACCESSORY_PRICE;
}

//calculate tax
function calculateTax(amount) {
return amount * TAX_RATE;
}

//format amount
function formatAmount(amount) {
return "$" + amount.toFixed(2);
}

console.log( "Your purchase costs " + formatAmount( amount ) );

if (amount > bank_balance) {
console.log( "You can't afford this");
}