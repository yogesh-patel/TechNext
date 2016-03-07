/**
 * Created by synerzip on 07/03/16.
 */

import {EMPLOYEE_SELECTED_SUCCESSFULLY} from '../constants';
import { pushState } from 'redux-router';

export function selectEmployee(emp){
    return (dispatch)=>{
        dispatch({
            type:EMPLOYEE_SELECTED_SUCCESSFULLY,
            payload:emp
        });
        dispatch(pushState(null,"edit/"+emp.id));
    }

}