import {Vendor} from "./vendor-class";

let vendors: Vendor[] = [
	new Vendor(1, "AMZN", "Amazon", "Address", "City", "State", 11111, 1112223333, "amazon@amazon.com", true),    
	new Vendor(2, "COST", "Costco", "Address", "City", "State", 22222, 2223334444, "costco@costco.com", true),    
]
for (let vendor of vendors)   {
	vendor.printOut();
}