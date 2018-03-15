"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Account = /** @class */ (function () {
    function Account() {
        /*a set of () defines a method, if no () are there, then it's a property*/
        this.balance = 0;
    }
    Account.prototype.getbalance = function () {
        return this.balance;
    };
    Account.prototype.deposit = function (amount) {
        if (amount < 0) {
            console.error("Amount to deposit cannot be negative");
            return this.balance;
        }
        this.balance += amount; /*this will add the balance to the new amount*/
        return this.balance;
    };
    Account.prototype.withdraw = function (amount) {
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
    return Account;
}());
exports.Account = Account;
