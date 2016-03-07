/**
 * Created by synerzip on 07/03/16.
 */
import {combineReducers} from 'redux';
import {routerStateReducer} from 'redux-router';
import employee from './employee';
import app from './app';

export default combineReducers({
    employee,
    app,
    router: routerStateReducer
});
