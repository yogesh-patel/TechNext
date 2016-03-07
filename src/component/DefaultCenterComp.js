/**
 * Created by synerzip on 07/03/16.
 */
import React from 'react';

class DefaultCenterComp extends React.Component{
    render(){
        console.log(this.props);
        return (
            <div style={{color:'#CCCCCC',fontSize:30,padding:80,width:400,float:'left'}}>
                Select Employee to Edit or Click on Add to Create Employee.
            </div>
        )
    }
}

export default DefaultCenterComp;