function getFirstPackage(items) {
    return items[0];
}
function wrapInBox(item) {
    return {
        parcel: item,
        timestamp: new Date(),
    };
}
var cities = ["Mumbai", "Delhi", "Banglore"];
var firstCity = getFirstPackage(cities);
console.log("Sending first parcel to :".concat(firstCity.toUpperCase()));
var pincodes = [400001, 110001, 560001];
var firstPin = getFirstPackage(pincodes);
console.log("Startibg delivery at Pincode : $".concat(firstPin));
var phone = { brand: "Samsung", model: "S24" };
var packedPhone = wrapInBox(phone);
console.log("Packed item : ".concat(packedPhone.parcel.brand, " at ").concat(packedPhone.timestamp));
var autocity = getFirstPackage(cities);
