import { getOfDaysOfMonth, getWeekDay, getWeeksSquare } from './utils.js';

test('y2k bug', () => {
    expect(getOfDaysOfMonth(1600, 1)).toEqual(29);
    expect(getOfDaysOfMonth(1900, 1)).toEqual(28);
    expect(getOfDaysOfMonth(1996, 1)).toEqual(29);
    expect(getOfDaysOfMonth(1997, 1)).toEqual(28);
    expect(getOfDaysOfMonth(2000, 1)).toEqual(29);
    expect(getOfDaysOfMonth(2004, 1)).toEqual(29);
});

test('day of unknown month should be -1', () => {
    expect(getOfDaysOfMonth(2000, 23)).toEqual(-1);
});

test('january has 31 days', () => {
    expect(getOfDaysOfMonth(2000, 0)).toEqual(31);
});

test('march has 31 days', () => {
    expect(getOfDaysOfMonth(2000, 2)).toEqual(31);
});

test('april has 30 days', () => {
    expect(getOfDaysOfMonth(2000, 3)).toEqual(30);
});

test('may has 31 days', () => {
    expect(getOfDaysOfMonth(2000, 4)).toEqual(31);
});

test('june has 30 days', () => {
    expect(getOfDaysOfMonth(2000, 5)).toEqual(30);
});

test('july has 31 days', () => {
    expect(getOfDaysOfMonth(2000, 6)).toEqual(31);
});

test('august has 31 days', () => {
    expect(getOfDaysOfMonth(2000, 7)).toEqual(31);
});

test('september has 30 days', () => {
    expect(getOfDaysOfMonth(2000, 8)).toEqual(30);
});

test('october has 31 days', () => {
    expect(getOfDaysOfMonth(2000, 9)).toEqual(31);
});

test('november has 30 days', () => {
    expect(getOfDaysOfMonth(2000, 10)).toEqual(30);
});

test('december has 31 days', () => {
    expect(getOfDaysOfMonth(2000, 11)).toEqual(31);
});

test('week day', () => {
    expect(getWeekDay(1902, 10, 21)).toEqual(5);
    expect(getWeekDay(1999, 11, 31)).toEqual(5);
    expect(getWeekDay(2000, 0, 1)).toEqual(6);
    expect(getWeekDay(2000, 0, 2)).toEqual(0);
    expect(getWeekDay(2000, 0, 3)).toEqual(1);
    expect(getWeekDay(2000, 2, 24)).toEqual(5);
    expect(getWeekDay(2016, 1, 29)).toEqual(1);
});

/*
const getRange = (min, max) => Array(max + 1 - min).fill(undefined).map((d, index) => index + min);

test('weeks square in month with day prop', () => {
    expect(getWeeksSquare(2000, 0).map(d => d.day)).toEqual(
        [...getRange(27, 31), ...getRange(1, 31), ...getRange(1, 6)]
    );
});

test('weeks square in month with month prop', () => {
    expect(getWeeksSquare(2000, 0).map(d => d.month)).toEqual(
        [...Array(5).fill(12), ...Array(31).fill(0), ...Array(6).fill(1)]
    );
});

test('weeks square in month with year prop', () => {
    expect(getWeeksSquare(2000, 0).map(d => d.year)).toEqual(
        [...Array(5).fill(1999), ...Array(31).fill(2000), ...Array(6).fill(2000)]
    );
});
*/
