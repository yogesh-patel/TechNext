/**
 * Created by synerzip on 12/02/16.
 */
import React from 'react';
import EmployeeItem from './EmployeeItem.js';
import ToolBar from './ToolBar.js';
import _ from 'lodash';

class LeftNavigation extends React.Component {

    render() {
        var {employees,selectedEmployee,highlightedProject} = this.props;

        var employeeRows = _.map(employees,(employee)=>{
            return <EmployeeItem employee={employee}
                                 selectedEmployee={selectedEmployee}
                                 onEmployeeSelected={this.props.onEmployeeSelected}
                                 highlightedProject={highlightedProject}
                                 key={employee.id}/>;
        });

        return (
            <div style={this.props.style}>
                <ToolBar onSearch={this.props.onSearch}
                         onAddEmployee={this.props.onAddEmployee}/>
                {employeeRows}
            </div>
        );
    }
}

export default LeftNavigation;