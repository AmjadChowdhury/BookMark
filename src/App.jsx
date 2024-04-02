
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

  const handleReadingTime = time => {
    const newTime = reading + time
    setReading(newTime)
  }

  return (
    <>     
      <Header></Header>
      <div className='md:flex'>
        <Blogs handleBookMark={handleBookMark} handleReadingTime={handleReadingTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} reading={reading}></Bookmarks>
      </div>
      
    </>
  )
}

export default App
