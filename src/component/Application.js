/**
 * Created by synerzip on 10/02/16.
 */
import React from 'react';
import Header from './Header.js';
import LeftNavigation from './LeftNavigation';
import EmployeeEdit from './EmployeeEdit';
import ProjectList from './ProjectList';

class Application extends React.Component {

    constructor(props){
        super(props);
        this.state={
            employees: [
                {name:'Yogesh Patel',id:1,project:'B'},
                {name:'Prashil Gote',id:2,project:'A'},
                {name:'Abhu Patel',id:3,project:'B'},
                {name:'John',id:4,project:'B'}
            ]
        }
    }

    onProjectHover(project){
        this.setState({highlightedProject:project});
    }

    onEmployeeAdded(employee){
        this.state.employees.push(employee);

        this.setState(
            {
                employees:this.state.employees,
                selectedEmployee:null
            }
        );
    }

    onAddEmployee(){
        this.setState({selectedEmployee:{id:-1}});
    }

    onSearch(searchText){
        this.setState({searchText:searchText});
    }

    onEmployeeSelected(employee){
        this.setState({selectedEmployee:employee});
    }

    render() {
        var {employees,searchText,highlightedProject} = this.state;
        var emps = employees;
        if(searchText && searchText.length > 0){
            emps =  _.filter(employees,(employee)=>{
                return employee.name.toLowerCase().indexOf(searchText) != -1;
            });
        }
        return (
            <div>
                <Header employees={employees}/>
                <div style={{clear:'both'}}>

                    <LeftNavigation style={{width:300,float:'left'}}
                                    employees={emps}
                                    highlightedProject={highlightedProject}
                                    onSearch={this.onSearch.bind(this)}
                                    onAddEmployee={this.onAddEmployee.bind(this)}
                                    onEmployeeSelected={this.onEmployeeSelected.bind(this)}
                                    selectedEmployee={this.state.selectedEmployee}/>

                    <EmployeeEdit selectedEmployee={this.state.selectedEmployee}
                                 onEmployeeAdded={this.onEmployeeAdded.bind(this)}/>

                    <ProjectList style={{float:'right',width: 300}}
                                 employees={employees}
                                 onProjectHover={this.onProjectHover.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default Application;