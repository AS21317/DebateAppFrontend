import React, { useEffect, useRef, useContext, useState } from "react";

import logo from "../../assets/images/logo3.png";
import { NavLink, Link } from "react-router-dom";
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
    path: "/doctors",
    display: "Find all Events",
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

const hostNavLinks = [
  {
    path: "/host/home",
    display: "Home",
  },
  {
    path: "/host/hosts",
    display: "View all Hosts",
  },
  {
    path: "/host/experts",
    display: "View All Experts ",
  },
  {
    path: "/host/events",
    display: "View All Events",
  },
];

const Header = () => {
  const [admin, setAdmin] = useState(false);
  const [host, setHost] = useState(false);
  const [coAdmin, setCoadmin] = useState(false);
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, role: newRole, token } = useContext(authContext);
  const [role, setRole] = useState(newRole);
  // console.log("user info save : ",user,role,token);
  console.log("Role is  : ", user, newRole);

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

  return (
    <header className="header flex justify-center items-center" ref={headerRef}>
      <div className="container ">
        <div className="flex  items-center justify-between">
          <div>
            <Link onClick={() => setAdmin(false)} to={"/home"}>
              {" "}
              <img src={logo} alt="Logo" width={"125px"} height={85} />
            </Link>
          </div>

          {/* To show the respective dashboard logic is written here  */}
          {newRole == "admin" ? (
            <Link to={!admin ? "/admin/home" : "/home"}>
              <button
                onClick={(e) => setAdmin((prevAdmin) => !prevAdmin)}
                className="bg-primaryColor py-[2]  px-6 text-white font-[600] h-[44px] flex items-center
            justify-center rounded-[50px]"
              >
                {!admin ? "Admin Page" : "Home Page"}
              </button>
            </Link>
          ) : null}

          {/* To show the respective dashboard logic is written here  */}
          {newRole == "host" ? (
            <Link to={host ? "/host/home" : "/home"}>
              <button
                onClick={(e) => setHost((prevAdmin) => !prevAdmin)}
                className="bg-primaryColor py-[2]  px-6 text-white font-[600] h-[44px] flex items-center
            justify-center rounded-[50px]"
              >
                {host ? "Host Page" : "Home Page"}
              </button>
            </Link>
          ) : null}

          {newRole == "coAdmin" ? (
            <Link to={host ? "/coAdmin/home" : "/home"}>
              <button
                onClick={(e) => setHost((prevAdmin) => !prevAdmin)}
                className="bg-primaryColor py-[2]  px-6 text-white font-[600] h-[44px] flex items-center
            justify-center rounded-[50px]"
              >
                {host ? "CoAdmin Page" : "Home Page"}
              </button>
            </Link>
          ) : null}

          {/* To show the respective dashboard logic is written here  */}
          {/* {
           newRole=='user'? <Link to={!admin?'/admin/home':'/home'}> 
            <button       onClick={(e) => setAdmin((prevAdmin) => !prevAdmin)}  className="bg-primaryColor py-[2]  px-6 text-white font-[600] h-[44px] flex items-center
            justify-center rounded-[50px]">
               {!admin? "Admin Page":"Host View"} 
            </button>
            </Link> :null
          } */}

          {/* =====>  menu =====>                  */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {newRole == "admin"
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
                : newRole === "coAdmin"
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
                : newRole === "host"
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
                      : "/coAdmin/Profile"
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
                  className="bg-primaryColor py-2  px-6 text-white font-[600] h-[44px] flex items-center
                    justify-center rounded-[50px]"
                >
                  Login
                </button>
              </Link>
            )}

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
