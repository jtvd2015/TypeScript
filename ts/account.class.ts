export class Account { 
	/*a set of () defines a method, if no () are there, then it's a property*/
	balance: number = 0;

	getbalance(): number {		
		return this.balance;
	}

	deposit(amount: number): number {
		if(amount < 0) {
			console.error("Amount to deposit cannot be negative");
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
}