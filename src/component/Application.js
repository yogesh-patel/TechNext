/**
 * Created by synerzip on 10/02/16.
 */
import React from 'react';
import Header from './Header.js';
import LeftNavigation from './LeftNavigation';
import EmployeeEdit from './EmployeeEdit';
import ProjectList from './ProjectList';

class Application extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <div style={{clear:'both'}}>
                    <LeftNavigation style={{width:300,float:'left'}}/>
                    {this.props.children}
                    <ProjectList style={{float:'right',width: 300}}/>
                </div>
            </div>
        );
    }
}

export default Application;