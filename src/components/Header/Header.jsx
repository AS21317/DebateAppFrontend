import React, { useEffect, useRef ,useContext, useState} from "react";

import logo from "../../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";
import userImage  from '../../assets/images/avatar-icon.png'
import Login from "../../Pages/Login";
import { authContext } from "../../context/AuthContext";
import {BiMenu} from 'react-icons/bi'

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const adminNavLinks = [
  {
    path: "/admin/home",
    display: "Home",
  },
  {
    path: "/admin/doctors",
    display: "View Doctors",
  },
  {
    path: "/admin/patients",
    display: "View Patients",
  },
  {
    path: "/admin/messages",
    display: "View Messages",
  },
];

const Header = () => {
  
const [admin,setAdmin] = useState(false)
    const headerRef = useRef(null) 
    const menuRef = useRef(null)
    const {user,role,token}  = useContext(authContext)
    console.log("user info save : ",user,role,token);



    const handleStickyHeader = ()=>{ 
    window.addEventListener( 'scroll', ()=>{ 
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
    
     headerRef .current.classList.add( 'sticky_header')
    }else{ 
    headerRef.current.classList.remove('sticky_header')
    
    }
    } 
    
        ) 
    }
  
    useEffect(()=>{ 
        handleStickyHeader()

    return ()=> window. removeEventListener('scroll', handleStickyHeader)
        })

        const toggleMenu =()=>{
            menuRef.current.classList.toggle('show__menu');
        }



  return (
    <header className="header flex justify-center items-center" ref={headerRef}>
      <div className="container ">
        <div className="flex  items-center justify-between">
          <div>
           <Link onClick={()=>setAdmin(false)} to={'/home'}> <img src={logo} alt="Logo" /></Link>
          </div>
          {
            role=='patient'? <Link to={!admin?'/admin/home':'/home'}> 
            <button       onClick={(e) => setAdmin((prevAdmin) => !prevAdmin)}  className="bg-primaryColor py-[2]  px-6 text-white font-[600] h-[44px] flex items-center
            justify-center rounded-[50px]">
               {admin? "User View":"Admin View"} 
            </button>
            </Link> :null
          }

{                /* =====>  menu =====>                  */}
                <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                    <ul className="menu flex items-center gap-[2.7rem]">
                        {
                           !admin? navLinks.map((link,index)=>(
                                <li key={index}>
                                    <NavLink to={link.path}
                                    className={navClass=> navClass.isActive?" text-primaryColor text-[16px] leading-7 font-[600]"
                                    : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"}

                                    >  {link.display}</NavLink>
                                </li> 
                            )): adminNavLinks.map((link,index)=>(
                              <li key={index}>
                                  <NavLink to={link.path}
                                  className={navClass=> navClass.isActive?" text-primaryColor text-[16px] leading-7 font-[600]"
                                  : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"}

                                  >  {link.display}</NavLink>
                              </li> 
                          ))
                        }
                    </ul>
                </div>

                {/* ======== NAV RIGHT ========== */}

                      
                <div className=" flex items-center gap-2">
                {token && user? <div className="">
                            <Link to={`${role === 'doctor'?'doctor/profile/me':'/user/profile/me'}`}> 
                            <figure className="w-[35px] h-[35px] rounded-full ">
                            <img src={user.photo} className=" h-full w-full rounded-full" alt="UserImg" />
                            
                            </figure>
                        
                            </Link>
                    </div>:              
             <Link to="/login"> 
                    <button className="bg-primaryColor py-2  px-6 text-white font-[600] h-[44px] flex items-center
                    justify-center rounded-[50px]">
                        Login 
                    </button>
                    </Link> }
                    
                         
            
                    <span className="md:hidden">
                    <BiMenu className="w-6 h-6 cursor-pointer" onClick={toggleMenu} />
                    </span>
             </div>

        </div>
      </div>
    </header>
  );
};
export default Header;
