import { render } from 'inferno';
import createElement from 'inferno-create-element';
import Component from 'inferno-component';
import withCalendar from './withCalendar.js';
import withHandlers from './withHandlers.js';

const Day = withHandlers({
    selectDay: props => props.dispatch({
        type: 'SELECT_DAY',
        year: props.year,
        month: props.month,
        day: props.day
    })
})(props =>
    <div style={{ width: 32, height: 20, border: '1px solid', color: props.currentMonth ? '#000' : '#999' }}
        onClick={props.selectDay}>
        {props.day}
    </div>
);

const weekNames = {
    0: 'Sun',
    1: 'Mon',
    2: 'Tue',
    3: 'Wed',
    4: 'Thu',
    5: 'Fri',
    6: 'Sat'
};

const Calendar = withHandlers({
    prevMonth: props => props.dispatch({
        type: 'PREV_MONTH'
    }),
    nextMonth: props => props.dispatch({
        type: 'NEXT_MONTH'
    })
})(
    withCalendar()(props =>
        <div>
            <div style={{ display: 'flex' }}>
                <div onClick={props.prevMonth}>Prev</div>
                <div onClick={props.nextMonth}>Next</div>
            </div>
            <div>
                {props.year} {props.month + 1}
            </div>
            <div style={{ display: 'flex', marginBottom: 2 }}>
                {props.week.map(day =>
                    <div style={{ width: 32, height: 20, border: '1px solid', color: '#999' }}>
                        {weekNames[day]}
                    </div>
                )}
            </div>
            <div style={{ display: 'flex', flexFlow: 'wrap', width: 238 }}>
                {props.days.map(item =>
                    <Day {...item} dispatch={props.dispatch} />
                )}
            </div>
        </div>
    )
);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year: 2417,
            month: 1
        };
        this.dispatch = this.dispatch.bind(this);
    }

    dispatch(action) {
        console.log(action);
        this.setState(state => {
            switch (action.type) {
                case 'PREV_MONTH':
                    return {
                        year: state.month === 0 ? state.year - 1 : state.year,
                        month: state.month === 0 ? 11 : state.month - 1
                    };
                case 'NEXT_MONTH':
                    return {
                        year: state.month === 11 ? state.year + 1 : state.year,
                        month: state.month === 11 ? 0 : state.month + 1
                    }
            }
        });
    }

    render(props, state) {
        return (
            <div>
                <Calendar
                    year={state.year}
                    month={state.month}
                    dispatch={this.dispatch} />
                <Calendar
                    year={state.year}
                    month={state.month}
                    dispatch={this.dispatch} />
            </div>
        );
    }
}

render(<App />, document.body.appendChild(document.createElement('div')));
