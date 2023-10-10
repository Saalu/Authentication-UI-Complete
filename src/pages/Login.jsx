import {useState,useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = ({setUser}) => {

//   const [user, setUser] = useState([])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  useEffect(() =>{
    fetchUsers()
  },[])

  const fetchUsers = async() =>{
    try {
      const res = await axios.get('http://localhost:8080/users')
      console.log(res.data)  
    } catch (err) {
      console.log(err.message)
    }  
  }

  const onLogin = async(e) => {
    try {
      e.preventDefault()
    const res =  await axios.post('http://localhost:8080/auth/login',{email,password})
      const {user} = res.data
      const token = user.authentication.sessionToken

      console.log({token})

      fetchUsers()
      navigate('/account')
    //   window.location.reload()
    //   localStorage.setItem('token',sessionToken)
      localStorage.setItem('token',token)
    //   setUser(true)
    } catch (err) {
      console.log(err.message)
      
    }
  }



  return (
    <main className='w-full h-screen flex'>
      {/* <div className=" h-[100%]   w-[100%] md:w-[50%]  bg-gray-100 flex  justify-center items-center"> */}
      <div className=" h-[100%]   w-[100%] md:w-[60%] lg:w-[60%]  flex  justify-center items-center">
      {/* form */}
        <form onSubmit={onLogin} className='w-[400px] h-[300px]  lg:w-[500px] bg-white rounded-lg shadow-md border-[.2px] border-gray-300 p-9 pt-4'>
           <h2 className=' text-center lg:text-xl text-lg pb-4  text-green-700'>Sign In</h2>
            
            <label htmlFor="" className=" text-gray-600 text-sm">Email</label>
            <br />
            <input type="email" placeholder='Email *' value={email} onChange={e => setEmail(e.target.value)} className='w-[320px]  lg:w-[400px] h-[40px] text-sm  mb-1   p-2 border-gray-200 border-[.05px] rounded-md shadow-sm focus:outline-none hover:border-gray-800 focus:border-green-600' />
            <br />
            <label htmlFor="" className=" text-gray-600 text-sm">Password</label>
            <br />
            <input type="password" placeholder='Password *' value={password} onChange={e => setPassword(e.target.value)} className='w-[320px] lg:w-[400px] h-[40px] text-sm  mb-1   p-2 border-gray-200 border-[.05px] rounded-md shadow-sm focus:outline-none hover:border-gray-800 focus:border-green-600' />
            <br />
            <br />
           
            <button className="w-[320px] h-[40px]  lg:w-[400px]  bg-green-600 
            text-white  px-4 text-sm shadow-sm rounded-full">Login</button>
        </form>
      </div>
      <div className=" hidden md:visible h-[100%] md:w-[40%] lg:w-[50%] md:flex  justify-center items-center bg-green-100/25">
        <h2 className='p-2 text-[30px] text-green-600'>Login </h2>
      </div>
    </main>
  )
}



export default Login
