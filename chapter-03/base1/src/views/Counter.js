import React from 'react'

class Counter extends React.Component{
    render(){
        const {caption, onIncrement, onDecrement, value} = this.props
        return (
            <div>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
                <span>{caption} count: {value} </span>
            </div>
        )
    }
}
    
    
export default Counter;
    