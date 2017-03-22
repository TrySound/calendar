import createElement from 'inferno-create-element';
import withPropsOnChange from './withPropsOnChange.js';
import { getDaysOfMonth, getWeekDay } from './utils.js';

const withCalendar = () => withPropsOnChange(['year', 'month'], props => {
    const prevYear = props.month === 0 ? props.year - 1 : props.year;
    const nextYear = props.month === 11 ? props.year + 1 : props.year;
    const prevMonth = props.month === 0 ? 11 : props.month - 1;
    const nextMonth = props.month === 11 ? 0 : props.month + 1;
    const prevDaysCount = getDaysOfMonth(prevYear, prevMonth);
    const currDaysCount = getDaysOfMonth(props.year, props.month);
    const weekDay = getWeekDay(props.year, props.month, 1);
    const nextDaysCount = 42 - currDaysCount - weekDay;
    return {
        week: [0, 1, 2, 3, 4, 5, 6],
        days: [
            ...Array(weekDay).fill(0).map((d, i) => ({
                prevMonth: true,
                year: prevYear,
                month: prevMonth,
                day: i + prevDaysCount - weekDay + 1
            })),
            ...Array(currDaysCount).fill(0).map((d, i) => ({
                currentMonth: true,
                year: props.year,
                month: props.month,
                day: i + 1
            })),
            ...Array(nextDaysCount).fill(0).map((d, i) => ({
                nextMonth: true,
                year: nextYear,
                month: nextMonth,
                day: i + 1
            }))
        ]
    };
});

export default withCalendar;
