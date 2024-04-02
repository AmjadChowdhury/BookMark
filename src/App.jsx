
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks,setBookmarks] = useState([])
  const [reading,setReading] = useState(0)

  const handleBookMark = blog => {
    const newBookMarks = [...bookmarks,blog]
    setBookmarks(newBookMarks)
  }

  const handleReadingTime = (id,time) => {
    const newTime = reading + time
    setReading(newTime)
    const remainingBookMarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookMarks)
  }

  return (
    <>     
      <Header></Header>
      <div className='md:flex mt-2'>
        <Blogs handleBookMark={handleBookMark} handleReadingTime={handleReadingTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} reading={reading}></Bookmarks>
      </div>
      
    </>
  )
}

export default App
