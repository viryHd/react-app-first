import React, {Component} from 'react';
class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            caption: props.caption,
            count: props.initValue
        };

    }
    onclickIncrementButton = ()=>{
        this.updateCount(true);
    }
    onclickDecrementButton = ()=>{
        this.updateCount(false);
    }
    // 加减数字
    updateCount(isIncrement){
        const previousValue = this.state.count;
        const newValue = isIncrement ? previousValue+1 : previousValue-1;
        this.setState({count: newValue});
        // 调用父组件传来的方法
        this.props.onUpdate(newValue, previousValue);
    }
    render(){
        return (
            <div>
                <button onClick={this.onclickIncrementButton}>+</button>
                <button onClick={this.onclickDecrementButton}>-</button>
                <span>{this.state.caption} count: {this.state.count}</span>
            </div>
        )
    }
}

Counter.defaultProps = {
    caption: 'first',
    initValue: 0,
    onUpdate: f=> f
}

export default Counter;