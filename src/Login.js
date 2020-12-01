import React, {Component} from 'react'
class Login extends Component{
    state = {
        name: "",
        password: ""
    }
    handleChange = (e) => {
        console.log(e.target.value)
     this.setState({
         [e.target.name]: e.target.value
     })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/api/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                instructor: {
                    name: this.state.name,
                    password: this.state.password
                }
                
            })
        })
        .then(res => res.json())
        .then(userInfo => {
           
            localStorage.setItem('UserInfo',JSON.stringify(userInfo))
            localStorage.token=userInfo.jwt
           
        })
    }
    render(){
        return(
            <div>
                <h2>Log In</h2>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <label>Username</label>
                    <input onChange={(e) => this.handleChange(e)} name="name" type="text" />
                    <label>Password</label>
                    <input onChange={(e) => this.handleChange(e)} name="password" type="password" />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}
export default Login








