/**
 * Created by synerzip on 07/03/16.
 */
import {createReducer} from '../utils';
import {EMPLOYEE_ADDED_SUCCESSFULLY} from '../constants';
import _ from 'lodash';

const initialState = {
    employees:[
        {
            id:1,
            name:'Yogesh',
            project:'Centric'
        }
    ]
};

export default createReducer(initialState, {
    [EMPLOYEE_ADDED_SUCCESSFULLY]:(state,payload)=>{
        var newState = _.cloneDeep(state);
        newState.employees.push(payload);

        return newState;
    }
});
