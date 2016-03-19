/**
 * Created by synerzip on 10/02/16.
 */
import React from 'react';

import EmployeeCountComp from './EmployeeCountComp';

class Header extends React.Component{

    render(){
        var {employees} = this.props;

        var employeeCount = employees ? employees.length : 0;
        return (
            <div className="header">
                <div style={{float:'left',padding:5}}><img src='./images/logo.png'/></div>
                <EmployeeCountComp style={{float:'right'}} employeeCount={employeeCount}/>
            </div>
        );
    }
}

export default Header;