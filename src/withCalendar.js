import createElement from 'inferno-create-element';
import Component from 'inferno-component';
import { getDaysOfMonth, getWeekDay } from './utils.js';

const withCalendar = () => BaseComponent => class extends Component {
    constructor(props) {
        super(props);
        this.updateDays(props);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.year !== nextProps.year || this.props.month !== nextProps.month) {
            this.updateDays(nextProps);
        }
    }


    updateDays(props) {
        const prevDaysCount = getDaysOfMonth(
            props.month === 0 ? props.year - 1 : props.year,
            props.month === 0 ? 11 : props.month - 1
        );
        const currDaysCount = getDaysOfMonth(props.year, props.month);
        const weekDay = getWeekDay(props.year, props.month, 1);
        const nextDaysCount = 42 - currDaysCount - weekDay;
        this.days = [
            ...Array(weekDay).fill(0).map((d, i) => ({
                month: props.month === 0 ? 11 : props.month - 1,
                day: i + prevDaysCount - weekDay + 1
            })),
            ...Array(currDaysCount).fill(0).map((d, i) => ({
                month: props.month,
                day: i + 1
            })),
            ...Array(nextDaysCount).fill(0).map((d, i) => ({
                month: props.month === 11 ? 0 : props.month + 1,
                day: i + 1
            }))
        ];
    }

    render(props) {
        return (
            <BaseComponent year={props.year} month={props.month} days={this.days} />
        );
    }
}

export default withCalendar;
