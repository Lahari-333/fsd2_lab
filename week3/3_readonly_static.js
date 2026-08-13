var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, accountHolder, balance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
        BankAccount.totalAccounts++;
        console.log("Bank Name:", BankAccount.bankName);
    }
    BankAccount.prototype.display = function () {
        console.log("Account Number:", this.accountNumber);
        console.log("Account Holder:", this.accountHolder);
        console.log("Balance:", this.balance);
        console.log("-------------------------");
    };
    BankAccount.displayBankDetails = function () {
        console.log("Bank Name:", BankAccount.bankName);
        console.log("Total Accounts:", BankAccount.totalAccounts);
    };
    BankAccount.bankName = "State Bank";
    BankAccount.totalAccounts = 0;
    return BankAccount;
}());
var acc1 = new BankAccount(101, "Lahari", 50000);
var acc2 = new BankAccount(102, "Sai", 75000);
acc1.display();
acc2.display();
BankAccount.displayBankDetails();
// Testing readonly
// acc1.accountNumber = 200;   // ❌ Error
acc1.balance = 60000;
console.log("Updated Balance:", acc1.balance);
// Testing static properties
console.log("Bank:", BankAccount.bankName);
console.log("Accounts Created:", BankAccount.totalAccounts);
