/**
 * Created by synerzip on 13/02/16.
 */
import React from 'react';
import ProfileForm from './ProfileForm';
class EmployeeEdit extends React.Component {

    render() {
        var {selectedEmployee} = this.props;
        if (selectedEmployee) {
            return (
                <ProfileForm selectedEmployee={selectedEmployee}
                             onEmployeeAdded={this.props.onEmployeeAdded}/>
            );
        }
        return (

            <div style={{color:'#CCCCCC',fontSize:30,padding:80,width:400,float:'left'}}>
                Select Employee to Edit or Click on Add to Create Employee.
            </div>
        );
    }
}

export default EmployeeEdit;