function createAccount(pin, amount) {
    let registeredPin = pin;
    let balance = amount;

    function checkBalance(pin) {
        if (pin === registeredPin) {
            return balance
        }
        else {
            return "Access denied"
        }
    }

    function deposit(pin, amount) {
        if (pin === registeredPin) {
            balance += amount;
            return `Successfully deposited ${amount}, your new balance is ${balance}`
        }
        else {
            return 'Access denied'
        }
    }

    function withdraw(pin, amount) {
        if (pin === registeredPin) {
            balance -= amount;
            return `Successfully withdrew ${amount}, your new balance is ${balance}`
        }
        else {
            return 'Access denied'
        }
    }

    function changePin(pin, newPin) {
            if (pin === registeredPin) {
                registeredPin = newPin;
                return `Your new PIN is ${registeredPin}`
            }
            else {
                return 'Access denied'
            }
        
    }


    return {checkBalance, withdraw, deposit, changePin}


}

module.exports = { createAccount };

let account = createAccount('1234', 100);
console.log(account)

console.log(account.checkBalance('1234'))
console.log(account.deposit('1234', 300))
console.log(account.withdraw('1234', 100))
console.log(account.changePin('1234' , '5678'))