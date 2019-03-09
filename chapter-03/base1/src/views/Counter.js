import React from 'react'
import store from '../Store';
import * as Actions from '../Actions.js';

class Counter extends React.Component{
    render(){
        const {caption, onIncrement, onDecremtn, value} = this.props
        return (
            <div>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecremtn}>-</button>
                <span>{caption} count: {value} </span>
            </div>
        )
    }
}
    
    
export default Counter;
    