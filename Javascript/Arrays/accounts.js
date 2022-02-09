var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
  
  ]
  //  q1  total number accounts
    //  console.log(accounts.length);
   
//q2  print all account numbers whose ac-type savings
//    accounts.filter(data=>data.ac_type=="savings").forEach(account=>console.log( account.acno));

//q3 print balance of acno=1000
// var balance=accounts.find(data=>data.acno==1000).balance
// console.log(balance);

//q4 print all g-pay transaction details
// var phonePayTransactions=accounts.map(data=>data.transactions).flat().filter(t=>t.method=="phone-pay")
// console.log(phonePayTransactions);

//print all transactions whose transaction amount>500             t=transaction
// accounts.map(data=>data.transactions).flat().filter(t=>t.amount>500).forEach(t=>console.log(t))

//q4 print credit transcation's of 1002
// var creditTrans=accounts.map(data=>data.transactions).flat().filter(t=>t.to==1002)
// console.log(creditTrans);
// // //debit transaction of 1002
// var debitTrans=accounts.find(data=>data.acno==1002).transactions
// console.log(debitTrans);
// //credit+debit=transactionhistory
// var transactionHistory={debitTrans:debitTrans,creditTrans:creditTrans}
// console.log(transactionHistory);

//q5 print highest balance account details
//   var transactionHistory=[]
//   for(let t of creditTrans){
//      transactionHistory.push(t)
    
//   }
//   for(let t of debitTrans){
//     transactionHistory.push(t)
//   }
//  console.log(transactionHistory);

// var transactionHistory={debitTrans:debitTransaction,creditTrans:creditTransaction}
// console.log(transactionHistory);

                                 //  0R
  
// var creditTrans=accounts.map(data=>data.transactions).flat().filter(t=>t.to==1002)
// console.log(creditTrans);
// var debitTrans=accounts.find(data=>data.acno==1002).transactions
// console.log(debitTrans);
//   var transactionHistory=[...creditTrans,...debitTrans]
//   console.log(transactionHistory);


//q6 print transaction history of 1002
// var creditTrans=accounts.map(data=>data.transactions).flat().filter(t=>t.to==1002)
// console.log(creditTrans);
// var debitTrans=accounts.find(data=>data.acno==1002).transactions
// console.log(debitTrans);
//   var transactionHistory=[...creditTrans,...debitTrans]
//   console.log(transactionHistory);