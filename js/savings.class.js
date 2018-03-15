"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Savings = /** @class */ (function () {
    function Savings() {
        /*a set of () defines a method, if no () are there, then it's a property*/
        this.balance = 0;
        this.intRate = 0.12;
    }
    Savings.prototype.getbalance = function () {
        return this.balance;
    };
    Savings.prototype.deposit = function (amount) {
        if (amount < 0) {
            console.log("Amount to deposit cannot be negative");
            return this.balance;
        }
        this.balance += amount; /*this will add the balance to the new amount*/
        return this.balance;
    };
    Savings.prototype.withdraw = function (amount) {
        if (amount < 0) {
            console.error("Amount to withdraw cannot be negative");
            return this.balance;
        }
        if (amount > this.balance) {
            console.error("Insufficient funds");
            return this.balance;
        }
        this.balance -= amount;
        return this.balance;
    };
    /*calculate interest*/
    Savings.prototype.IntRateCalc = function (termMonths) {
        var interest = this.balance * ((this.intRate / 12) * termMonths);
        return this.deposit(interest);
    };
    return Savings;
}());
exports.Savings = Savings;
