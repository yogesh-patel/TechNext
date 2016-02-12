/**
 * Created by synerzip on 12/02/16.
 */
import React from 'react';

class EmployeeItem extends React.Component{



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
            <div className={styleClass} onClick={()=>this.props.onEmployeeSelected(employee)}>
                {employee.name}
            </div>
        );
    }
}

export default EmployeeItem;