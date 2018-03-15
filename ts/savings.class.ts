export class Savings { 
	/*a set of () defines a method, if no () are there, then it's a property*/
	balance: number = 0;
	intRate: number = 0.12;

	getbalance(): number {		
		return this.balance;
	}

	deposit(amount: number): number {
		if(amount < 0) {
			console.log("Amount to deposit cannot be negative");
			return this.balance;
		}
		this.balance += amount;  /*this will add the balance to the new amount*/
		return this.balance;
	} 

	withdraw(amount: number): number {
		if(amount < 0) {
			console.error("Amount to withdraw cannot be negative");
			return this.balance;
		}
		if(amount > this.balance) {
			console.error("Insufficient funds");
			return this.balance;
		}
		this.balance -= amount;
		return this.balance;
	}

	/*calculate interest*/
	IntRateCalc(termMonths: number): number {
		let interest: number = this.balance * ((this.intRate / 12) * termMonths);
		return this.deposit(interest);
	}
}