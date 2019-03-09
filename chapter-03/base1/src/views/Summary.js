import React from 'react';
import store from '../Store' 

class Summary extends React.Component{
    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this);

        this.state = this.getOwnState()
    }
    onChange(){
        this.setState(this.getOwnState());
    }
    getOwnState(){
        const state = store.getState();
        
        let sum = 0;
        for (const key in state){
            if (state.hasOwnProperty(key)){
                sum += state[key];
            }
        }
        return {sum : sum};
        
    }
    render(){
        const sum1 = this.state.sum;
        return (
            <div>
                <span>sum:{sum1}</span>
            </div>
        );
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.sum !== this.state.sum;
    }

    componentDidMount() {
        store.subscribe(this.onChange);
    }

    componentWillUnmount() {
        store.unsubscribe(this.onChange);
    }

    render() {
        const sum = this.state.sum;
        return (
        <div>Total Count: {sum}</div>
        );
    }
}