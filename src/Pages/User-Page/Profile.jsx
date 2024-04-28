import React, { useState ,useEffect, useContext} from "react";
import avatar from "../../assets/images/doctor-img01.png";
import {  useNavigate } from "react-router-dom";
import { token } from "../../config.js";  //TODO ----> Find out why using it is causing error 
import { toast } from "react-toastify";
import { AiOutlineDelete } from "react-icons/ai";

import HashLoader from 'react-spinners/HashLoader'
import UploadImageToCloudinary from "../../utils/uploadCloudinary.js";
import { authContext } from "../../context/AuthContext.jsx";
import { Dice1, SendToBack } from "lucide-react";
import { HashLoader as Loader } from 'react-spinners'

const Profile = ({user ,disable=false}) => {
  const {token,dispatch}  = useContext(authContext)
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    age:"",
    email: "",
    password:'',
    phone: "",
    bio: "",
    gender: "",
    
  
    about: "",
    photo:null,
    qualifications: [
      
    ],
    experiences: [
      
    ],
    timeSlots: [],
    areaOfIntrests:[]
  });


  useEffect(()=>{
    setFormData({
      name:user?.name,
      email: user?.email,
      age:user?.age,
    
      phone:user?.phone,
      bio:user?.bio,
      gender:user?.gender,
      specialization:user?.specialization,
      ticketPrice: user?.ticketPrice,
      about:user?.about,
      photo:user?.photo,
      qualifications:user?.qualifications,
      experiences: user?.experiences,
      timeSlots: user?.timeSlots,
      areaOfIntrests:user?.areaOfIntrests
    })
  },[user])



  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange=async(e)=>{
    const file = e.target.files[0]

    const data = await UploadImageToCloudinary(file)
    console.log("uploaded file is : ",data) 
    setFormData({...formData,photo:data?.url})

  }


  const updateProfileHandler =  async(e)=>{
    e.preventDefault()
    setLoading(true)
    console.log("called here updation ")
    try {
      const res= await fetch(`http://192.168.1.11:5000/api/v1/user/update/${user._id}`,{
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

      dispatch({
        type:"LOGIN_SUCCESS",
        payload:{
          user:result.data,
        }
      });
     
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
    addItem("qualifications", { startingDate: "", endingDate: "", degree: "", university: "" })
    
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
     // fxn handeling area of interest 
     const addAreaOfIntrests = (e)=>{
      e.preventDefault();
      addItem("areaOfIntrests", {  hospital: "" })
      
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
    <div className=" mt-10">
         <div>
      <h2 className=" text-headingColor font-bold text-[24px] leading-9 mb-10  ">
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
          <p className="form__label ">Phone*</p>
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
          <div className="grid grid-cols-2 gap-5 mb-[30px]">
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

            

          
            <div className="form__label mb-0">
              <p className="pb-1">Age*</p>
              <input
              
                type="number"
                placeholder="Enter your Age"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                className="form__input py-3.5"
              />
            </div>
          </div>
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
          <p className="form__label">Qualifications*</p>
          {formData.qualifications?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="form__label">Starting Year*</p>
                    <input
                      type="number"
                      name="startingDate"
                      value={item.startingDate}
                      className="form__input"
                      onChange={e=>handleQualificationChange(e,index)}
                    />
                  </div>

                  <div>
                    <p className="form__label">Ending Year*</p>
                    <input
                      type="number"
                      name="endingDate"
                      value={item.endingDate}
                      className="form__input"
                      onChange={e=>handleQualificationChange(e,index)}

                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5 mt-5">
                  <div>

                    <p className="form__label"> Degree*/Class*</p>
                    <input
                    placeholder="Enter class or degree name"
                      type="text"
                      name="degree"
                      value={item.degree}
                      className="form__input"
                      onChange={e=>handleQualificationChange(e,index)}

                    />
                  </div>

                  <div>
                    <p className="form__label">University*/School</p>
                    <input
                    placeholder="Enter Your School or College Name"
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
                    <p className="form__label">Description*</p>
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


{/* Later deal with the area of interest  */}
        {/* <div className="mb-5">
          <p className="form__label">Interested Area*</p>
          {formData.areaOfIntrests?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="form__label">Fields You are Intrested in*</p>
                    <input
                      type="text"
                      name="areaOfIntrests"
                      value={item}
                      className="form__input"
                      onChange={e=>handleAreaOfIntrestChange(e,index)}
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
            Add Area Of Intrests
          </button>
        </div> */}
        

       

      

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
                    Upload Photo
                  </label>
                </div>
        </div>

        <div className="mt-7">
          <button type="submit" disabled={loading} className="bg-primaryColor text-white text-[18px] leading-[30px] w-full px-4 py-3 rounded-lg">
            {loading? <Loader color="white" size={30} />: "Update Profile"}
          </button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Profile