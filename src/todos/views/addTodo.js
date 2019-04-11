import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

class AddTodo extends Component {
    state = {value: ''}
    onSubmit = e =>{
        e.preventDefault();
        if(!this.state.value.trim()) {
            return;
        }
        this.props.onAdd(this.state.value);
        this.setState({
            value: ''
        });
    }
    onInputChange = e=>{
        this.setState({
            value: e.target.value
        });
    }
    render(){
        return (
            <div className="add-todo">
                <form onSubmit={this.onSubmit}>
                    <input className="new-todo" onChange={this.onInputChange} value={this.state.value} />
                    <button className="add-btn" type="submit">添加</button>
                </form>
            </div>
        )
    }
}

AddTodo.propTypes = {
    onAdd: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) =>{
    return {
        onAdd: (text)=>{
            dispatch(addTodo(text));
        }
    }
};

export default connect(null, mapDispatchToProps)(AddTodo);
