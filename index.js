#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
const currency = {
    USD: 1, //Base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let userAnswer = await inquirer.prompt([
    {
        name: 'from',
        message: 'Change from..',
        type: 'list',
        choices: [
            'USD', 'EUR', 'GBP', 'INR', 'PKR',
        ]
    },
    {
        name: 'to',
        message: 'Change to..',
        type: 'list',
        choices: [
            'USD', 'EUR', 'GBP', 'INR', 'PKR',
        ]
    },
    {
        name: 'amount',
        message: 'Enter amount..',
        type: 'number',
    }
]);
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(chalk.green(`\n${amount} ${userAnswer.from} = ${convertedAmount} ${userAnswer.to}\n`));
