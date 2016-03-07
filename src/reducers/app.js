/**
 * Created by synerzip on 07/03/16.
 */
import {createReducer} from '../utils';
import {EMPLOYEE_SELECTED_SUCCESSFULLY} from '../constants';
import _ from 'lodash';

const initialState = {
    selectedEmployee:null
};

export default createReducer(initialState, {
    [EMPLOYEE_SELECTED_SUCCESSFULLY]:(state,payload)=>{
        var newState = _.cloneDeep(state);
        newState.selectedEmployee = payload;
        return newState;
    }
});