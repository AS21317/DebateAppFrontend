import React from 'react'
import faq1 from '../../assets/images/faq1.png'
import {AiFillYoutube,AiFillGithub,AiFillInstagram} from 'react-icons/ai' 
import {RiLinkedinFill} from 'react-icons/ri'
import { Link } from 'react-router-dom'



const sociallinks = [ 
    { 
    path: "https: //www.youtube.com/c/CodingWithMuhib", 
    icon: <AiFillYoutube className="Mgroup-hover:text-white w-4 h-5" />,
    },
    
   {
    path: "https: //github.com/codingwithmuhib",
    icon: <AiFillGithub className=" Mgroup-hover:text-white w-4 h-5"/>
   },
    
    {
    path: "https: //ww.instagram.com/muhib160.official/", 
    icon: <AiFillInstagram className="Mgroup-hover:text-white w-4 h-5" />,
    },
    
    
    {
    path: "https://www.linkedin.com/in/codingwithmuhib/",
    icon: <RiLinkedinFill classame=" Mgroup-hover:text-white w-4 h-5" />
    }
    
  ]



const HostCard = () => {
  return (
   <>
   <div class="mx-auto my-10 flex max-w-xs flex-col items-center rounded-xl border px-3 py-4 text-center md:max-w-lg md:flex-row md:items-start md:text-left">

  <div class="">
  <div class="flex items-center">
      <img class="h-14 w-14 rounded-full object-cover" src={faq1} alt="Simon Lewis" />
      
      <div class="ml-4 w-56">
        <p class="text-slate-800 text-xl font-extrabold">Richard Hendricks</p>
        <p class="text-slate-500">demo@gmail.com</p>
        <p class="mt-1 bg-lime-300 w-fit font-bold text-slate-900 py-1 px-2 rounded-[50px]">Debate</p>
       
      </div>
    </div>
    <div class="flex mt-6 space-x-2">
      <div class="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
        <p class="text-sm font-medium text-gray-500">Events</p>
        <p class="text-3xl font-medium text-gray-600">23</p>
      </div>
      <div class="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
        <p class="text-sm font-medium text-gray-500">Reviews</p>
        <p class="text-3xl font-medium text-gray-600">7</p>
      </div>
      <div class="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
        <p class="text-sm font-medium text-gray-500">Rating</p>
        <p class="text-3xl font-medium text-gray-600">4.5</p>
      </div>
      <div class=""></div>
    </div>
    
    <div className="flex justify-around  mb-5 mt-6"> 
    {sociallinks.map((link, index) => (  
    
    <Link
    
    to={ link.path}
    
    key={ index}
    className="w-9 h-9 border border-solid border-[#181A12] rounded-full flex items-center
    
     justify-center group hover:bg-primaryColor hover:border-none
    
    ">
    {link.icon}
    
    </Link> 
    ))}
    

    
    </div>
    <div class="flex space-x-2">
    <Link to={'/host/hostDetails'}>  <button class="w-full rounded-lg border-2 bg-blue-600 text-white px-4 py-2 font-semibold">Profile</button></Link>
    </div>
  </div>
</div>

   
   </>
  )
}

export default HostCard