class bank {
    constructor(balance) {
        this.balance = balance
    }
    deposit(amount) {
        this.balance += amount
        console.log('Amount Deposited Successfully!')
        console.log({ balance: `₹${this.balance}` })

    }
    withdrawl(amount) {

        if (this.balance > amount) {
            this.balance -= amount
            console.log('Amount withdrawn Successfully!')
            console.log({ balance: `₹${this.balance}` })
        }
        else {
            alert('Insufficient Funds!')
        }
    }
}
let fidel = new bank(5000)
// castro.withdrawl(3000)

// castro.deposit(3000)
let greet = document.querySelector('.greet')
let balance = document.querySelector('.balance')
let depositinput = document.querySelector('.depositinput')
let withdrawlinput = document.querySelector('.withdrawlinput')
let depositbtn = document.querySelector('.depositbtn')
let withdrawlbtn = document.querySelector('.withdrawlbtn')

withdrawlbtn.onclick = () => {
    fidel.withdrawl(Number(withdrawlinput.value))
    withdrawlinput.value = ""
    balance.innerText = `Your Account Balance ₹${fidel.balance}  `
}
depositbtn.onclick = () => {
    fidel.deposit(Number(depositinput.value))
    depositinput.value = ""
    balance.innerText = `Your Account Balance ₹${fidel.balance} 
                              `}
// console.log(castro.balance)