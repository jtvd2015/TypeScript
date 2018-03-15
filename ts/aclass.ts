class Customer {
	id: number;
	name: string;
	active: boolean;
	creditLimit: number;

	constructor(id: number, name: string, active: boolean, creditLimit: number) {
		this.id = id;
		this.name = name;
		this.active = active;
		this.creditLimit = creditLimit;
	}

	printOut(): /*method*/ void {
		console.log(`Id=${this.id}, Name=${this.name}, Active=${this.active}, CreditLimit=${this.creditLimit}`);
	}
}
let custs: Customer[]  /*customer array*/ = [
	new Customer(1, "MAX", true, 10000),    /*first item in the Customer array*/	
	new Customer(2, "Chipotle", true, 20000),   /*second item in the Customer array*/	
	new Customer(3, "Tazikis", true, 9000), /*third item in the Customer array*/	
] /*[]; sets it to an empty array*/
for (let customer of custs)  /*foreach loop, but in JS, you can't use foreach, so it is a for loop*/ {
	customer.printOut();
}

/*let customer: Customer = new Customer(1, "Max Technical Training", true, 10000);  /*this will print out just 1 customer*/
customer.printOut();*/