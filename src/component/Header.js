/**
 * Created by synerzip on 10/02/16.
 */
import React from 'react';

import EmployeeCountComp from './EmployeeCountComp';

class Header extends React.Component{

    render(){
        return (
            <div className="header">
                <div style={{float:'left',padding:5}}>
                    <img src='./images/logo.png'/>
                </div>
                <EmployeeCountComp style={{float:'right'}}/>
            </div>
        );
    }
}

export default Header;