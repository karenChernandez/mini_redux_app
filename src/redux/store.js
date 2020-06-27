import {createStore, combineReducers, applyMiddleware} from 'redux';
import middleware from 'redux-promise-middleware'
import musicAisle from '../redux/musicAisle';


const reducer=combineReducers({
    musicAisle
})

export default createStore(reducer,applyMiddleware(middleware)); 