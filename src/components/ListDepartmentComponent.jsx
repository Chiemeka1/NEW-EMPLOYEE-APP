import React, {Component} from 'react'
import ApiService from '../api/ApiService'

export default class ListDepartmentComponent extends Component{

    constructor(props){
        super(props)
        this.deleteClicked=this.deleteClicked.bind(this)
        this.state = {  
           departments: 
           [
                
           ]     
         }  

    }
    componentDidMount(){
        ApiService.executeDepartmentService().then(
            Response =>{
                this.setState({departments :Response.data})
            }
        )
    }
    deleteClicked(id){
        ApiService.executeDeleteDepartmentService(id)
            
    }
    render(){
        return(
            <div>
               <h1>list Departments</h1>
               <table>
                   <thead>
                       <tr>
                           <th>id</th>
                           <th>name</th>
                           <th>address</th>
                           <th>delete</th>
                           
                           
                           
                       </tr>
                   </thead>
                   <tbody>
                       {
                           this.state.departments.map(
                           department =>
                         <tr>
                            <td>{department.id}</td>
                            <td>{department.name}</td>
                            <td>{department.address}</td>
                            <button className ="btn btn-warning" onClick={ () => this.deleteClicked(department.id)}>delete</button>
                            
                            
                            
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