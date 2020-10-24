
import React, { Component} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListEmployeeComponent from './ListEmployeeComponent';
import ListUserComponent from './ListUserComponent';
import ListDepartmentComponent from './ListDepartmentComponent';

 


class MainComponent extends Component{
    render(){
        return(
            <div className ="MainComponent">
                <Router>
                    <>
                    <Switch>
                    <Route path="/employee" component={ListEmployeeComponent}/>
                    <Route path="/user" component={ListUserComponent}/>
                    <Route path="/department" component={ListDepartmentComponent}/>
                    

                    </Switch>
                    </>
                </Router>
                
            </div>
        )
    }
}
export default MainComponent;