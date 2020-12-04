import "./App.css";
import Header from "./Header";
//import SideBar from "./SideBar";
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
import { Link } from "@material-ui/core";
import NewSearch from "./NewSearch";

function Home(props) {
  const [contents, setContents] = useState([]);
  const [current, setCurrent] = useState("");
  const [search, setsearched] = useState("");
  const [subject, setsubject] = useState([]);
  const [courses, setcourses] = useState([]);
  //   const [savedCon, setsavedCon] = useState([])
  //   const [myContent, setmyContent] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/contents")
      .then((res) => res.json())
      .then((contents) => {
        console.log(contents);
        setContents(contents);
      });
    //   fetch("http://localhost:3000/api/v1/mystuff")
    //   .then((res) => res.json())
    //   .then((content) => {

    //     setsavedCon(content);
    //   });
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
        setsubject(sub);
      });
    fetch("http://localhost:3000/api/v1/courses")
      .then((res) => res.json())
      .then((courses) => {
        console.log(courses);
        setcourses(courses);
      });
  }, []);
  // ****
  // console.log(subject.sub)
  //   console.log(subject.sub.map(course => {
  //     return course.courses
  //   }))

  const createContent = (content) => {
    console.log(content);

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
        title: content.title,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setContents([...contents, data]);
      });
  };

  const filterSubject = (current) => {
    setCurrent(current);
  };

  const currentContent = courses.filter((content) => {
    return content.name.toLowerCase().includes(current.toLowerCase());
  });
  console.log(currentContent);

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
    }).then((res) => res.json());
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

  const filterSearched = subject.filter((sub) => {
    return sub.name.toLowerCase().includes(search.toLowerCase());
  });

  //[{}]

  console.log(filterSearched);

  let currentSearch;
  const searched = (searchedItem) => {
    setsearched(searchedItem);
  };

  const handleDelete = (id) => {
    console.log("run delete", id);

    fetch(`http://localhost:3000/api/v1/contents/${id}`, {
      method: "DELETE",
    }).then(() => {
      const newMat = contents.filter((content) => content.id != id);
      console.log(newMat)
      setContents(newMat);
    });
  };

  //   const createMystuff = (myStuff) => {
  //    console.log(myStuff)
  //     fetch("http://localhost:3000/api/v1/mystuff", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //       body: JSON.stringify({

  //       }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setmyContent([...myContent, data]);
  //       });
  //   };

  return (
    <Router>
      <Header handleLogout={props.handleLogout} />
      <div className="app_page">
        <Switch>
          <Route path="/video/:id">
            <ShowContent />
          </Route>
          <Route path="/home">
              <NewSearch searched={searched}/>
            <ContentForm createContent={createContent} />
            <SideItems
              // saved={myContent}
              subject={filterSearched}
              courses={courses}
              filterSubject={filterSubject}
            />

            {current == "" ? null : (
              <RecommendedVideos
                // SavedContents={createMystuff}
                currentContent={currentContent}
                contents={contents}
                deletedCont={handleDelete}
                handlelikes={handlelikes}
              />
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Home;
