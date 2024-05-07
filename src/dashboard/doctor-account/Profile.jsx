import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import UploadImageToCloudinary from "../../utils/uploadCloudinary";
import { authContext } from "../../context/AuthContext";
import { useContext } from "react";
import { toast } from "react-toastify";
import { HashLoader } from "react-spinners";

const Profile = ({profileData}) => {

  const {token}  = useContext(authContext)
  const [loading,setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    age:"",
    email: "",
    password:'',
    phone: "",
    bio: "",
    gender: "",
    specialization: "",
    ticketPrice: 0,
    about: "",
    photo:null,
    qualifications:[
      
    ],
    experiences: [
      
    ],
    timeSlots: [
      
    ],
  });


  useEffect(()=>{
    setFormData({
      name:profileData?.name,
      email:profileData ?.email,
      age:profileData?.age,
    
    phone:profileData?.phone,
    bio:profileData?.bio,
    gender:profileData?.gender,
    about:profileData?.about,
    photo:profileData?.photo,
    qualifications:profileData?.qualifications,
    experiences: profileData?.experiences,
    timeSlots: profileData?.timeSlots,
    })
  },[])



  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange=async(e)=>{
    const file = e.target.files[0]
    setLoading(true)

    const data = await UploadImageToCloudinary(file)
    setLoading(false)
    console.log("uploaded file is : ",data) 
    setFormData({...formData,photo:data?.url})

  }


  const updateProfileHandler =  async(e)=>{
    e.preventDefault()
    setLoading(true)
    console.log("called here updation ")
    try {
      const res= await fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/doctor/${doctorData._id}`,{
        method:'PUT',
        headers:{
          'content-type':'application/json',
          Authorization:`Bearer ${token}`
        }, 
        body:JSON.stringify(formData)
      })

      const result = await res.json();
        if(!res.ok)
        {
          throw Error(result.message)
        }
        console.log("Result is : ",result);

        setLoading(false)
        toast.success(result.message)



    } catch (err) {
      setLoading(false)
      toast.error(err.message)
      
      
    }

  }




  
  //reusable function for adding item
  const addItem = (key,item)=>{
    setFormData(prevFormData=>({...prevFormData , [key]:[...prevFormData[key],item]}))
  }

  //reusable function for adding Items
  const handleReusableInputChnageFunction=(key,index,event)=>{
    const {name,value} = event.target
    setFormData(prevFormData=>{
      const updatedItems = [...prevFormData[key]]

      updatedItems[index][name] = value

      return {
        ...prevFormData,[key]:updatedItems,
      }

    })

  }

  // Reusable function for deleting items
  const deleteItems = (key,index)=>{
    setFormData(prevFormData=>({...prevFormData,[key]:prevFormData[key].filter((_,i)=>i!=index)}))

  }
  

  // fxn handeling Qualificattions 
  const addQualifications = (e)=>{
    e.preventDefault();
    addItem("qualifications", { startingDate: "", endingDate: "", degree: "PHD", university: "PU" })
    
  }
  
  const handleQualificationChange = (event,index)=>{
    handleReusableInputChnageFunction('qualifications',index,event)

  }

  const deleteQualification = (e,index)=>{
    e.preventDefault();
    deleteItems('qualifications',index)
  }


    // fxn handeling Experiences 
    const addExperiences = (e)=>{
      e.preventDefault();
      addItem("experiences", { startingDate: "", endingDate: "", position: "", hospital: "" })
      
    }
    
    const handleExperiencesChange = (event,index)=>{
      handleReusableInputChnageFunction('experiences',index,event)
  
    }
  
    const deleteExperiences = (e,index)=>{
      e.preventDefault();
      deleteItems('experiences',index)
    }


    
    // fxn handeling timeSlots 
    const addTimeSlots = (e)=>{
      e.preventDefault();
      addItem("timeSlots", { day: "", startingTime: "", endingTime: "" })
      
    }
    
    const handleTimeSlotsChange = (event,index)=>{
      handleReusableInputChnageFunction('timeSlots',index,event)
  
    }
  
    const deleteTimeSlots = (e,index)=>{
      e.preventDefault();
      deleteItems('timeSlots',index)
    }


  return (
    <div>
      <h2 className=" text-headingColor mt-10 font-bold text-[24px] leading-9 mb-5  ">
        Profile information
      </h2>
      <form onSubmit={updateProfileHandler}>
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
          <p className="form__label">Bio*</p>
          <input
            type="text"
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            placeholder="Bio"
            className="form__input"
            maxLength={100}
          />
        </div>

        <div className="mb-5">
          <div className="grid   grid-cols-2 gap-5 mb-[30px]">
            <div>
              <p className="form__label">Gender*</p>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="form__input py-3.5"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

           

           
            <div className="form__label">
              <p>Age*</p>
              <input
                type="number"
                placeholder=""
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                className="form__input"
              />
            </div>
          </div>
        </div>

        <div className="mb-5">
          <p className="form__label">Qualifications*</p>
          {formData.qualifications?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="form__label">Starting Date*</p>
                    <input
                      type="date"
                      name="startingDate"
                      value={item.startingDate}
                      className="form__input"
                      onChange={e=>handleQualificationChange(e,index)}
                    />
                  </div>

                  <div>
                    <p className="form__label">Ending Date*</p>
                    <input
                      type="date"
                      name="endingDate"
                      value={item.endingDate}
                      className="form__input"
                      onChange={e=>handleQualificationChange(e,index)}

                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5 mt-5">
                  <div>
                    <p className="form__label"> Degree*</p>
                    <input
                      type="text"
                      name="degree"
                      value={item.degree}
                      className="form__input"
                      onChange={e=>handleQualificationChange(e,index)}

                    />
                  </div>

                  <div>
                    <p className="form__label">University*</p>
                    <input
                      type="text"
                      name="university"
                      value={item.university}
                      className="form__input"
                      onChange={e=>handleQualificationChange(e,index)}

                    />
                  </div>
                </div>
                <button onClick={e=>deleteQualification(e,index)} className=" bg-red-600 rounded-full p-2 mt-2 text-white  text-[18px] mb-[30px] cursor-pointer">
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}

          <button onClick={addQualifications} className=" bg-[#238438] py-2 px-5 text-white  font-bold rounded h-fit cursor-pointer">
            Add Qualifications
          </button>
        </div>

        <div className="mb-5">
          <p className="form__label">Experiences*</p>
          {formData.experiences?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="form__label">Starting Date*</p>
                    <input
                      type="date"
                      name="startingDate"
                      value={item.startingDate}
                      className="form__input"
                      onChange={e=>handleExperiencesChange(e,index)}
                    />
                  </div>

                  <div>
                    <p className="form__label">Ending Date*</p>
                    <input
                      type="date"
                      name="endingDate"
                      value={item.endingDate}
                      className="form__input"
                      onChange={e=>handleExperiencesChange(e,index)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5 mt-5">
                  <div>
                    <p className="form__label"> Position*</p>
                    <input
                      type="text"
                      name="position"
                      value={item.position}
                      className="form__input"
                      onChange={e=>handleExperiencesChange(e,index)}
                    />
                  </div>

                  <div>
                    <p className="form__label">Hospital*</p>
                    <input
                      type="text"
                      name="hospital"
                      value={item.hospital}
                      className="form__input"
                      onChange={e=>handleExperiencesChange(e,index)}
                    />
                  </div>
                </div>
                <button onClick={e=>deleteExperiences(e,index)} className=" bg-red-600 rounded-full p-2 mt-2 text-white  text-[18px] mb-[30px] cursor-pointer">
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}

          <button onClick={addExperiences} className=" bg-[#238438] py-2 px-5 text-white  font-bold rounded h-fit cursor-pointer">
            Add Experiences
          </button>
        </div>

        <div className="mb-5">
          <p className="form__label">Time Slots*</p>
          {formData.timeSlots?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 md:grid-cols-4 mb-[30px] gap-5">
                  <div>
                    <p className="form__label">Day*</p>
                    <select
                      name="day"
                      value={item.day}
                      className="form__input py-3.5"
                      onChange={e=>handleTimeSlotsChange(e,index)}
                    >
                      <option value="">Select</option>
                      <option value="saturday">Saturday</option>
                      <option value="sunday">Sunday</option>
                      <option value="monday">Monday</option>
                      <option value="tuesday">Tuesday</option>
                      <option value="wednesday">Wednesday</option>
                      <option value="thursday">Thursday</option>
                      <option value="friday">Friday</option>
                    </select>
                  </div>

                  <div>
                    <p className="form__label">Starting Time*</p>
                    <input
                      type="time"
                      name="startingTime"
                      value={item.startingTime}
                      className="form__input"
                      onChange={e=>handleTimeSlotsChange(e,index)}

                    />
                  </div>

                  <div>
                    <p className="form__label">Ending Time*</p>
                    <input
                      type="time"
                      name="endingTime"
                      value={item.endingTime}
                      className="form__input"
                      onChange={e=>handleTimeSlotsChange(e,index)}

                    />
                  </div>

                  <div className="flex items-center ">
                    <button onClick={e=>deleteTimeSlots(e,index)} className=" bg-red-600 rounded-full p-2 mt-6 text-white  text-[18px] cursor-pointer">
                      <AiOutlineDelete />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button onClick={addTimeSlots} className=" bg-[#238438] py-2 px-5 text-white  font-bold rounded h-fit cursor-pointer">
            Add TimeSlot
          </button>
        </div>

        <div className="mb-5">
          <p className="form__label">About*</p>
          <textarea
            name="about"
            rows={5}
            value={formData.about}
            placeholder="Write about you"
            onChange={handleInputChange}
            className="form__input"
          ></textarea>
        </div>

        <div className="mb-5">
        {(formData.photo && (
                  <figure
                    className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor
flex items-center justify-center"
                  >
                    <img
                      src={formData.photo}
                      alt=""
                      className="w-full h-full rounded-full"
                    />
                  </figure>
                )) }
                <div className="relative w-[130px]  h-[50px] ">
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    onChange={handleFileInputChange}
                    accept=".jpg, .png"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />

                  <label
                    htmlFor="customFile"
                    className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.
375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor
font-semibold rounded-lg truncate cursor-pointer"
                  >
                   {loading?<HashLoader size={35} color="white" />: "Upload Photo"}
                  </label>
                </div>
        </div>

        <div className="mt-7">
          <button type="submit"  className="bg-primaryColor text-white text-[18px] leading-[30px] w-full px-4 py-3 rounded-lg"> {loading?<HashLoader size={35} color="white" />: "Update Profile"}</button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
