class Friend {
	name: string;
	email: string;	
	years: number;

	constructor(name: string, email: string, years: number) {
		this.name = name;
		this.email = email;
		this.years = years;
	}

	printOut(): void {
		console.log(`Name = ${this.name} | Email = ${this.email} | Years = ${this.years}`);
	}
}
let friends: Friend[] = [
	new Friend("Christina","cfox32@gmail.com", 1),    
	new Friend("Jude", "judewesselman@gmail.com", 5),   
	new Friend("Carole", "carolewesselman@gmail.com", 3), 
	new Friend("Sherry", "sherryd@gmail.com", 2), 
	new Friend("Geneva", "genevashay@yahoo.com", 2), 
	new Friend("Anthony", "anthony.smith@gmail.com", 7),  
]
for (let friend of friends)   {
	friend.printOut();
}
