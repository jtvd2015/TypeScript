import {Account} from "./account.class";
import {Savings} from "./savings.class";

export class Banking {
	constructor() {

	}	

	main(): void {
		/*let account: Account = new Account(); /*this creates a variable account of class Account with a new instance of the Account class*/ 
		/*let balance: number = account.deposit(100);	
		if(balance != 100) {
			//if the balance does not equal 100, there is a problem
			console.log("If the balance does not equal, there is a problem");
			return;
		}
		console.log("Deposit successful");

		/*balance = account.withdraw(25); /*no need to put 'let' before balance because it is already defined above*/
		/*if(balance != 75) {
			console.log("If the withdraw does not equal, there is a problem");
			return;			
		}	
		/*check for negative deposit*/
		/*balance = account.deposit(-100);
		if (balance != 75) {
			console.log("If the account is overdrawn, there is a problem");
			return;
		}
		console.log("Withdraw successful");		
		/*check for negative balance*/
		/*balance = account.withdraw(100);
		if (balance != 75) {
			console.log("If the account is overdrawn, there is a problem");
			return;
		}
		/*console.log("Withdraw successful");	
		/*check for negative amount*/
		/*balance = account.withdraw(-100);
		if (balance != 75) {
			console.log("If the account is overdrawn, there is a problem");
			return;
		}
		/*display balance*/
		/*balance = account.getbalance();		
		if (balance != 75) {
			console.log("Balance is no good");
			return;
		}
		/*console.log(balance);*/

		/*Savings*/
		let savings: Savings = new Savings(); 
		let balance: number = savings.deposit(100);	
		balance = savings.IntRateCalc(1);
		if(balance != 112) {
			//if the balance does not equal 100, there is a problem
			console.log(balance);
			return;
		}
		/*withdraw*/
		balance = savings.withdraw(25); /*no need to put 'let' before balance because it is already defined above*/
		if(balance != 75) {
			console.log("If the withdraw does not equal, there is a problem");
			return;			
		}	
		/*check for negative deposit*/
		balance = savings.deposit(-100);
		if (balance != 75) {
			console.log("If the account is overdrawn, there is a problem");
			return;
		}
		console.log("Withdraw successful");		
		/*check for negative balance*/
		balance = savings.withdraw(100);
		if (balance != 75) {
			console.log("If the account is overdrawn, there is a problem");
			return;
		}
		console.log("Withdraw successful");	
		/*check for negative amount*/
		balance = savings.withdraw(-100);
		if (balance != 75) {
			console.log("If the account is overdrawn, there is a problem");
			return;
		}
		/*display balance*/
		balance = savings.getbalance();		
		if (balance != 75) {
			console.log("Balance is no good");
			return;
		}
		console.log(balance);

	}
}

let banking: Banking = new Banking();  /*this creates a variable banking of class Banking with a new instance of the Banking class*/
banking.main();

