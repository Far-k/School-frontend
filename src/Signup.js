import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

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

     const Switch =() => {
         let path = '/home'
         history.push(path)
     }
     Switch()
    }
    
    return (
        <div>
            <h2>Signup</h2>
                    <form onSubmit={(e) => signUp(e)}>
                    <label>Name</label>
                    <input  classnName = "input" name="name"  type="text" onChange={handleChange} />
                    <label>Username</label>
                    <input name="username" value = {profile.username} type="text" onChange={handleChange} />
                    <label>Password</label>
                    <input name="password" value = {profile.password} type="password"  onChange={handleChange}/>
                    <input type="submit" />
                    </form>
            </div>
        
    )
}

export default Signup





    
    
