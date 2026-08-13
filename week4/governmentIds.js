var GovernmentID;
(function (GovernmentID) {
    var aadhaarLength = 12;
    function validateAadhaar(id) {
        var isNumeric = /^\d+$/.test(id);
        return isNumeric && id.length === aadhaarLength;
    }
    GovernmentID.validateAadhaar = validateAadhaar;
    function validatePAN(pan) {
        var panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        return panRegex.test(pan.toUpperCase());
    }
    GovernmentID.validatePAN = validatePAN;
    var Tax;
    (function (Tax) {
        function calculateGST(amount) {
            return amount * 0.18;
        }
        Tax.calculateGST = calculateGST;
    })(Tax = GovernmentID.Tax || (GovernmentID.Tax = {}));
})(GovernmentID || (GovernmentID = {}));
var myAadhaar = "123456789012";
var myPAN = "ABCDE1234F";
console.log("Is Aadhaar Valid? ".concat(GovernmentID.validateAadhaar(myAadhaar)));
console.log("Is PAN Valid? ".concat(GovernmentID.validatePAN(myPAN)));
var billAmount = 1000;
var tax = GovernmentID.Tax.calculateGST(billAmount);
console.log("GST on ".concat(billAmount, " is ").concat(tax));
