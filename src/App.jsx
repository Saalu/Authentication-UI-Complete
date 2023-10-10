
import  { useState } from 'react'
import {Routes,Route, Link,} from "react-router-dom";
import SignUp from './pages/SignUp'
import Nav from './components/Nav';
import Login from './pages/Login';
import Account from './pages/Account';


const App = () => {
  const [user, setUser] = useState(false)
  const isSignedIn = !!localStorage.getItem('token')
  return (
   <div className=''>
    {/* <h2>Home Page</h2> */}
    <Nav  user={user} setUser={setUser}/>
    <Routes>
      {/* <Route path='/' element={<Home />} /> */}
      <Route path='/login' element={<Login setUser={setUser}/>} />
      <Route path='/register' element={<SignUp />} />

        {isSignedIn && <Route path='/account' element={<Account/>} />}
    </Routes>
    
    
   </div>
  )
}

export default App




