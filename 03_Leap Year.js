function solve(year) {
    'use srict';

    const isLeapYear = (year % 4 == 0 && year % 100 !== 0) || year % 400 === 0;
    const message = isLeapYear ? "yes" : "no";
    console.log(message);
}
solve(184)