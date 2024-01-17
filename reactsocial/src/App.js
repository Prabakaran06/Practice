
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import About from './About';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Missing from './Missing';
import NewPost from './NewPost';
import PostPage from './PostPage';
import Post from './Post';
import PostLayout from './PostLayout';
import Nav from './Nav';
import { useEffect, useState } from 'react';
import {format, setISOWeekYear} from "date-fns"
 
function App() {
  const[posts,setPosts] =useState([
    {
      id:1,
      title:"my first post",
      datetime:"jan 01,2024 01:10:19 PM",
      body:"welcome to 2021"
    },
    {
      id:2,
      title:"my second post",
      datetime:"jan 02,2024 02:10:19 PM",
      body:"welcome to 2022"
    },
    {
      id:3,
      title:"my third post",
      datetime:"jan 03,2024 03:10:19 PM",
      body:"welcome to 2023"
    },
    {
      id:4,
      title:"my fourth post",
      datetime:"jan 04,2024 04:10:19 PM",
      body:"welcome to 2024"
    },
  ])
  const[search,setSearch]=useState('');
  const [searchResult,setSearchResults]=useState([])
  const[postTitle,setPostTitle]=useState('');
  const [postBody,setPostBody]=useState('');
useEffect(()=>{const filteredResults = posts.filter((post)=>
  ((post.body).toLocaleLowerCase()).includes(search.toLocaleLowerCase())
  ||((post.title).toLocaleLowerCase()).includes(search.toLocaleLowerCase()) );
setSearchResults(filteredResults.reverse())
},[posts,search])

  const handleSubmit= (e)=>{
    e.preventDefault();
    const id = posts.length? posts[posts.length -1].id + 1 : 1;
    const datetime= format (new Date(), 'MMMM dd, yyyy pp');
    const newPost = {id, title:postTitle,datetime, body : postBody};
    
    const allPosts = [...posts , newPost];
    setPosts(allPosts);
    setPostTitle('')
    setPostBody('')
    Navigate('/');
  }

  return (

  <div className='App'>
    <Header title="prabu social"/>
    <Nav search={search} setSearch={setSearch} />
    <Footer />
    <Routes>
     <Route index path='/' element={ <Home posts={searchResult} />} />
     <Route path='post' element={ <NewPost 
        handleSubmit={handleSubmit}
        postTitle={postTitle}
        setPostTitle={setPostTitle}
        postBody={postBody}
        setPostBody={setPostBody}
      /> } />
      <Route path='id'element={<PostPage posts={posts} handledelete={handledelete} />}
      // <Route path='about' element={
      // <About  />}/>
    //  <Route path='*' element={<Missing />} 
      />
    </Routes>
    <Footer />
  </div>
  );
}

export default App;





// <nav>
// <ul>
//   <li><Link to="/">Home</Link></li>
//   <li><Link to="/About">About</Link></li>

//   <li><Link to="/PostPage">PostPage</Link></li>
// </ul>
// </nav>
// <Routes>
// <Route path='/'  element={<Home/>} />
// <Route path='/About'  element={<About/>} />
// <Route path='/NewPost'  element={<NewPost />} />
// <Route path='/PostPage' element={<PostLayout />}  >
//   <Route index  element={<PostPage />} />
//   <Route path=':id'  element={<Post />} />
//   <Route path='NewPost'  element={<NewPost />} />
// </Route>
// <Route path='*'  element={<Missing />} />
// </Routes>