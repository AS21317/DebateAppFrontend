import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useContext } from "react";
import { toast } from "react-toastify";
import { authContext } from "../context/AuthContext";

const ExpertApplicationPage = () => {
  const { token, user } = useContext(authContext);
  console.log(user)

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    gender: "",
    photo: null,
    expertises: [],
  });

  useEffect(() => {
    setFormData({
      name: user?.name,
      email: user?.email,
      age: user?.age,
      phone: user?.phone,
      gender: user?.gender,
      photo: user?.photo,
      expertises: user?.expertises || [], // Ensure expertises is initialized as an array
    });
  }, [user]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const updateProfileHandler = async (e) => {
    console.log(formData)
    e.preventDefault();
    console.log("called here updation ");
    // try {
    //   const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/doctor/${doctorData._id}`, {
    //     method: "PUT",
    //     headers: {
    //       "content-type": "application/json",
    //       Authorization: `Bearer ${token}`,
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   const result = await res.json();
    //   if (!res.ok) {
    //     throw Error(result.message);
    //   }
    //   console.log("Result is : ", result);

    //   toast.success(result.message);
    // } catch (err) {
    //   toast.error(err.message);
    // }
  };

  const addItem = (key, item) => {
    setFormData((prevFormData) => ({ ...prevFormData, [key]: [...prevFormData[key], item] }));
  };

  const handleReusableInputChnageFunction = (key, index, event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      const updatedItems = [...prevFormData[key]];

      // If the index is out of bounds, add a new item
      if (index >= updatedItems.length) {
        updatedItems.push({ [name]: value });
      } else {
        updatedItems[index][name] = value;
      }

      return {
        ...prevFormData,
        [key]: updatedItems,
      };
    });
  };

  const deleteItems = (key, index) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: prevFormData[key].filter((_, i) => i !== index),
    }));
  };

  const addExperiences = (e) => {
    e.preventDefault();
    addItem("expertises", { expertise: "" });
  };

  const handleExperiencesChange = (event, index) => {
    handleReusableInputChnageFunction("expertises", index, event);
  };

  const deleteExperiences = (e, index) => {
    e.preventDefault();
    deleteItems("expertises", index);
  };
  
   


  return (
   
    <section>
        <div className="container">
   <h2 className=" text-headingColor  text-center font-bold text-[24px] leading-9 mb-10  ">
        Profile information
      </h2>
   <div className="  ">
   <div className=" flex justify-center  ">
      
      <form className="min-w-[300px] " onSubmit={updateProfileHandler}>
      <div className=" flex-col sm:flex gap-10 justify-between">
      <div className="mb-5">
          <p className="form__label">Name*</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="form__input"
          />
        </div>

        <div className="mb-5">
          <p className="form__label">Email*</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="form__input"
            readOnly
            aria-readonly
            disabled="true"
          />
        </div>
      </div>

      <div className=" flex gap-10 justify-between">
      <div className="mb-5">
          <p className="form__label">Phone*</p>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone Number"
            className="form__input"
          />
        </div>

        <div className="mb-5">
          <p className="form__label">Age*</p>
          <input
            type="number"
            name="age"
            value={formData.age }
            onChange={handleInputChange}
            placeholder="Age"
            className="form__input"
          />
        </div>
      </div>

      <div className="mb-5">
          <p className="form__label">Resume Link*</p>
          <input
            type="text"
            name="resume"
            required
            value={formData.resume || ""}
            onChange={handleInputChange}
            placeholder="Link of Your Resume"
            className="form__input"
          />
        </div>
     

    


        <div className="mb-5">
          <p className="form__label">Expertises*</p>
          {formData.expertises?.map((item, index) => (
            <div key={index}>
              <div>
              

                

                  <div>
                    <p className="form__label">Expertise Name*</p>
                    <input
                      type="text"
                      name="expertise"
                      value={item.expertise}
                      className="form__input"
                      onChange={e=>handleExperiencesChange(e,index)}
                    />
                </div>
                <button onClick={e=>deleteExperiences(e,index)} className=" bg-red-600 rounded-full p-2 mt-2 text-white  text-[18px] mb-[30px] cursor-pointer">
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}

          <button onClick={addExperiences} className=" bg-[#238438] py-2 px-5 text-white  font-bold rounded h-fit cursor-pointer">
            Add Yout Expertises
          </button>
        </div>

      

        <div className="mb-5">
          <p className="form__label">About*</p>
          <textarea
            name="about"
            rows={5}
            value={formData.about}
            placeholder="Tell us about you"
            onChange={handleInputChange}
            className="form__input"
          ></textarea>
        </div>

      

        <div className="mt-7">
          <button type="submit"  className="bg-primaryColor text-white text-[18px] leading-[30px] w-full px-4 py-3 rounded-lg">Submit</button>
        </div>
      </form>
    </div>
   </div>
        </div>
    </section>
  );
};

export default ExpertApplicationPage;
