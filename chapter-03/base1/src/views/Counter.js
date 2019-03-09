import React from 'react'
import store from '../Store';
import * as Actions from '../Actions.js';

class Counter extends React.Component{
    constructor(props){
        super(props);
        
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
        this.onChange = this.onChange.bind(this);
        this.getOwnState = this.getOwnState.bind(this);
    
        this.state = this.getOwnState();
    }
    
    getOwnState() {
        return {
            value: store.getState()[this.props.caption]
        };
    }

    onIncrement() {
        store.dispatch(Actions.increment(this.props.caption));
    }

    onDecrement() {
        store.dispatch(Actions.decrement(this.props.caption));
    }

    onChange() {
        this.setState(this.getOwnState());
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) ||
         (nextState.value !== this.state.value);
    }

    componentDidMount() {
        store.subscribe(this.onChange);
    }

    componentWillUnmount() {
        store.unsubscribe(this.onChange);
    }

    render() {
        const value = this.state.value;
        const {caption} = this.props;

        return (
            <div>
            <button  onClick={this.onIncrement}>+</button>
            <button  onClick={this.onDecrement}>-</button>
            <span>{caption} count: {value}</span>
            </div>
            );
    }
}
    
    
export default Counter;
    