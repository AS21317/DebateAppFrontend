import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useContext } from "react";
import { toast } from "react-toastify";
import { authContext } from "../context/AuthContext";
import signupImg  from "../assets/images/speaker1.png"
import { HashLoader } from "react-spinners";

 

const ExpertApplicationPage = () => {
  const { token, user } = useContext(authContext);
  const [loading, setLoading] = useState(false);
  console.log(user);
  const defaultFormData = {
    name: "",
    age: "",
    email: "",
    phone: "",
    gender: "",
    message: "",
    photo: null,
    expertise: [],
    user: user._id,
    resumeLink: "",
  }


  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    gender: "",
    message: "",
    photo: null,
    expertise: [],
    user: user._id,
    resumeLink: "",
  });

  useEffect(() => {
    setFormData({
      user: user._id,
      name: user?.name,
      email: user?.email,
      age: user?.age,
      phone: user?.phone,
      gender: user?.gender,
      photo: user?.photo,
      expertise: [],
    });
  }, [user]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };




  // apply expert function
  const applyForExpert = async (e) => {
    console.log("applying expert");
    console.log(formData);

    e.preventDefault();
    setLoading(true);

    console.log("called here updation ");

    try {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/v1/expertApplication/create`,
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
      console.log("Expert Application  response is : ", result);

      toast.success(result.message);
      setLoading(false);
      setFormData(defaultFormData)
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  const addItem = (key, item) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: [...prevFormData[key], item],
    }));
  };

  const handleReusableInputChnageFunction = (key, index, event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      const updatedItems = [...prevFormData[key]];

      // If the index is out of bounds, add a new item
      if (index >= updatedItems.length) {
        updatedItems.push(value);
      } else {
        updatedItems[index] = value;
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
    addItem("expertise", "");
  };

  const handleExperiencesChange = (event, index) => {
    handleReusableInputChnageFunction("expertise", index, event);
  };

  const deleteExperiences = (e, index) => {
    e.preventDefault();
    deleteItems("expertise", index);
  };
 
  return (
    <section className="px-5 xl:px-0">
    <div className="max-w-[1170px] mx-auto">
      <div className="grid grid-cols-1 items-center lg:grid-cols-2">
        <div className="hidden lg:block  max-h-[90vh] rounded-l-lg">
          <figure className="rounded-l-lg">
            <img src={signupImg} alt="" className="w-full min-h-[80vh] rounded-lg" style={{ transform: 'rotateY(180deg)' }}/>
          </figure>
        </div>

        <div className="rounded-l-lg lg:pl-16 ">
        <h3 className="text-headingColor text-center text-[26px] leading-9 font-bold mb-10">
           Welcoming You to join us as an Expert
          </h3>
          <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-5">
            Become an <span className="text-primaryColor">Expert</span>
          </h3>
          { <form className="min-w-[300px] ">
              <div className=" flex-col sm:flex  justify-between">
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
                    value={formData.age}
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
                  name="resumeLink"
                  required
                  value={formData.resumeLink || ""}
                  onChange={handleInputChange}
                  placeholder="Link of Your Resume"
                  className="form__input"
                />
              </div>

              <div className="mb-5">
                <p className="form__label">Expertise*</p>
                {formData.expertise?.map((item, index) => (
                  <div key={index}>
                    <div>
                      <div>
                        <p className="form__label">Expertise Name*</p>
                        <input
                          type="text"
                          name="expertise"
                          value={item}
                          className="form__input"
                          onChange={(e) => handleExperiencesChange(e, index)}
                        />
                      </div>
                      <button
                        onClick={(e) => deleteExperiences(e, index)}
                        className=" bg-red-600 rounded-full p-2 mt-2 text-white  text-[18px] mb-[30px] cursor-pointer"
                      >
                        <AiOutlineDelete />
                      </button>
                    </div>
                  </div>
                ))}

                <button
                  onClick={addExperiences}
                  className=" bg-[#238438] py-2 px-5 text-white  font-bold rounded h-fit cursor-pointer"
                >
                  Add Yout Expertise
                </button>
              </div>

              <div className="mb-5">
                <p className="form__label">About*</p>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  placeholder="Tell us about you"
                  onChange={handleInputChange}
                  className="form__input"
                ></textarea>
              </div>

              <div className="mt-7">
                <button
                  onClick={applyForExpert}
                  type="submit"
                  className="bg-primaryColor text-white font-bold text-[20px] leading-[30px] w-full px-4 py-3 rounded-lg"
                >
                 {loading?<HashLoader size={35} color="white" className="w-full mx-auto" />: "Submit"}
                </button>
              </div>
            </form> }
        </div>
      </div>
    </div>

  </section>
  );
};

export default ExpertApplicationPage;
