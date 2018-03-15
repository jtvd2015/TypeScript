"use strict";
var Customer = /** @class */ (function () {
    function Customer(id, name, active, creditLimit) {
        this.id = id;
        this.name = name;
        this.active = active;
        this.creditLimit = creditLimit;
    }
    Customer.prototype.printOut = function () {
        console.log("Id=" + this.id + ", Name=" + this.name + ", Active=" + this.active + ", CreditLimit=" + this.creditLimit);
    };
    return Customer;
}());
var custs = [
    new Customer(1, "MAX", true, 10000),
    new Customer(2, "Chipotle", true, 20000),
    new Customer(3, "Tazikis", true, 9000),
]; /*[]; sets it to an empty array*/
for (var _i = 0, custs_1 = custs; _i < custs_1.length; _i++) {
    var customer = custs_1[_i];
    customer.printOut();
}
/*let customer: Customer = new Customer(1, "Max Technical Training", true, 10000);  /*this will print out just 1 customer*/
customer.printOut();
 * /;
