
import { useState } from 'react'
import './App.css'
import Blogs from './componenets/Blogs/Blogs'
import Bookmrks from './componenets/bookmarks/Bookmrks'
import Header from './componenets/header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handelAddToBookMark = blog => {
    const newBookMarks = [...bookmarks, blog];
    setBookmarks(newBookMarks);
  }
  
  const handelMarkAsRead = (id, time) => {
  const newReadingTime = readingTime + time;
  setReadingTime(newReadingTime);

  //remove the read bookmark
  const remainingBookmark = bookmarks.filter(bookmark => bookmark.id !== id);
  setBookmarks(remainingBookmark);

  //  const indexRemove = bookmarks.findIndex(bookmark => bookmark.id === id);
  // if(indexRemove !== -1){
  //   const remainingBookmark = [...bookmarks];
  //   remainingBookmark.splice(indexRemove, 1);
  //   setBookmarks(remainingBookmark);
  // }
  }


  return (
    <div className='max-w-6xl mx-auto'>
       <Header></Header>
       <div className='md:flex gap-9'>
          <Blogs 
            handelAddToBookMark={handelAddToBookMark}
            handelMarkAsRead={handelMarkAsRead}
            >

          </Blogs>
          <Bookmrks bookmarks={bookmarks} readingTime={readingTime}></Bookmrks>

       </div>
    </div>
  )
}

export default App
