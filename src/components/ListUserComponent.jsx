import React, {Component} from 'react'
import ApiService from '../api/ApiService'

export default class ListUserComponent extends Component{

    constructor(props){
        super(props)
        this.deleteClicked=this.deleteClicked.bind(this)
        this.state = {  
           users: 
           [
                
           ]     
         }  

    }
    componentDidMount(){
        ApiService.executeUserService().then(
            Response =>{
                this.setState({users :Response.data})
            }
        )
    }

    deleteClicked(id){
        ApiService.executeDeleteUserService(id)
                
            
        
    }
    render(){
    
        return(
            <div>
               <h1>list Users</h1>
               <table>
                   <thead>
                       <tr>
                           <th>id</th>
                           <th>name</th>
                           <th>address</th>
                           <th>update</th>
                           <th>delete</th>
                           
                           
                           
                           
                       </tr>
                   </thead>
                   <tbody>
                       {
                           this.state.users.map(
                           user =>
                         <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.address}</td>
                            <button className ="btn btn-warning">Update</button>
                            <button className ="btn btn-warning" onClick={ () => this.deleteClicked(user.id)}>delete</button>
                            
                            
                            
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