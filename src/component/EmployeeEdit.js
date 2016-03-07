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
    }
}

export default EmployeeEdit;