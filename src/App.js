import "./App.css";
import Header from "./Header";
import Login from "./Login";
import Signup from "./Signup";
import { useState , useEffect} from "react";
import Home from "./Home";


function App() {
  const [ins, setIns] = useState(null);
  const [error, setError] = useState("");
  

  useEffect(() => {
    console.log(ins)
    if (localStorage.token) {
      fetch('http://localhost:3000/api/v1/instructor', {
        headers: {
          "Authorization": `Bearer ${localStorage.token}` 
        }
      })
      .then(res => res.json())
      .then(instructor => setIns(instructor))
    }
  },[])
  const newInstructor = (ins) => {
    fetch("http://localhost:3000/api/v1/instructors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        instructor: {
          name: ins.name,
          username: ins.username,
          password: ins.password,
        },
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      
      if (data.error) {
        setError(data.error)
        
      }else{
        localStorage.token = data.jwt
        setIns(data.instructor)
      }

    });
  };

  const handleLogin = (instructor) => {
    fetch("http://localhost:3000/api/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                instructor: {
                    name: instructor.name,
                    password: instructor.password
                }
                
            })
        })
        .then(res => res.json())
        .then(data => {
           console.log(data)
           if (data.error) {
            setError(data.error)
            
          }else{
            localStorage.token = data.jwt
            setIns(data.instructor)
          }
            //localStorage.setItem('UserInfo',JSON.stringify(userInfo))
            //this.props.history.push('/home');
            //localStorage.token=userInfo.token
           //setIns =
        })
  }
  const handleLogout = () => {
    localStorage.clear()
    setIns(null)
  }
  
  //const user = JSON.parse(localStorage.getItem("UserInfo"));
  return (
    
    <div className="app">
      
      {ins? (
      <Home handleLogout={handleLogout}/>
      ) : (
        <>

          <Signup newInstructor={newInstructor} />
          <Login handleLogin={handleLogin}/>
        </>
      )}
    </div>
  );
}

export default App;
