class User {
	id: number;
	username: string;
	password: string;
	firstname: string;
	lastname: string;
	phone: number;
	email: string;	
	active: boolean;

	constructor(id: number, username: string, password: string, firstname: string, lastname: string, phone: number, email: string, active: boolean) {
		this.id = id;
		this.username = username;
		this.password = password;
		this.firstname = firstname;
		this.lastname = lastname;
		this.phone = phone;
		this.email = email;
		this.active = active;
	}

	printOut(): void {
		console.log(`Id = ${this.id} | UserName = ${this.username} | Name = ${this.firstname + " " + this.lastname} | Phone = ${this.phone} | Email = ${this.email} | Active = ${this.active}`);
	}
}
let users: User[] = [
	new User(1, "jtvd2015", "m3u2#@", "Jennifer", "Wesselman", 8594452701, "wesselman.j@gmail.com", true),    
	new User(2, "linusrules", "bl@nk13", "Linus", "Van Pelt", 8595551205, "linusrules@outlook.com", true),   
	new User(3, "snoopy", "sn00py", "Snoopy", "Brown", 8595551207, "wwoneace@yahoo.com", true), 
]
for (let user of users)   {
	user.printOut();
}