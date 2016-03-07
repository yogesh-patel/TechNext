/**
 * Created by synerzip on 12/02/16.
 */
import React from 'react';
import { connect } from 'react-redux';

class EmployeeCountComp extends React.Component{

    render(){
        var {emps} = this.props;
        var empCount = emps ? emps.length : 0;
        return(
          <div className="countBox" style={this.props.style}>
              <div className="count">
                  Employee Count: {empCount}
              </div>
          </div>
        );
    }
}
const mapStateToProps = (state) => ({
    emps:state.employee.employees
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeCountComp);
