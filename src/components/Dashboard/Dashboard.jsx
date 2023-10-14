import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Form from './Form/Form'


const Dashboard = () => {
  return (
    


    <main className='w-full h-screen flex'>
      <div className=" h-[100%]   w-[100%]  flex  justify-center items-center">
      {/* form */}
        <div  className='w-[450px] h-[450px] lg:w-[940px]  md:w-[740px] bg-white rounded-lg shadow-md border-[.2px] border-gray-300 '>
      
          <Navbar/>

        <div className="container  flex justify-between items-start  ">
        <div className="box-1 p-[12px] h-[400px]  w-[40%] md:w-[50%]   " >
          <div className='text-lg text-slate-600  mb-4 font-bold'>Post your content</div>
        {/* ===========Form ======================= */}
          <div className="  ">
          {/*================= form============ */}
          <Form/>
          </div>
  
        {/* ===========Form End ======================= */}
        </div>

        {/* ==========Right Container=============== */}
        <div className="invisible  p-[12px] h-[400px] w-[60%] md:visible  md:w-[50%] border-l-2
         border-gray-200   " >
          <h2 className='text-lg text-gray-600  mb-4 font-bold' >All posts you made</h2>
          {/* ======Box 1*/}

          <div className="posts text-sm border-2 border-gray300 rounded-lg h-[140px] w-15 p-3 shadow-md mb-5">
          <div className="box-1">
            <div className="flex"><h2 className="title font-bold mr-3">The Legend Seeker</h2><span className='text-slate-400'>@johndoe</span></div>
            <div className="content  text-slate-600  py-2"><p>Can we all agree Lorem ipsum dolor sit amet consectetur sapiente harum!</p></div>
            <div className="date text-slate-400 flex mt-2">  <p>2:52PM - Oct 15, 2023</p> 
        <Link to='/edit-post'><span className='bg-green-500 hover:bg-green-600 mx-2 hover:shadow-md font-bold text-gray-700 rounded-md text-sm py-[5px] px-4
          '>Edit</span></Link>
        <Link to='/edit-post'><span className='bg-red-500 hover:bg-red-600 mx-3 hover:shadow-md font-bold text-gray-700 rounded-md text-sm py-[5px] px-4
          '>Delete</span></Link>
            
            </div>
          </div>

          </div>
          {/* ======Box 1 End*/}


          {/* ======Box 2 */}
          <div className="posts text-sm border-2 border-gray300 rounded-lg h-[140px] w-15 p-3 shadow-md ">
          <div className="box-1">
            <div className="flex"><h2 className="title font-bold mr-3">True Story Lalaba</h2><span className='text-slate-400'>@johndoe</span></div>
            <div className="content lg:text-md text-slate-600 py-2"><p>We all agree orem ipsum dolor amet consectetur sapiente harum!</p></div>
            <div className="date text-slate-400 flex mt-2">  <p>2:52PM - Oct 15, 2023</p> 
        <Link to='/edit-post'><span className='bg-green-500 hover:bg-green-600 mx-2 hover:shadow-md font-bold text-gray-700 rounded-md text-sm py-[5px] px-4
          '>Edit</span></Link>
        <Link to='/edit-post'><span className='bg-red-500 hover:bg-red-600 mx-3 hover:shadow-md font-bold text-gray-700 rounded-md text-sm py-[5px] px-4
          '>Delete</span></Link>
            
            </div>
          </div>

          </div>
            {/* ======Box 2 End*/}
         </div>
       
        </div>
           
        </div>
      </div>
     
    </main>
  


  )
}

export default Dashboard
