var Locker = /** @class */ (function () {
    function Locker(initialItem) {
        this.contents = initialItem;
    }
    Locker.prototype.getItem = function () {
        console.log("Accessing locker...");
        return this.contents;
    };
    Locker.prototype.depositItem = function (newItem) {
        this.contents = newItem;
        console.log("Locker updated successfully.");
    };
    return Locker;
}());
var cashLocker = new Locker(5000);
var cash = cashLocker.getItem();
console.log("Current Balance: \u20B9".concat(cash));
var documentLocker = new Locker("Property Papers - Mumbai Flat");
console.log("Stored Document: ".concat(documentLocker.getItem()));
var goldLocker = new Locker({
    weightGrams: 50,
    purity: "24K"
});
var myGold = goldLocker.getItem();
console.log("Gold Weight: ".concat(myGold.weightGrams, "g"));
