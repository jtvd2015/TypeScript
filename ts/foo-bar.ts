/*Typescript Practice Exercise:

# Foo Bar Program in Typescript

-    Write a program that prints the numbers from 1 to 100 inclusive
-    If the number is evenly divisible by three (3), print “foo”
-    If the number is evenly divisible by five (5), print “bar”.
-    If the number is evenly divisible by three and five, print “FooBar”.
*/
class FooBar {
	run(): void {
		let msg = "";
		for(let x =1; x <= 100; x++) {
			let strNbr = "";
			if(x%3 == 0) {strNbr += "Foo";}
			if(x%5 == 0) {strNbr += "Bar";}
			if(strNbr == "") {strNbr += `${x}`}
			msg += strNbr+ " ";
		}
		console.log(msg);
	}
}
let fb: FooBar = new FooBar();
fb.run();