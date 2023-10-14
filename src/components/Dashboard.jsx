import React from 'react'
import { Link } from 'react-router-dom'


const Dashboard = () => {
  return (
    


    <main className='w-full h-screen flex'>
      {/* <div className=" h-[100%]   w-[100%] md:w-[50%]  bg-gray-100 flex  justify-center items-center"> */}
      <div className=" h-[100%]   w-[100%]  flex  justify-center items-center">
      {/* form */}
        <div  className='w-[450px] h-[450px] lg:w-[940px]  md:w-[740px] bg-white rounded-lg shadow-md border-[.2px] border-gray-300 '>
       <div className="header">
        <nav>
          <ul className='flex justify-between items-center p-[12px] border-b-2 border-gray-200'>
          <li>First Link</li>
          <li>First Link</li>
          <li>First Link</li>
          </ul>
        </nav>
       </div>
      
        <div className="container  flex justify-between items-start  ">
        <div className="box-1 p-[12px] h-[400px]  w-[40%] md:w-[50%]   " >
          <div className='text-lg text-gray-600  mb-4 font-bold'>Post your content</div>
        {/* ===========Form ======================= */}
      {/* <div className=" h-[100%]   w-[100%] md:w-[50%]  bg-gray-100 flex  justify-center items-center"> */}
          <div className="  ">
          {/* form */}
            <form onSubmit='' className='w-[340px] h-[300px]  lg:w-[420px]
            bg-white rounded-lg   border-gray-100 p-2 pt-4 mt-3'>
                
                <label htmlFor="" className=" text-gray-500 font-bold text-sm">Title</label>
                <br />
                <input type="text" placeholder='The Legend Killer' value=''
                onChange={e => setEmail(e.target.value)} className='w-[320px] lg:w-[400px]
                  h-[40px] text-sm  mb-1   p-2 border-gray-200 border-[.05px] rounded-md shadow-sm focus:outline-none hover:border-gray-800 focus:border-green-600' />
                <br />
                <label htmlFor="" className=" text-gray-500 font-bold text-sm">Content</label>
                <br />
                <textarea name="" id="" cols="30" rows="10" placeholder='Content *' value=''
                onChange={e => setEmail(e.target.value)} className='w-[320px] lg:w-[400px]
                  h-[40px] text-sm  mb-1   p-2 border-gray-200 border-[.05px] rounded-md shadow-sm focus:outline-none hover:border-gray-800 focus:border-green-600' />
                <br />
                {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
                <label htmlFor="" className=" text-gray-500 font-bold text-sm">Author</label>
                <br />
                <input type="text" placeholder='John Doe' value=''
                onChange={e => setEmail(e.target.value)} className='w-[320px] lg:w-[400px]
                  h-[40px] text-sm  mb-1   p-2 border-gray-200 border-[.05px] rounded-md shadow-sm focus:outline-none hover:border-gray-800 focus:border-green-600' />
                <br />
                <br />
              
                <button className="w-[320px] h-[40px]  bg-green-600 
                text-white  px-1 text-sm shadow-sm rounded-full">Create Post</button>
            </form>
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
            <div className="content py-2"><p>Can we all agree Lorem ipsum dolor sit amet consectetur sapiente harum!</p></div>
            <div className="date text-slate-400 mt-2">  <p>2:52PM - Oct 15, 2023</p></div>
          </div>

          </div>
          {/* ======Box 1 End*/}


          {/* ======Box 2 */}
          <div className="posts text-sm border-2 border-gray300 rounded-lg h-[140px] w-15 p-3 shadow-md ">
          <div className="box-1">
            <div className="flex"><h2 className="title font-bold mr-3">True Story Lalaba</h2><span className='text-slate-400'>@johndoe</span></div>
            <div className="content py-2"><p>We all agree orem ipsum dolor amet consectetur sapiente harum!</p></div>
            <div className="date text-slate-400 mt-2">  <p>2:56PM - Oct 15, 2023</p></div>
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
