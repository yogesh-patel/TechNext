/**
 * Created by synerzip on 12/02/16.
 */
import React from 'react';

class EmployeeCountComp extends React.Component{

    render(){
        var {employeeCount} = this.props;
        return(
          <div className="countBox" style={this.props.style}>
              <div className="count">
                  Employee Count: {employeeCount ? employeeCount : 0}
              </div>
          </div>
        );
    }
}

export default EmployeeCountComp;