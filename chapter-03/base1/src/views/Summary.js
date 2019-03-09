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
        console.log('state:',state);
        let sum = 0;
        for (const key1 in state){
            console.log('key1=',key1)
            if (state.hasOwnProperty(key1)){
                sum += state[key1];
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
}
export default Summary