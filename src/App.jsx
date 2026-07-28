
import { useState } from 'react'
import './App.css'
import Blogs from './componenets/Blogs/Blogs'
import Bookmrks from './componenets/bookmarks/Bookmrks'
import Header from './componenets/header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handelAddToBookMark = blog => {
    const newBookMarks = [...bookmarks, blog];
    setBookmarks(newBookMarks);
  }
  

  return (
    <div className='max-w-6xl mx-auto'>
       <Header></Header>
       <div className='md:flex gap-9'>
          <Blogs handelAddToBookMark={handelAddToBookMark}></Blogs>
          <Bookmrks bookmarks={bookmarks}></Bookmrks>

       </div>
    </div>
  )
}

export default App
