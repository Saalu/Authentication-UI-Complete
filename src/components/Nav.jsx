import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Nav = ({user, setUser}) => {
  const navigate = useNavigate()
  const isSignedIn = !!localStorage.getItem('token')


const onLogout = () =>{
  localStorage.removeItem('token')

  // setUser(false)
  navigate('/login')

}

  return (
    <nav className=' flex justify-around p-3 shadow-sm border-b items-center'>
      <Link to='/'><h1 className='text-xl'>AuthDB</h1></Link>
      <ul className='flex gap-6'>
      {isSignedIn ? (
        <>
        <Link to='/account'><li className='bg-green-400 rounded-md text-sm py-[5px] px-4  hover:shadow-sm'>Account</li></Link>
        <Link to='/post'><li className='bg-gray-100 rounded-md text-sm py-[5px] px-4  hover:shadow-sm'>Posts</li></Link>
        <button onClick={onLogout} className='bg-gray-100 rounded-md text-sm py-[5px] px-4  hover:shadow-sm'>Logout</button>
        </>
      ):(
       <>
        <Link to='/login'><li className='bg-green-400  rounded-md text-sm py-[5px] px-4  hover:shadow-sm'>Login</li></Link>
        <Link to='/register'><li className='bg-gray-100 rounded-md text-sm py-[5px] px-4  hover:shadow-sm'>SignUp</li></Link>      
       </>
      )

      }
  
      </ul>
     </nav>
  )
}

export default Nav
