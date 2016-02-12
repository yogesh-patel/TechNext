/**
 * Created by synerzip on 12/02/16.
 */
import React from 'react';

class ToolBar extends React.Component{

    render(){
        return (
          <div className="tool-bar">
              <input type='text' className="searchBox"
                     placeholder="Search..."
                     onChange={(e)=>this.props.onSearch(e.target.value)}/>
              <button className="add-button" onClick={()=>this.props.onAddEmployee()}>Add</button>
          </div>
        );
    }
}

export default ToolBar;