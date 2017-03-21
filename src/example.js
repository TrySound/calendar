import { render } from 'inferno';
import createElement from 'inferno-create-element';
import Component from 'inferno-component';
import withCalendar from './withCalendar.js';

const week = Array(7).fill(0).map((d, i) => i);

const Calendar = withCalendar()(props =>
    <div>
        <div>
            {props.year} {props.month + 1}
        </div>
        <div style={{ display: 'flex', marginBottom: 2 }}>
            {week.map(day =>
                <div style={{ width: 20, height: 20, border: '1px solid', color: '#999' }}>{day}</div>
            )}
        </div>
        <div style={{ display: 'flex', flexFlow: 'wrap', width: 154 }}>
            {props.days.map(item =>
                <div style={{ width: 20, height: 20, border: '1px solid', color: item.month === props.month ? '#000' : '#999' }}>
                    {item.day}
                </div>
            )}
        </div>
    </div>
);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year: 2017,
            month: 1
        };
        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);
    }

    prev() {
        this.setState(state => ({
            year: state.month === 0 ? state.year - 1 : state.year,
            month: state.month === 0 ? 11 : state.month - 1
        }));
    }

    next() {
        this.setState(state => ({
            year: state.month === 11 ? state.year + 1 : state.year,
            month: state.month === 11 ? 0 : state.month + 1
        }));
    }

    render(props, state) {
        return (
            <div>
                <div style={{ display: 'flex' }}>
                    <div onClick={this.prev}>Prev</div>
                    <div onClick={this.next}>Next</div>
                </div>
                <Calendar year={state.year} month={state.month} />
            </div>
        );
    }
}

render(<App />, document.body.appendChild(document.createElement('div')));
