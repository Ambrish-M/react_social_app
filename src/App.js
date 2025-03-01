import Header from "./Header";
import Nav from "./Nav";
import About from "./About";
import Footer from "./Footer";
import Home from "./Home";
import Missing from "./Missing";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import {  Route, Routes} from "react-router-dom";
import EditPost from "./EditPost";
import { DataProvider } from "./conetext/DataContext";

// import { Link, Route, Routes } from "react-router-dom";
// import Post from "./Post";
// import PostLayout from "./PostLayout";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Header title="Itahoo Social Media" />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="post">
            <Route index element={<NewPost />} />

            <Route path=":id" element={<PostPage />} />
          </Route>
          <Route path="/edit/:id" element={<EditPost />}></Route>
          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;

/* <nav>
       
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/newpost" element={<NewPost/>}/>
        <Route path="/postpage" element={<PostLayout/>}>
        <Route index element={<PostPage/>}/>
        <Route path=":id" element={<Post/>}/>
        <Route path="newpost" element={<NewPost/>}/>
        </Route>
        <Route path="*" element={<Missing/>}/>
      </Routes > */
// useEffect(() => {
//   const fetchPosts = async () => {
//     try {
//       const response = await api.get("/posts");
//       setPosts(response.data);
//     } catch (err) {
//       if (err.response) {
//         console.log(err.response.data);
//         console.log(err.response.status);
//         console.log(err.response.headers);
//       } else {
//         console.log(`Error: ${err.message}`);
//       }
//     }
//   };
//   fetchPosts();
// }, []);
