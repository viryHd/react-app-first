import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Actions from '../Actions';
import CounterStore from '../stores/CounterStore';

const buttonStyle = {
    margin: '10px'
};

class Counter extends Component {
    state = {
        count: CounterStore.getCounterValues()[this.props.caption]
    }
    // 是否更新相应的dom
    shouldComponentUpdate(nextProps, nextState) {
      return (nextProps.caption !== this.props.caption) ||
            (nextState.count !== this.state.count);
    }
    // 页面渲染，添加监听onchange事件
    componentDidMount() {
        CounterStore.addChangeListener(this.onChange);
    }
    // 页面销毁，移除对onchange事件的监听
    componentWillUnmount() {
        CounterStore.removeChangeListener(this.onChange);
    }

    onChange = () => {
        const newCount = CounterStore.getCounterValues()[this.props.caption];
        this.setState({count: newCount})
    }
    onClickIncrementButton= ()=> {
        Actions.increment(this.props.caption);
    }
    onClickDecrementButton= ()=> {
        Actions.decrement(this.props.caption);
    }
    
    render() {
        const {caption} = this.props;
        return (
            <div>
                <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
                <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
                <span>{caption} count: {this.state.count}</span>
            </div>
        );
    }
}

Counter.propTypes = {
    caption: PropTypes.string.isRequired
};

export default Counter;