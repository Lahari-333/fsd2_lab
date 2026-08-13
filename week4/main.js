"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TicketLogic_1 = require("./TicketLogic");
var traveller = {
    name: "Suresh Kumar",
    age: 45,
    berthPreference: "Lower"
};
var myTicket = new TicketLogic_1.Ticket(traveller, 1200, 12626);
myTicket.printTicket();
