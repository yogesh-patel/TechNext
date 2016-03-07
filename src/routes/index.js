import React from 'react';
import {Router,Route, IndexRoute, Redirect} from 'react-router';
import Application from '../component/Application';
import EmployeeEdit from '../component/EmployeeEdit';


export default(
    <Route path='/' component={Application}>
        <IndexRoute component={EmployeeEdit}/>
    </Route>
);


