import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import SideItems from "./SideItems";
import SearchPage from "./SearchPage";
import RecommendedVideos from "./RecommendedVideos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import { useEffect, useState } from "react";
import ContentForm from "./ContentForm";
import SubjectContainer from "./SubjectContainer";
import ShowContent from "./ShowContent";

function App() {
  const [contents, setContents] = useState([]);
  const [current, setCurrent] = useState('')
  const [ins, setIns] = useState([]);
  const [token, settoken] = useState("");
  const [subject, setsubject] = useState([]);
  const [courses, setcourses] = useState([]);
  const [search, setsearched] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/contents")
      .then((res) => res.json())
      .then((contents) => {
        console.log(contents)
        setContents(contents);
      });
      // *****
    // fetch("http://localhost:3000/api/v1/instructors")
    // .then((res) => res.json())
    // .then((ins) => {
    //   console.log(ins);
    //   setIns({
    //     ins,
    //   });
    // });
    // *****
    fetch("http://localhost:3000/api/v1/subjects")
      .then((res) => res.json())
      .then((sub) => {
        console.log(sub);
        setsubject(
          sub,
        );
      });
    fetch("http://localhost:3000/api/v1/courses")
      .then((res) => res.json())
      .then((courses) => {
        console.log(courses);
        setcourses(
          courses,
        );
      });
  }, []);
  // ****
  // console.log(subject.sub)
  //   console.log(subject.sub.map(course => {
  //     return course.courses
  //   }))
  
  

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
    console.log(content)
    
    fetch("http://localhost:3000/api/v1/contents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        course_id: content.course_id,
        instructor_id: content.instructor_id,
        content_type: content.content_type,
        material: content.material, 
        likes: content.likes,
        level: content.level,
        title: content.title
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setContents([...contents, data]);
      });
  };

const filterSubject = current => {
  setCurrent(current)

}

const currentContent = courses.filter(content => {
  return (
  content.name.toLowerCase().includes(current.toLowerCase())
  )
})
console.log(currentContent)


  const handlelikes = (likedContent) => {
    
    ++likedContent.likes;

    fetch(`http://localhost:3000/api/v1/contents/${likedContent.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        content: likedContent,
      }),
    })
      .then((res) => res.json())
      // .then((data) => {
      //   const filteredcont = contents.filter((content) => content.id != likedContent.id)
      //   setContents([...filteredcont, data])
      // });
    // .then(res => res.json())
    //   .then(patchedContent => {
    //   let contents = contents.map(content => {
    //     return content.id === patchedContent.id ? patchedContent : content;
    //   });
    //   setcontents(contents)
    // });
  };
  
  let currentSearch 
   const searched = (searchedItem) => {
    setsearched(searchedItem)

    
    
  }
  const filterSearched = subject.filter(sub => {
   return(
   sub.name.toLowerCase().includes(search.toLowerCase())
   )
    })

  //[{}]

 console.log(filterSearched)

  const handleDelete = (id) => {
    console.log("run delete", id)
   
    fetch(`http://localhost:3000/api/v1/contents/${id}`, {
      method: "DELETE",
    }).then(() => {
      const newMat = contents.filter((content) => content.id != id);
      setContents(newMat);
    }) 
      
      
    ;
  };

  return (
    <div className="app">
      <Router>
        <Header searched={searched}/>
        <Switch>
          {/* <Route path="/search/:searchTerm">
            <h1>Search Page</h1>
          </Route> */}
          {/* <Route path="/subjects">
          </Route> */}
          <Route path="/home">
            <div className="app_page">
            <SideItems subject={filterSearched} courses={courses}  filterSubject={filterSubject}/>
              {/* <SideBar /> */}
              <ContentForm createContent={createContent} />
              <RecommendedVideos
              currentContent={currentContent}
                contents={contents}
                deletedCont={handleDelete}
                handlelikes={handlelikes}
              />
            </div>
          </Route>
          <Route path="/video/:id">
            <ShowContent/>
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
