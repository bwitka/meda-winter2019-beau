// IN-CLASS CODING CHALLENGE (led by instructor): design a vending machine.

let snacks = [];
let profits = 0;

// index 2 should be the snack name, index 3 should be he cash inputted.
const terminalArguments = process.argv;
console.log(terminalArguments);

class Snack {
  constructor(price, name, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  restock(num) {
    this.quantity = this.quantity + num;
  }
}

let snickers = new Snack(1.75, "Snickers Bar", 15);
snacks.push(snickers);

for (let i = 0; i < snacks.length; i++) {
  //let currentSnack = snacks[i];

  if (terminalArguments[2] == snacks[i].name) {
    if (snacks[i].quantity > 0) {
      if (snacks[i].price <= terminalArguments[3]) {
        console.log("You have purchased a " + snacks[i].name);
        console.log(
          "Your change is $" + (terminalArguments[3] - snacks[i].price)
        );
      }
    }
  }
}
