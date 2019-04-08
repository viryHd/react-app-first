import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {reducer as todoReducer} from './todos';
import {reducer as filterReducer} from './filter';

