
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks,setBookmarks] = useState([])

  const handleBookMark = blog => {
    console.log('bookmark added')
  }

  return (
    <>     
      <Header></Header>
      <div className='md:flex'>
        <Blogs handleBookMark={handleBookMark}></Blogs>
        <Bookmarks></Bookmarks>
      </div>
      
    </>
  )
}

export default App
