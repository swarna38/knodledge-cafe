
import './App.css'
import Blogs from './componenets/Blogs/Blogs'
import Bookmrks from './componenets/bookmarks/Bookmrks'
import Header from './componenets/header/Header'

function App() {
  

  return (
    <div className='max-w-6xl mx-auto'>
       <Header></Header>
       <div className='md:flex gap-9'>
          <Blogs></Blogs>
          <Bookmrks></Bookmrks>

       </div>
    </div>
  )
}

export default App
