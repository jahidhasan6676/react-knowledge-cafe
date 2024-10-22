import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs';
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks';
import { useState } from 'react';

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleToBookmark = (blog) =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }

  const handleMarkAsRead = (time) =>{
    setReadingTime(readingTime + time)
  }

  return (
    <>
   <div className='w-11/12 lg:w-9/12 mx-auto'>
   <Header></Header>
   </div>
    <div className='md:flex gap-3 w-11/12 lg:w-9/12 mx-auto mt-10 mb-8'>
    <Blogs handleToBookmark={handleToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
    <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
    </div>
    </>
  )
}

export default App
