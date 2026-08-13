"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ticket = void 0;
var Constants_1 = require("./Constants");
var Ticket = /** @class */ (function () {
    function Ticket(passenger, baseFare, trainNumber) {
        this.passenger = passenger;
        this.baseFare = baseFare;
        this.trainNumber = trainNumber;
    }
    Ticket.prototype.calculateFinalFare = function () {
        var taxAmount = this.baseFare * Constants_1.GST_RATE;
        return this.baseFare + taxAmount + Constants_1.CONVENIENCE_FEE;
    };
    Ticket.prototype.printTicket = function () {
        console.log("E-Ticket Confirmed");
        console.log("Passenger: ".concat(this.passenger.name, " (").concat(this.passenger.age, ")"));
        console.log("Train No: ".concat(this.trainNumber));
        console.log("Total Fare: ".concat(this.calculateFinalFare()));
        console.log("--------------------------");
    };
    return Ticket;
}());
exports.Ticket = Ticket;
