import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import './signup.css'

function Signup({newInstructor}) {
    const history = useHistory()

const [profile, setprofile] = useState({
  
        name: "",
        username: "",
        password: ""
    
})

   const  handleChange = (e) => {
        e.preventDefault()
        setprofile({
            ...profile, [e.target.name]: e.target.value
        })
    }
    console.log(profile)

    const signUp = (e) => {
    e.preventDefault()
     newInstructor(profile)
    }
     
    
    return (
        <div> 
            <h2 className="h2">Signup</h2>
            
        <div className="sign_up">
                    <form onSubmit={(e) => signUp(e)}>
                    <label>Name</label>
                    <input  classnName = "input" name="name"  type="text" onChange={handleChange} />
                    <br/>
                    <label>Username</label>
                    <input name="username" value = {profile.username} type="text" onChange={handleChange} />
                    <br/>
                    <label>Password</label>
                    <input name="password" value = {profile.password} type="password"  onChange={handleChange}/>
                    <br/>
                    <input type="submit" />
                    <br/>
                    </form>
                    <br/>
            </div>
             </div>
        
    )
}


export default Signup





    
    
