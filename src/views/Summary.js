import React, { Component } from 'react';
import SummaryStore from '../stores/SummaryStore';

class Summary extends Component {
    state = {
        sum: SummaryStore.getSummary()
    }
    componentDidMount(){
        SummaryStore.addChangeListener(this.onUpdate);
    }
    componentWillUnmount() {
        SummaryStore.removeChangeListener(this.onUpdate);
    }

    onUpdate = ()=>{
        this.setState({
            sum: SummaryStore.getSummary()
        })
    }
    
    render(){
        return (
            <div>Total Count: {this.state.sum}</div>
        )
    }
}

export default Summary;