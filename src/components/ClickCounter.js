import React, {Component} from 'react';
class ClickCounter extends Component {
    constructor(props){
        super(props);
        this.onClickButton = this.onClickButton.bind(this);
        this.state = {count: props.initValue};
    }
    onClickButton(){
        console.log(this);
        this.setState({count: this.state.count+1});
    }
    render(){
        return (
            <div>
                <button onClick={this.onClickButton}>Click me</button>
                <div>
                    Click Count: {this.state.count}
                </div>
            </div>
        );
    }
}

ClickCounter.defaultProps = {
    initValue: 30
}

export default ClickCounter;