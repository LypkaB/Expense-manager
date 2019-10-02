'use strict';

let money, time;

function start() {
    money = +prompt("What's your monthly budget?", '');
    time = prompt('Enter the date in the format YYYY-MM-DD', '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("What's your monthly budget?", '');
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Enter a required cost item this month', ''),
            b = prompt('How much will it cost?', '');

        if ( (typeof (a)) === 'string' && (typeof (a)) != null  && (typeof (b)) != null
            && a != '' && b != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
        } else {
            i = i - 1;
        }
    }
}
chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert ('1 day budget ' + appData.moneyPerDay + '$');
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log ('This is the minimum level of prosperity!');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log ('This is an average level of prosperity!');
    } else if (appData.moneyPerDay > 2000) {
        console.log ('This is a high level of prosperity!');
    } else {
        console.log ('Mistake...!');
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("What's the accumulation?");
        let percent = +prompt('What percentage?');

        appData.monthIncome = save/100/12*percent;
        alert('Income per month from your deposit: ' + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt('An item of optional expenses?');
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }
}
chooseOptExpenses();