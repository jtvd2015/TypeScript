"use strict";
/*Typescript Practice Exercise:

# Foo Bar Program in Typescript

-    Write a program that prints the numbers from 1 to 100 inclusive
-    If the number is evenly divisible by three (3), print “foo”
-    If the number is evenly divisible by five (5), print “bar”.
-    If the number is evenly divisible by three and five, print “FooBar”.
*/
var FooBar = /** @class */ (function () {
    function FooBar() {
    }
    FooBar.prototype.run = function () {
        var msg = "";
        for (var x_1 = 1; x_1 <= 100; x_1++) {
            var strNbr = "";
            if (x_1 % 3 == 0) {
                strNbr += "Foo";
            }
            if (x_1 % 5 == 0) {
                strNbr += "Bar";
            }
            if (strNbr == "") {
                strNbr += "" + x_1;
            }
            msg += strNbr + " ";
        }
        console.log(msg);
    };
    return FooBar;
}());
var fb = new FooBar();
fb.run();
