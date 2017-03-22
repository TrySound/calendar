import createElement from 'inferno-create-element';
import Component from 'inferno-component';

const withPropsOnChange = (propsKeys, mapProps) => BaseComponent => class extends Component {
    constructor(props) {
        super(props);
        this.computedProps = mapProps(props);
    }

    componentWillReceiveProps(nextProps) {
        if (propsKeys.some(propKey => this.props[propKey] !== nextProps[propKey])) {
            this.computedProps = mapProps(nextProps);
        }
    }

    render(props) {
        return <BaseComponent {...props} {...this.computedProps} />;
    }
};

export default withPropsOnChange;
