class Bank{
    createAccount(acno,pName,pan,branch,phn,balance){
    this.acno=acno
    this.personName=pName
    this.pan=pan
    this.branch=branch
    this.phn=phn
    this.balance=balance
    }
    withDraw(amount){
    if(amount>this.balance){
        console.log(`transaction failed in insufficient balance on ur${this.accountNumber}`);
    }
    else{
        this.balance-=amount
        console.log(`your account number ${this.accountNumber}has been debited with amount ${amount}your aval bal${this.balance}`);
    }
    }
    deposit(amount){
    this.balance+=amount
    console.log(`your account number ${this.accountNumber}has been credited with amount ${amount}your aval bal${this.balance}`);
    }
    balanceEnquiry(){
    console.log(`your available bal=${this.balance}`);
    }
}

//creating object
var bank=new Bank()
bank.createAccount(1000,"arjun",1234,"kakkanad",9898552221,2000) //acno,name,pan,branch,phno,balance
bank.withDraw(1000) //to withdraw
bank.deposit(1000) // for depositing
bank.balanceEnquiry() //for know balance