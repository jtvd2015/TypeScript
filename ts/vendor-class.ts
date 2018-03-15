export class Vendor {
	id: number;
	code: string;
	name: string;
	address: string;
	city: string;
	state: string;
	zip: number;
	phone: number;
	email: string;	
	active: boolean;

	constructor(id: number, code: string, name: string, address: string, city: string, state: string, zip: number, phone: number, email: string, active: boolean) {
		this.id = id;
		this.code = code;
		this.name = name;
		this.address = address;
		this.city = city;
		this.state = state;
		this.zip = zip;
		this.phone = phone;
		this.email = email;
		this.active = active;
	}

	printOut(): void {
		console.log(`Id = ${this.id} | Code = ${this.code} | Name = ${this.name} | Address = ${this.address} | City = ${this.city} | State = ${this.state} | Zip = ${this.zip} | Phone = ${this.phone} | Email = ${this.email} | Active = ${this.active}`);
	}
}