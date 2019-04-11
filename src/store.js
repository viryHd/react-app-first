import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {reducer as todoReducer} from './todos';
import {reducer as filterReducer} from './filter';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
const reducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer
});

const win = window;
const middlewares = [];
if(process.env.NOVE_ENV !== 'production') {
  middlewares.push(reduxImmutableStateInvariant());
}

const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f)=>f
);

export default createStore(reducer, {}, storeEnhancers);