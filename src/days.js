// @flow

const isLeapYear = year =>
    year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;

const getDaysOfFebruary = year =>
    isLeapYear(year) ? 29 : 28;

export const getDaysOfMonth = (year: number, month: number) =>
    month === 0 && 31 ||
    month === 1 && getDaysOfFebruary(year) ||
    month === 2 && 31 ||
    month === 3 && 30 ||
    month === 4 && 31 ||
    month === 5 && 30 ||
    month === 6 && 31 ||
    month === 7 && 31 ||
    month === 8 && 30 ||
    month === 9 && 31 ||
    month === 10 && 30 ||
    month === 11 && 31 ||
    -1;

// Gauss's algorithm
const getFirstWeekday = year =>
    (1 + 5 * ((year - 1) % 4) + 4 * ((year - 1) % 100) + 6 * ((year - 1) % 400)) % 7;

const getLeapDays = (year, month) =>
    isLeapYear(year) && month > 1 ? 1 : 0;

const getOrdinalDayWithoutLeap = month =>
    month === 1 && 31 ||
    month === 2 && 59 ||
    month === 3 && 90 ||
    month === 4 && 120 ||
    month === 5 && 151 ||
    month === 6 && 181 ||
    month === 7 && 212 ||
    month === 8 && 243 ||
    month === 9 && 273 ||
    month === 10 && 304 ||
    month === 11 && 334 ||
    0;

const getOrdinalDay = (year, month, day) =>
    getOrdinalDayWithoutLeap(month) + getLeapDays(year, month) + day - 1;

export const getDayOfWeek = (year: number, month: number, day: number) =>
    (getFirstWeekday(year) + getOrdinalDay(year, month, day)) % 7;
