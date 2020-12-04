import React, {Component} from 'react'
import './login.css'
import { Button } from '@material-ui/core'
class Login extends Component{
    state = {
        name: "",
        password: ""
    }
    handleChange = (e) => {
        e.preventDefault()
        console.log(e.target.value)
     this.setState({
         [e.target.name]: e.target.value
     })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleLogin(this.state)
    }
    render(){
        return(
            <div>
            <h2 className="h2">Log In</h2>
            <div className="log_in">
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    
                    <label>Username</label>
                    
                    <input onChange={(e) => this.handleChange(e)} name="name" type="text" />
                    <br/>
                    <label>Password</label>
                   
                    <input onChange={(e) => this.handleChange(e)} name="password" type="password" />
                    <br/>
                  
                    <input  onClick="Submit" type="submit"/>
                    <br/>
                   
                </form>
                <br/>
            </div>
            </div>
        )
    }
}
export default Login










