/**
 * Created by synerzip on 13/02/16.
 */
import React from 'react';

class ProjectItem extends React.Component{

    onMouseOver(){
        this.props.onProjectHover(this.props.projectName);
    }

    onMouseOut(){
        this.props.onProjectHover(null);
    }

    render(){
        var {projectName} = this.props;

        return (
            <div className="emp-item"
                 onMouseOver={this.onMouseOver.bind(this)}
                 onMouseOut={this.onMouseOut.bind(this)}>
                {projectName}
            </div>
        );
    }
}

export default ProjectItem;