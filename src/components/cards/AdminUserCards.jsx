import React, { useContext, useEffect, useState } from "react";
import faq1 from "../../assets/images/faq1.png";
import { AiFillYoutube, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { HashLoader } from "react-spinners";
import { authContext } from "../../context/AuthContext";

const AdminUserCards = ({ userData, index }) => {
  const [loading, setLoading] = useState(false);
  const { token } = useContext(authContext)

  // const [requestedRole,setRequestedRole] = useState("")

  const handleAssignRole = async (role) => {
    // const coAdmin={
    //   path:"hii"
    // }
    // const host={
    //   path:"hello"
    // }
    // const expert={
    //   path:"expert"
    // }

    setLoading(true);
    try {
      console.log("hrer sidn");
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/v1/auth/register${role}/${userData._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      // dispatch({
      //   type:"LOGIN_SUCCESS",
      //   payload:{
      //     user:result.data,
      //   }
      // });

      console.log(result, "Request data is here ");

      toast.success(result.message)
      setLoading(false);
      setApplications(result.data);
    } catch (err) {
      setLoading(false);
      toast.error(err);
    }
  };

  // To handle modal oprnningss
  console.log("recieved data is ", userData);

  const sociallinks = [
    {
      path: `${userData.socials?.youtube || "#"}`,
      icon: <AiFillYoutube className="Mgroup-hover:text-white w-4 h-5" />,
    },

    {
      path: `${userData.socials?.github || "#"}`,
      icon: <AiFillGithub className=" Mgroup-hover:text-white w-4 h-5" />,
    },

    {
      path: `${userData.socials?.instagram || "#"}`,
      icon: <AiFillInstagram className="Mgroup-hover:text-white w-4 h-5" />,
    },

    {
      path: `${userData.socials?.linkedin || "#"}`,
      icon: <RiLinkedinFill classame=" Mgroup-hover:text-white w-4 h-5" />,
    },
  ];

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const modal = document.getElementById(`my_modal_${index}`);
      if (modal && event.target === modal) {
        modal.close();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div className="mx-auto flex max-w-xs flex-col items-center rounded-xl border px-3 py-4 text-center md:max-w-lg md:flex-row md:items-start md:text-left">
        <div className="">
          <div className="flex items-center">
            <img
              className="h-14 w-14 rounded-full object-cover"
              src={userData.photo}
              alt="Simon Lewis"
            />

            <div className="ml-4 w-56">
              <p className="text-slate-800 text-xl font-extrabold">
                {userData.name}
              </p>
              <p className="text-slate-500">{userData.email}</p>
              {/* <p className="mt-1 bg-lime-300 w-fit font-bold text-slate-900 py-1 px-2 rounded-[50px]"> */}
              {/* {
                  userData.areaOfInterest
                }
              </p> */}
            </div>
          </div>
          <div className="flex mt-6 space-x-2">
            <div className="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
              <p className="text-sm font-medium text-gray-500">Events</p>
              <p className="text-3xl font-medium text-gray-600">
                {userData.events.length}
              </p>
            </div>
            <div className="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
              <p className="text-sm font-medium text-gray-500">Reviews</p>
              <p className="text-3xl font-medium text-gray-600">
                {userData.events.length}
              </p>
            </div>
            <div className="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
              <p className="text-sm font-medium text-gray-500">Rating</p>
              <p className="text-3xl font-medium text-gray-600">
                {userData.averageRating}
              </p>
            </div>
            <div className=""></div>
          </div>

          <div className="flex justify-around  mb-5 mt-6">
            {sociallinks.map((link, index) => (
              <Link
                to={link.path}
                key={index}
                className="w-9 h-9 border border-solid border-[#181A12] rounded-full flex items-center
    
     justify-center group hover:bg-primaryColor hover:border-none
    
    "
              >
                {link.icon}
              </Link>
            ))}
          </div>
          <hr className="h-1 my-2 bg-gray-500" />
          <div className="flex justify-between">
            <Link to={"#"}>
              <button
                onClick={() => handleAssignRole("CoAdmin")}
                disabled={userData.role === "coAdmin"}
                className={`${
                  userData.role === "coAdmin" && "bg-orange-500"
                } w-full rounded-lg border-2 bg-blue-600 text-white px-4 py-2 font-semibold`}
              >
                Make Co-Admin
              </button>
            </Link>
            <Link to={"#"}>
              <button
                onClick={(e) => {
                  e.preventDefault(), handleAssignRole("Host");
                }}
                disabled={userData.role === "host"}
                className={` ${
                  userData.role === "host" && "bg-orange-500"
                } w-full rounded-lg border-2 bg-blue-600 text-white px-4 py-2 font-semibold`}
              >
                Make Host
              </button>
            </Link>
          </div>

          <div className="flex justify-between mt-2">
            <button className="  rounded-lg border-2 bg-blue-600 text-white px-6 py-2 font-semibold">
              Check Profile
            </button>

            <button
              onClick={(e) => {
                e.preventDefault(), handleAssignRole("Admin");
              }}
              className={`${
                userData.role === "admin" && "bg-orange-500"
              } rounded-lg border-2 bg-blue-600 text-white px-2 py-2 font-semibold`}
            >
              {loading ? <HashLoader size={25} color="white" /> : "Make Admin"}
            </button>
          </div>

          <div className="flex justify-between mt-2">
            <button
              onClick={() => handleAssignRole("Expert")}
              disabled={userData.role === "expert"}
              className={`${
                userData.role === "expert" && "bg-orange-500"
              } rounded-lg border-2 bg-blue-600 text-white px-2 py-2 font-semibold`}
            >
              Make Expert
            </button>
            <button
              onClick={() =>
                document.getElementById(`my_modal_${index}`).showModal()
              }
              className=" rounded-lg border-2 bg-red-600 text-white px-6 py-2 font-semibold"
            >
              Delete
            </button>
          </div>

          <div className="flex  justify-center">
            <dialog id={`my_modal_${index}`} className="modal">
              <div className="modal-box bg-white-100">
                <h2 className=" text-[20px] font-semibold ">
                  {`Are you sure to Delete ${userData.name}`}
                </h2>

                <div className="flex rounded-lg   justify-between p-6 pb-0 ">
                  <form method="dialog" className="flex justify-between">
                    <button className="btn mt-0 ">NO</button>
                  </form>
                  <form method="dialog">
                    <button className="btn mt-0">Yes</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminUserCards;
