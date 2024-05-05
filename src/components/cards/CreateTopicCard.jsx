import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import UploadImageToCloudinary from "../../utils/uploadCloudinary";
import SelectWithSearch from "./SelectWithSearch";
import ReviewCard from "./ReviewCard";
import SelectHostCard from "./SelectHostCard";
import { authContext } from "../../context/AuthContext";
import { HashLoader } from "react-spinners";

const CreateTopicCard = () => {
  const [loading, setLoading] = useState(false);
  const { token } = useContext(authContext);

  const [formData, setFormData] = useState({
    name: "",
    photo:""
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];
    setLoading(true);

    const data = await UploadImageToCloudinary(file);
    setLoading(false);
    console.log("uploaded file is : ", data);
    setFormData({ ...formData, photo: data?.url });
  };

  console.log("Form data is : ", formData);

  const createTopicHandler = async (e) => {
    e.preventDefault();
    try {
      // Replace the API endpoint with your event creation endpoint
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/v1/topic/create`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await res.json();
      if (!res.ok) {
        throw Error(result.message);
      }
      console.log("Result is : ", result);
      toast.success(result.message);
      setFormData({ name: "" });
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <>
      <h2 className="text-headingColor text-center font-bold text-[24px] leading-9 mb-10">
        Create A new Topic
      </h2>

      <section className="">
        <div className="">
          <div>
            <form
              className=" flex justify-evenly "
              onSubmit={createTopicHandler}
            >
              <div>
                <div className="mb-5 ">
                  <p className="form__label">Topic Name*</p>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter Topic Name"
                    className="form__input w-[500px]"
                  />
                </div>
                <button type="submit" className="btn">
                  {" "}
                  {loading ? <HashLoader size={25} color="white" /> : "Create"}
                </button>
              </div>

              <div className=" flex flex-col items-center  ">
                {formData.photo && (
                  <figure className="w-[300px] h-[240px]  border-2 border-solid border-primaryColor flex items-center justify-center">
                    <img
                      src={formData.photo}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </figure>
                )}
                <div className="relative  max-w-[200px]">
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    onChange={handleFileInputChange}
                    accept=".jpg, .png"
                    className="    opacity-0 cursor-pointer"
                  />

                  <label
                    htmlFor="customFile"
                    className=" w-full  flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
                  >
                    {loading ? (
                      <HashLoader size={25} color="white" />
                    ) : (
                      "Upload Topic Photo"
                    )}
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateTopicCard;
