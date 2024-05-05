#! /usr/bin/env node
import inquirer from "inquirer";

const currency: any ={
    USD: 1,
    EUR: 0.92,
    GBP: 0.79,
    INR: 83.38,
    PKR: 280

}
//async function main() {
let answer = await inquirer.prompt([{
    name: "amount",
    type: "number",
    message: "Enter the Amount you Want to Convert:"
},
{ name: "currencyFrom",
 type: "list",
 message: "Enter the Currency to Convert from:",
 choices: ["PKR" , "USD", "EUR" , "GBP" , "INR"]
},
{
    name: "currencyTo",
    type: "list",
    message:"Enter the Currency to Convert to:",
    choices: ["PKR" , "USD", "EUR" , "GBP" , "INR"]
}
]);

let fromAmount = currency[answer.currencyFrom]
let toAmount = currency[answer.currencyTo]
let amount = answer.amount
let baseAmount = amount/ fromAmount
let convertedAmount = baseAmount * toAmount
console.log(`convertedAmount: ${convertedAmount.toFixed(2)} ${answer.currencyTo}`);

