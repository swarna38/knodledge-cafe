
import './App.css'
import Blogs from './componenets/Blogs/Blogs'
import Bookmrks from './componenets/bookmarks/Bookmrks'
import Header from './componenets/header/Header'

function App() {
  

  return (
    <>
       <Header></Header>
       <div className='md:flex'>
          <Blogs></Blogs>
          <Bookmrks></Bookmrks>

       </div>
    </>
  )
}

export default App
