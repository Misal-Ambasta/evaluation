import React, { Component } from 'react'
import axios from 'axios'
export const AuthContext = React.createContext()

class AuthContextProvider extends Component {
    constructor(props){
        super(props)
        this.state= {
            isAuth: false,
            email: "",
            password: "", 
            token:"",
            data:[]
        }
    }

    handleChange= (e)=>{
        const {name,value} = e.target
        this.setState({
            [name]: value
        })
    }

    async componentDidMount(){
        await axios.get("https://jsonplaceholder.typicode.com/todos").then(res=>this.setState({
             data:res.data
         })).catch(function (error) {
           
            console.log(error);
          })
     }

    onSubmit= async (e)=>{
        e.preventDefault()
        const {email,password} = this.state
       await axios({
            method: 'post',
            url: 'https://reqres.in/api/register',
            data: {
              email:email,
              password: password
            }
          }).then(res=> this.setState({
              token : res.data.token,
              isAuth: true
          })).catch(function (error) {
                console.log(error);
            })
    }


   
    render() {
        console.log(this.state)
        const {isAuth,email,password,token,data} = this.state
        const {handleChange,onSubmit} = this
        return (
            <AuthContext.Provider value={{email,password,isAuth,token,data, handleChange,onSubmit}}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default AuthContextProvider