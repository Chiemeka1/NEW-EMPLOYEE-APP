import React, {Component} from 'react'
import ApiService from '../api/ApiService'

export default class ListEmployeeComponent extends Component{

    constructor(props){
        super(props)
        this.state = {  
           employees: 
           [
                
           ]     
         }  

    }
    componentDidMount(){
        ApiService.executeEmployeeService().then(
            Response =>{
                this.setState({employees :Response.data})
            }
        )
    }
    render(){
        return(
            <div>
               <h1>list Employees</h1>
               <table>
                   <thead>
                       <tr>
                           <th>id</th>
                           <th>name</th>
                           <th>address</th>
                           <th>salary</th>
                           
                           
                       </tr>
                   </thead>
                   <tbody>
                       {
                           this.state.employees.map(
                           employee =>
                         <tr>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.address}</td>
                            <td>{employee.salary}</td>
                            
                         </tr>  
                         )
                       }
                   </tbody>
               </table>
               <a href="/welcome">bact to welcome page</a>
            </div>
        )
    }
}