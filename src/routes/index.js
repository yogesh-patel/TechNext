import React from 'react';
import {Router,Route, IndexRoute, Redirect} from 'react-router';
import Application from '../component/Application';
import ProfileForm from '../component/ProfileForm';
import DefaultCenterComp from '../component/DefaultCenterComp';

export default(
    <Route path='/' component={Application}>
        <IndexRoute component={DefaultCenterComp}/>
        <Route path="edit/:employeeId"
               component={ProfileForm}/>
        <Route path="addEmployee"
               component={ProfileForm}/>
    </Route>
);


