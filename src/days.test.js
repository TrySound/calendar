// @flow

import { getDaysOfMonth, getDayOfWeek } from './days.js';

test('y2k bug', () => {
    expect(getDaysOfMonth(1600, 1)).toEqual(29);
    expect(getDaysOfMonth(1900, 1)).toEqual(28);
    expect(getDaysOfMonth(1996, 1)).toEqual(29);
    expect(getDaysOfMonth(1997, 1)).toEqual(28);
    expect(getDaysOfMonth(2000, 1)).toEqual(29);
    expect(getDaysOfMonth(2004, 1)).toEqual(29);
});

test('day of unknown month should be -1', () => {
    expect(getDaysOfMonth(2000, 23)).toEqual(-1);
});

test('january has 31 days', () => {
    expect(getDaysOfMonth(2000, 0)).toEqual(31);
});

test('march has 31 days', () => {
    expect(getDaysOfMonth(2000, 2)).toEqual(31);
});

test('april has 30 days', () => {
    expect(getDaysOfMonth(2000, 3)).toEqual(30);
});

test('may has 31 days', () => {
    expect(getDaysOfMonth(2000, 4)).toEqual(31);
});

test('june has 30 days', () => {
    expect(getDaysOfMonth(2000, 5)).toEqual(30);
});

test('july has 31 days', () => {
    expect(getDaysOfMonth(2000, 6)).toEqual(31);
});

test('august has 31 days', () => {
    expect(getDaysOfMonth(2000, 7)).toEqual(31);
});

test('september has 30 days', () => {
    expect(getDaysOfMonth(2000, 8)).toEqual(30);
});

test('october has 31 days', () => {
    expect(getDaysOfMonth(2000, 9)).toEqual(31);
});

test('november has 30 days', () => {
    expect(getDaysOfMonth(2000, 10)).toEqual(30);
});

test('december has 31 days', () => {
    expect(getDaysOfMonth(2000, 11)).toEqual(31);
});

test('week day', () => {
    expect(getDayOfWeek(1902, 10, 21)).toEqual(5);
    expect(getDayOfWeek(1999, 11, 31)).toEqual(5);
    expect(getDayOfWeek(2000, 0, 1)).toEqual(6);
    expect(getDayOfWeek(2000, 0, 2)).toEqual(0);
    expect(getDayOfWeek(2000, 0, 3)).toEqual(1);
    expect(getDayOfWeek(2000, 2, 24)).toEqual(5);
    expect(getDayOfWeek(2016, 1, 29)).toEqual(1);
});
