import { render } from 'inferno';
import createElement from 'inferno-create-element';
import withCalendar from './withCalendar.js';

test('passes days objects with day', () => {
    const stub = document.createElement('div');
    const results = [];
    const Wrapped = withCalendar()(props => results.unshift(props));

    render(<Wrapped year={2017} month={2} />, stub);
    expect(results[0].days.map(item => item.day).slice(0, 3)).toEqual([26, 27, 28]);
    expect(results[0].days.map(item => item.day).slice(3, 34)).toEqual(Array(31).fill(0).map((d, i) => i + 1));
    expect(results[0].days.map(item => item.day).slice(34)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});

test('passes days objects with month', () => {
    const stub = document.createElement('div');
    const results = [];
    const Wrapped = withCalendar()(props => results.unshift(props));

    render(<Wrapped year={2017} month={2} />, stub);
    expect(results[0].days.map(item => item.month).slice(0, 3)).toEqual(Array(3).fill(1));
    expect(results[0].days.map(item => item.month).slice(3, 34)).toEqual(Array(31).fill(2));
    expect(results[0].days.map(item => item.month).slice(34)).toEqual(Array(8).fill(3));
});

test('specifies days in previous, current or next months', () => {
    const stub = document.createElement('div');
    const results = [];
    const Wrapped = withCalendar()(props => results.unshift(props));

    render(<Wrapped year={2017} month={2} />, stub);
    expect(results[0].days.map(item => item.prevMonth).slice(0, 3)).toEqual(Array(3).fill(true));
    expect(results[0].days.map(item => item.currentMonth).slice(3, 34)).toEqual(Array(31).fill(true));
    expect(results[0].days.map(item => item.nextMonth).slice(34)).toEqual(Array(8).fill(true));
});

test('passes days objects with year', () => {
    const stub = document.createElement('div');
    const results = [];
    const Wrapped = withCalendar()(props => results.unshift(props));

    render(<Wrapped year={2016} month={0} />, stub);
    expect(results[0].days.map(item => item.year).slice(0, 5)).toEqual(Array(5).fill(2015));
    expect(results[0].days.map(item => item.year).slice(5, 36)).toEqual(Array(31).fill(2016));
    expect(results[0].days.map(item => item.year).slice(36)).toEqual(Array(6).fill(2016));

    render(<Wrapped year={2017} month={11} />, stub);
    expect(results[0].days.map(item => item.year).slice(0, 5)).toEqual(Array(5).fill(2017));
    expect(results[0].days.map(item => item.year).slice(5, 36)).toEqual(Array(31).fill(2017));
    expect(results[0].days.map(item => item.year).slice(36)).toEqual(Array(6).fill(2018));
});

test('passes week order with first sunday by default', () => {
    const stub = document.createElement('div');
    const results = [];
    const Wrapped = withCalendar()(props => results.unshift(props));

    render(<Wrapped year={2016} month={0} />, stub);
    expect(results[0].week).toEqual([0, 1, 2, 3, 4, 5, 6]);
});
