import axios from 'axios'

class ApiService{
   
    executeEmployeeService(){
        return axios.get('http://localhost:8181/employee')
         //return axios.get("http://localhost:8080/communication")
         //console.log("Hello from Mars")
     }
     executeUserService(){
        return axios.get('http://localhost:9191/user')
         //return axios.get("http://localhost:8080/communication")
         //console.log("Hello from Mars")
     }
     executeDepartmentService(){
        return axios.get('http://localhost:8888/departments')
         //return axios.get("http://localhost:8080/communication")
         //console.log("Hello from Mars")
     }
     executeDeleteUserService(id){
        return axios.delete(`http://localhost:9191/deleteById/${id}`)
         //return axios.get("http://localhost:8080/communication")
         //console.log("Hello from Mars")
     }
     executeDeleteDepartmentService(id){
        return axios.delete(`http://localhost:8888/department/${id}`)
      
         //return axios.get("http://localhost:8080/communication")
         //console.log("Hello from Mars")
     }
}

export default new ApiService()