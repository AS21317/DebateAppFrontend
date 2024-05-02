import React, { useEffect } from "react";
import faq1 from "../../assets/images/faq1.png";
import { AiFillYoutube, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const sociallinks = [
  {
    path: "#",
    icon: <AiFillYoutube className="Mgroup-hover:text-white w-4 h-5" />,
  },

  {
    path: "#",
    icon: <AiFillGithub className=" Mgroup-hover:text-white w-4 h-5" />,
  },

  {
    path: "#",
    icon: <AiFillInstagram className="Mgroup-hover:text-white w-4 h-5" />,
  },

  {
    path: "#",
    icon: <RiLinkedinFill classame=" Mgroup-hover:text-white w-4 h-5" />,
  },
];

const AdminUserCards = () => {
  // To handle modal oprnningss

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const modal = document.getElementById("my_modal_1");
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
      <div class="mx-auto my-10 flex max-w-xs flex-col items-center rounded-xl border px-3 py-4 text-center md:max-w-lg md:flex-row md:items-start md:text-left">
        <div class="">
          <div class="flex items-center">
            <img
              class="h-14 w-14 rounded-full object-cover"
              src={faq1}
              alt="Simon Lewis"
            />

            <div class="ml-4 w-56">
              <p class="text-slate-800 text-xl font-extrabold">
                Richard Hendricks
              </p>
              <p class="text-slate-500">demo@gmail.com</p>
              <p class="mt-1 bg-lime-300 w-fit font-bold text-slate-900 py-1 px-2 rounded-[50px]">
                Debate
              </p>
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
          <div class="flex justify-between">
            <Link to={"/host/hostDetails"}>
              {" "}
              <button class="w-full rounded-lg border-2 bg-blue-600 text-white px-4 py-2 font-semibold">
                Make Co-Admin
              </button>
            </Link>
            <Link to={"/host/hostDetails"}>
              {" "}
              <button class="w-full rounded-lg border-2 bg-blue-600 text-white px-4 py-2 font-semibold">
                Make Host
              </button>
            </Link>
          </div>

          <div class="flex justify-between mt-2">
            <Link to={'/admin/userProfile'}> 
             
              <button class=" rounded-lg border-2 bg-blue-600 text-white px-6 py-2 font-semibold">
                Check Profile
              </button>
            </Link>
            <button class=" rounded-lg border-2 bg-blue-600 text-white px-2 py-2 font-semibold">
              Make Admin
            </button>
          </div>
          <button
            onClick={() => document.getElementById("my_modal_1").showModal()}
            class=" w-full  mt-2 rounded-lg border-2 bg-red-600 text-white px-4 py-2 font-semibold"
          >
            Delete
          </button>

          <div className="flex  justify-center">
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box bg-white-100">
                <h2 className=" text-[20px] font-semibold ">
                  Are you sure to Delete Ashish
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
