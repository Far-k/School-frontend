import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import SearchPage from "./SearchPage";
import RecommendedVideos from "./RecommendedVideos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import { useEffect, useState } from "react";
import ContentForm from "./ContentForm";


function App() {
  const [contents, setcontents] = useState([]);
  const [ins, setIns] = useState([]);
  const [token, settoken] = useState("");
  const [subject, setsubject] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/contents")
      .then((res) => res.json())
      .then((contents) => {
        setcontents(
          contents,
        );
      });
      // fetch("http://localhost:3000/api/v1/instructors")
      // .then((res) => res.json())
      // .then((ins) => {
      //   console.log(ins);
      //   setIns({
      //     ins,
      //   });
      // });
      // fetch("http://localhost:3000/api/v1/subjects")
      // .then((res) => res.json())
      // .then((sub) => {
      //   console.log(sub);
      //   setsubject({
      //     sub,
      //   });
      // });
  }, []);
// console.log(subject.sub)
//   console.log(subject.sub.map(course => {
//     return course.courses
//   }))
  console.log(contents)
  //console.log(ins);

  const newInstructor = (ins) => {
    console.log(ins);
    fetch("http://localhost:3000/api/v1/instructors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
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
        localStorage.setItem("userInfo", JSON.stringify(data));
        localStorage.token = data.token;
        setIns({
          ...ins,
          data,
        });
        settoken(token);
      });
  };
  const createContent = (content) => {
    console.log("we here")
    console.log(content);
    fetch("http://localhost:3000/api/v1/contents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        course_id: content.course_id,
        instructor_id: content.instructor_id,
        content_type: content.content_type,
        material: content.material,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setcontents(
          ...contents, data
        );
      });
  };
  

  const handlelikes = (content)=> {
    console.log(content)
   ++content.likes
   
    fetch(`http://localhost:3000/api/v1/contents/${content.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        content
      })
    }).then(res => res.json()).then(data => {
      setcontents(data)
    })
    // .then(res => res.json())
    //   .then(patchedContent => {
    //   let contents = contents.map(content => {
    //     return content.id === patchedContent.id ? patchedContent : content;
    //   });
    //   setcontents(contents)
    // });

}  

const handleDelete = (id) => {
    console.log(id)
    fetch(`http://localhost:3000/api/v1/contents/${id}`, {
      method: "DELETE"
    }).then(()=> {
      console.log(contents)
      const newMat = contents.filter((content)=> content.id != id);
      console.log(newMat)
      setcontents(newMat)
    })
  }


  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <h1>Search Page</h1>
          </Route>
          <Route path="/home">
            <div className="app_page">
              <SideBar />
              <ContentForm createContent={createContent} />
              <RecommendedVideos contents={contents} deletedCont={handleDelete} newLikes={handlelikes}/>
            </div>
          </Route>
          <Route path="/">
            <Login />
            <Signup newInstructor={newInstructor} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


export default App;
