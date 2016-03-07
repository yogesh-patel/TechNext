/**
 * Created by synerzip on 10/02/16.
 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as empActionCreators from '../actions/employee';

class ProfileForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = this.getInitialStateForEmployee();

    }

    getInitialStateForEmployee() {
        //console.log(this.props.routeParams);
        var {routeParams} = this.props;
        if(routeParams.employeeId){
            return {
                employeeId: selectedEmployee.id,
                employeeName: selectedEmployee.name,
                project: selectedEmployee.project
            }
        }else{
            return {
                employeeId: null,
                employeeName: null,
                project: null
            }
        }

    }

    componentWillReceiveProps(nextProps, nextState) {
        if (nextProps.selectedEmployee != this.props.selectedEmployee) {
            this.setState({
                employeeId: nextProps.selectedEmployee.employeeId,
                employeeName: nextProps.selectedEmployee.name,
                project: nextProps.selectedEmployee.project
            });
        }
    }

    onEmployeeNameChange(e) {
        this.setState({employeeName: e.target.value});
    }

    onProjectChange(e) {
        this.setState({project: e.target.value});
    }

    onSubmit() {
        var {routeParams} = this.props;
        if(routeParams.employeeId){

        }else{
            this.props.empActions.addEmployee({
                name: this.state.employeeName,
                project: this.state.project
            },this.props.emps);
        }
    }

    render() {
        var {employeeName,project} = this.state;
        return (
            <div className="profile-box">
                <div className="field-label">
                    Employee Name:
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Employee Name" className="form-input"
                           value={employeeName} onChange={this.onEmployeeNameChange.bind(this)}/>
                </div>

                <div className="field-label" style={{marginTop:20}}>
                    Project:
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Employee Name" className="form-input"
                           value={project} onChange={this.onProjectChange.bind(this)}/>
                </div>

                <div style={{marginTop:30}}>
                    <button className="cancel-button">Cancel</button>
                    <button className="submit-button" onClick={this.onSubmit.bind(this)}>Submit</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    emps:state.employee.employees,
    selectedEmployee:state.app.selectedEmployee
});

const mapDispatchToProps = (dispatch) => ({
    empActions: bindActionCreators(empActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
