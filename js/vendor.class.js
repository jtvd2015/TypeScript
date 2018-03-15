"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vendor = /** @class */ (function () {
    function Vendor(id, code, name, address, city, state, zip, phone, email, active) {
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
    Vendor.prototype.printOut = function () {
        console.log("Id = " + this.id + " | Code = " + this.code + " | Name = " + this.name + " | Address = " + this.address + " | City = " + this.city + " | State = " + this.state + " | Zip = " + this.zip + " | Phone = " + this.phone + " | Email = " + this.email + " | Active = " + this.active);
    };
    return Vendor;
}());
exports.Vendor = Vendor;
