"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vendor_class_1 = require("./vendor-class");
var vendors = [
    new vendor_class_1.Vendor(1, "AMZN", "Amazon", "Address", "City", "State", 11111, 1112223333, "amazon@amazon.com", true),
    new vendor_class_1.Vendor(2, "COST", "Costco", "Address", "City", "State", 22222, 2223334444, "costco@costco.com", true),
];
for (var _i = 0, vendors_1 = vendors; _i < vendors_1.length; _i++) {
    var vendor = vendors_1[_i];
    vendor.printOut();
}
