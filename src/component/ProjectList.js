/**
 * Created by synerzip on 13/02/16.
 */
import React from 'react';
import ProjectItem from './ProjectItem';

import _ from 'lodash';

class ProjectList extends React.Component{

    render(){
        var {employees} = this.props;

        var projectList =  _.uniq(employees,'project');

        var projectComps = _.map(projectList,(emp)=>{
            return <ProjectItem projectName={emp.project} key={emp.project} {...this.props}/>;
        });


        return (
            <div style={this.props.style}>
                <div className="project-header">
                    Projects ({projectComps.length})
                </div>
                {projectComps}
            </div>
        );
    }
}

export default ProjectList;
