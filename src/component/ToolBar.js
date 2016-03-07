/**
 * Created by synerzip on 12/02/16.
 */
import React from 'react';
import { pushState } from 'redux-router';
import { connect } from 'react-redux';

class ToolBar extends React.Component{

    onAddEmployee(){
        //TODO - push new route state for add employee
        this.props.routeDispatch(pushState(null,"addEmployee"));

    }

    render(){
        return (
          <div className="tool-bar">
              <input type='text' className="searchBox"
                     placeholder="Search..."
                     onChange={(e)=>this.props.onSearch(e.target.value)}/>
              <button className="add-button"
                      onClick={this.onAddEmployee.bind(this)}>
                  Add
              </button>
          </div>
        );
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    routeDispatch:dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(ToolBar);
