'use strict';

let money = prompt('What is your monthly budget?'),
    time = prompt('Enter the date in the format YYYY-MM-DD');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let a1 = prompt('Enter a required cost item this month', ''),
    a2 = prompt('How much will it cost?', ''),
    a3 = prompt('Enter a required cost item this month', ''),
    a4 = prompt('How much will it cost?', '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget / 30);