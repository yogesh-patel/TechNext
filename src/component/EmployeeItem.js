/**
 * Created by synerzip on 12/02/16.
 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActionCreators from '../actions/app';

class EmployeeItem extends React.Component{


    onEmpSelected(){
        var {appActions,employee} = this.props;
        appActions.selectEmployee(employee);
    }

    render(){

        var {employee,selectedEmployee,highlightedProject} = this.props;

        var styleClass = "emp-item";
        if(selectedEmployee && employee.id == selectedEmployee.id){
            styleClass = "emp-item selected";
        }

        if(employee.project == highlightedProject){
            styleClass += " highlight-item";
        }

        return (
            <div className={styleClass}
                 onClick={this.onEmpSelected.bind(this)}>
                {employee.name}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    selectedEmployee:state.app.selectedEmployee
});

const mapDispatchToProps = (dispatch) => ({
    appActions: bindActionCreators(appActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeItem);
