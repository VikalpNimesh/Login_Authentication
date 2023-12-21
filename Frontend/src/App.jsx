import Login from './components/Login'
import Profile from './components/Profile'
import Register from './components/Register'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login/>}/>
        <Route path="/register" element={  <Register/>}/>
        <Route path="/profile" element={  <Profile/>}/>

      </Routes>
    </BrowserRouter>
     
     
    </div>
  )
}

export default App