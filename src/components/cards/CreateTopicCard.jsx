import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import UploadImageToCloudinary from "../../utils/uploadCloudinary";
import SelectWithSearch from "./SelectWithSearch";
import ReviewCard from "./ReviewCard";
import SelectHostCard from "./SelectHostCard";
import { authContext } from "../../context/AuthContext";



const CreateTopicCard = () => {
    const [loading,setLoading] = useState('false')
    const {token} = useContext(authContext)

    
  


  const [formData, setFormData] = useState({
    name: "",
   
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  

  console.log("Form data is : ",formData);




  const createTopicHandler = async (e) => {
    e.preventDefault();
    try {
      // Replace the API endpoint with your event creation endpoint
      const res = await fetch(`http://192.168.1.11:5000/api/v1/topic/create`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (!res.ok) {
        throw Error(result.message);
      }
      console.log("Result is : ", result);
      toast.success(result.message);
      setFormData({name:""})
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
  <>
 <h2 className="text-headingColor text-center font-bold text-[24px] leading-9 mb-10">
 Create A new Topic
        </h2>

    <div className="grid px-6 grid-cols-2 gap-8">
        
        <div>
         
          <form onSubmit={createTopicHandler}>
            <div className="mb-5">
              <p className="form__label">Topic Name*</p>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter Topic Name"
                className="form__input"
              />
            </div>
            <button type="submit" className="btn"> Create</button>
     
            
          </form>
        
         
  
         
  
          
          
        </div>
      </div>
  </>
  );
};

export default CreateTopicCard;
