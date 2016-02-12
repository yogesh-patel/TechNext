/**
 * Created by synerzip on 10/02/16.
 */
import React from 'react';

class ProfileForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            employeeId:props.selectedEmployee.id,
            employeeName:props.selectedEmployee.name,
            project:props.selectedEmployee.project
        };
    }

    componentWillReceiveProps(nextProps,nextState){
        if(nextProps.selectedEmployee != this.props.selectedEmployee){
            this.setState({
                employeeId:nextProps.selectedEmployee.employeeId,
                employeeName:nextProps.selectedEmployee.name,
                project:nextProps.selectedEmployee.project
            });
        }
    }

    onEmployeeNameChange(e){
        this.setState({employeeName:e.target.value});
    }

    onProjectChange(e){
        this.setState({project:e.target.value});
    }

    onSubmit(){
        if(this.props.selectedEmployee.id < 0){
            this.props.onEmployeeAdded({
                id:Math.floor((Math.random() * 100) + 1),
                name:this.state.employeeName,
                project:this.state.project
            });
        }
    }

    render(){
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

export default ProfileForm;