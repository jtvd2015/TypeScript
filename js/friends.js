"use strict";
var Friend = /** @class */ (function () {
    function Friend(name, email, years) {
        this.name = name;
        this.email = email;
        this.years = years;
    }
    Friend.prototype.printOut = function () {
        console.log("Name = " + this.name + " | Email = " + this.email + " | Years = " + this.years);
    };
    return Friend;
}());
var friends = [
    new Friend("Christina", "cfox32@gmail.com", 1),
    new Friend("Jude", "judewesselman@gmail.com", 5),
    new Friend("Carole", "carolewesselman@gmail.com", 3),
    new Friend("Sherry", "sherryd@gmail.com", 2),
    new Friend("Geneva", "genevashay@yahoo.com", 2),
    new Friend("Anthony", "anthony.smith@gmail.com", 7),
];
for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
    var friend = friends_1[_i];
    friend.printOut();
}
