"use strict";
var User = /** @class */ (function () {
    function User(id, username, password, firstname, lastname, phone, email, active) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
        this.email = email;
        this.active = active;
    }
    User.prototype.printOut = function () {
        console.log("Id = " + this.id + " | UserName = " + this.username + " | Name = " + (this.firstname + " " + this.lastname) + " | Phone = " + this.phone + " | Email = " + this.email + " | Active = " + this.active);
    };
    return User;
}());
var users = [
    new User(1, "jtvd2015", "m3u2#@", "Jennifer", "Wesselman", 8594452701, "wesselman.j@gmail.com", true),
    new User(2, "linusrules", "bl@nk13", "Linus", "Van Pelt", 8595551205, "linusrules@outlook.com", true),
    new User(3, "snoopy", "sn00py", "Snoopy", "Brown", 8595551207, "wwoneace@yahoo.com", true),
];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    user.printOut();
}
