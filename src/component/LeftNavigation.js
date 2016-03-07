/**
 * Created by synerzip on 12/02/16.
 */
import React from 'react';
import EmployeeItem from './EmployeeItem.js';
import ToolBar from './ToolBar.js';
import _ from 'lodash';
import { connect } from 'react-redux';

class LeftNavigation extends React.Component {

    render() {
        var {emps,selectedEmployee,highlightedProject}
            = this.props;

        var employeeRows = _.map(emps,(employee)=>{
            return <EmployeeItem employee={employee}
                                 key={employee.id}/>;
        });

        return (
            <div style={this.props.style}>
                <ToolBar />
                {employeeRows}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    emps:state.employee.employees
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(LeftNavigation);
