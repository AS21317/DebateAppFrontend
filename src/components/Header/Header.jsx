import React, { useEffect, useRef, useContext, useState } from "react";

import logo from "../../assets/images/logo3.png";
import { NavLink, Link, useLocation, useLoaderData } from "react-router-dom";
import userImage from "../../assets/images/avatar-icon.png";
import Login from "../../Pages/Login";
import { authContext } from "../../context/AuthContext";
import { BiMenu } from "react-icons/bi";

const userNavLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/events",
    display: "All Events",
  },
  {
    path: "/hosts",
    display: "All Hosts",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/applyForExpert",
    display: "Become an Expert",
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
    path: "/admin/hosts",
    display: "View Hosts",
  },
  {
    path: "/admin/admins",
    display: "View Admins ",
  },
  {
    path: "/admin/coadmins",
    display: "View Coadmins",
  },
  {
    path: "/admin/experts",
    display: "View Experts",
  },
];

const coAdminNavLinks = [
  {
    path: "/coadmins/home",
    display: "Home",
  },
  {
    path: "/coadmin/hosts",
    display: "View Hosts",
  },
  {
    path: "/coadmin/coadmins",
    display: "View coadminss ",
  },
  {
    path: "/coadmins/users",
    display: "View Users",
  },
  {
    path: "/coadmins/experts",
    display: "View Experts",
  },
];



const Header = () => {

  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, role: newRole, token } = useContext(authContext);
  // const [role, setRole] = useState(newRole);
  // console.log("user info save : ",user,role,token);
  console.log("Role is  : ", user, newRole);


  let isOnDashboard = localStorage.getItem("isOnDashboard")
  isOnDashboard = (isOnDashboard === "true"? true: false)

  const location = useLocation()

  const dashboard = location.pathname.includes('admin') || location.pathname.includes('host') || location.pathname.includes('coAdmin') || location.pathname.includes('expert')
  if(dashboard){
    localStorage.setItem("isOnDashboard", true)
    isOnDashboard = true;
  }



  const [admin, setAdmin] = useState(isOnDashboard);
  const [host, setHost] = useState(isOnDashboard);
  const [coAdmin, setCoadmin] = useState(isOnDashboard);
  const [expert, setExpert] = useState(isOnDashboard);


  useEffect(() => {
    const confirmBeforeUnload = (e) => {
      // Cancel the event
      // e.preventDefault();

      // Chrome requires the returnValue property to be set
      // e.returnValue = '';

      localStorage.setItem("isOnDashboard", false)
    };

    // Add the event listener when the component mounts
    window.addEventListener('beforeunload', confirmBeforeUnload);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('beforeunload', confirmBeforeUnload);
    };
  }, []); 


  const hostNavLinks = [
    {
      path: `/${newRole === "expert"? "expert": "host"}/home`,
      display: "Home",
    },
    {
      path: "/hosts",
      display: "View all Hosts",
    }, 
    {
      path: "/experts",
      display: "View All Experts ",
    },
    {
      path: "/events",
      display: "View All Events",
    },
  ];


  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();

    return () => window.removeEventListener("scroll", handleStickyHeader);
  });

  const toggleMenu = () => {
    menuRef.current.classList.toggle("show__menu");
  };


  if(location.pathname.includes('errorPage')) return <></>
  return (
    <header className="header flex  shadow-md justify-center items-center" ref={headerRef}>
      <div className="container px-1  ">
        <div className="flex  items-center justify-between">
          <div>
            <Link onClick={() => setAdmin(false)} to={"/home"}>
              {" "}
              <img src={logo} alt="Logo" className=" w-[80px]   sm:w-[125px] sm:h-[70px]" />
            </Link>
          </div>

          {/* To show the respective dashboard logic is written here  */}
          {newRole === "admin" ? (
            <Link to={!admin ? "/admin/home" : "/home"}>
              <button
                onClick={(e) => setAdmin((prevAdmin) => {
                  localStorage.setItem("isOnDashboard", !prevAdmin)
                  return !prevAdmin;
                })}
                className="bg-primaryColor sm:py-[2]  sm:px-6 text-white font-[600] h-[44px] flex items-center
            justify-center rounded-[50px]"
              >
                {!admin ? "Admin Page" : "User Page"}
              </button>
            </Link>
          ) : null}

          {/* To show the respective dashboard logic is written here  */}
          {newRole === "host" ? (
            <Link to={!host ? "/host/home" : "/home"}>
              <button
                onClick={(e) => setHost((prevAdmin) => {
                  localStorage.setItem("isOnDashboard", !prevAdmin)
                  return !prevAdmin;
                })}
                className="bg-primaryColor px-2  sm:py-2 sm:px-6 text-white font-[600] h-[30px] sm:h-[44px] flex items-center
            justify-center rounded-[50px]"
              >
                {!host ? "Host Page" : "Home Page"}
              </button>
            </Link>
          ) : null}

          {newRole === "coAdmin" ? (
            <Link to={!coAdmin ? "/coAdmin/home" : "/home"}>
              <button
                onClick={(e) => setHost((prevAdmin) => {
                  localStorage.setItem("isOnDashboard", !prevAdmin)
                  return !prevAdmin;
                })}
                className="bg-primaryColor py-[2]  px-6 text-white font-[600] h-[44px] flex items-center
            justify-center rounded-[50px]"
              >
                {!coAdmin ? "CoAdmin Page" : "User Page"}
              </button>
            </Link>
          ) : 
           newRole==="expert"? <Link to={!expert ? "/expert/home" : "/home"}>
              <button
                onClick={(e) => setExpert((prevAdmin) => {
                  localStorage.setItem("isOnDashboard", !prevAdmin)
                  return !prevAdmin;
                })}
                className="bg-primaryColor py-[2]  px-3 sm:px-6 text-white font-[600] h-[30px] sm:h-[44px] flex items-center
            justify-center rounded-[50px]"
              >
                {!expert ? "Expert Page" : "User Page"}
              </button>
            </Link>:null}

     

          {/* =====>  menu =====>                  */}
          <div className="navigation " ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center flex-wrap gap-[2rem] sm:gap-[2.4rem] md:gap-[3.4rem]  lg:gap-[1.4rem]">
              {(newRole === "admin" && admin)
                ? adminNavLinks.map((link, index) => (
                    <li key={index}>
                      <NavLink
                        to={link.path}
                        className={(navClass) =>
                          navClass.isActive
                            ? " text-primaryColor text-[16px] leading-7 font-[600]"
                            : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                        }
                      >
                        {" "}
                        {link.display}
                      </NavLink>
                    </li>
                  ))
                : (newRole === "coAdmin" && coAdmin)
                ? coAdminNavLinks.map((link, index) => (
                    <li key={index}>
                      <NavLink
                        to={link.path}
                        className={(navClass) =>
                          navClass.isActive
                            ? " text-primaryColor text-[16px] leading-7 font-[600]"
                            : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                        }
                      >
                        {" "}
                        {link.display}
                      </NavLink>
                    </li>
                  ))
                : (newRole === "host" || newRole ==="expert") && (expert || host)
                ? hostNavLinks.map((link, index) => (
                    <li key={index}>
                      <NavLink
                        to={link.path}
                        className={(navClass) =>
                          navClass.isActive
                            ? " text-primaryColor text-[16px] leading-7 font-[600]"
                            : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                        }
                      >
                        {" "}
                        {link.display}
                      </NavLink>
                    </li>
                  ))
                : userNavLinks.map((link, index) => (
                    <li key={index}>
                      <NavLink
                        to={link.path}
                        className={(navClass) =>
                          navClass.isActive
                            ? " text-primaryColor text-[16px] leading-7 font-[600]"
                            : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                        }
                      >
                        {" "}
                        {link.display}
                      </NavLink>
                    </li>
                  ))}
            </ul>
          </div>

          {/* ======== NAV RIGHT ========== */}

          <div className=" flex items-center gap-2">
            {token && user ? (
              <div className="">
                <Link
                  to={`${
                    newRole === "host"
                      ? "host/hostDashboard"
                      : newRole === "user"
                      ? "/user/profile"
                      : newRole === "admin"
                      ? "/admin/userDashboard"
                      : newRole==="expert"?"/expert/dashBoard":"coAdmin/dashBoard"
                  }`}
                >
                  <figure className="w-[35px] h-[35px] rounded-full ">
                    <img
                      src={user?.photo}
                      className=" h-full w-full rounded-full"
                      alt="UserImg"
                    />
                  </figure>
                </Link>
              </div>
            ) : (
              <Link to="/login">
                <button
                  className="bg-primaryColor  sm:py-5 px-4 sm:px-6 text-white font-[500] sm:text-xl h-9 flex items-center
                    justify-center rounded-[50px]"
                >
                  Login
                </button>
              </Link>
            )}

            <span className="lg:hidden">
              <BiMenu className="w-6 h-6 cursor-pointer" onClick={toggleMenu} />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
