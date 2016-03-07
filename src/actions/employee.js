/**
 * Created by synerzip on 07/03/16.
 */
import {EMPLOYEE_ADDED_SUCCESSFULLY} from '../constants';
import _ from 'lodash';
import { pushState } from 'redux-router';


export function addEmployee(employee,currentEmps){
    return (dispatch)=>{
        var empObj = employee;
        empObj.id = getNextEmpId(currentEmps);
        dispatch( {
            type:EMPLOYEE_ADDED_SUCCESSFULLY,
            payload:empObj
        });
        dispatch(pushState(null,"/"));
    }

}

function getNextEmpId(currentEmps){
    var index = 0;
    _.each(currentEmps,(emp)=>{
        if(index < emp.id){
            index = emp.id;
        }
    });

    return index+1;
}