import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import UploadImageToCloudinary from "../../utils/uploadCloudinary";
import SelectWithSearch from "./SelectWithSearch";
import ReviewCard from "./ReviewCard";
import SelectHostCard from "./SelectHostCard";
import SearchingCard from "./SearchingCard";
import useFetchData from "../../hooks/useFetchData";
import { HashLoader } from "react-spinners";
import { CgProfile } from "react-icons/cg";
import { authContext } from "../../context/AuthContext";
import ShortExpertCard from "./ShortExpertCard";

const prepareSelectData = (datas=[], getLabel=()=>"") => {
  return datas.map((data) => {
    if(data.photo){
      return {
        value: data._id,
        photo: data.photo,
        label: getLabel(data),
      }
    }

    return {
      value: data._id,
      label: getLabel(data),
    }
  })
}

const getTopicLabel = (topicData) => {
  return topicData.name
}

const getHostLabel = (hostData) => {
  return <div className="flex flex-row gap-4">
    <div className="flex items-center"> 
    <img src={hostData.user.photo} alt={"hostPic"} className="rounded-full" width={35} height={35} />
    </div>
    
    <div className="flex flex-col justify-between w-[95%]">
      <p>{hostData.user.name}</p>
      <p>{hostData.user.email}</p>

      <div className="flex flex-wrap gap-1">
        {hostData.expertise.map((interest) => {
          return (
            <span class="mt-1 bg-lime-300 w-fit font-bold text-slate-900 py-1 px-2 rounded-[50px]">
              {interest}
            </span>
          );
        })}
      </div>
    </div>

    <button>
      <CgProfile size={25}/>
    </button>
  </div>
}

const getExpertLabel = (expertData) => {
  return <ShortExpertCard expertData={expertData} />;
}


const CreateEventCard = () => {

  const{token}= useContext(authContext) 

// fetching all topics and host and experts 
  const {loading: topicLoading, data: topicsData} = useFetchData(`${import.meta.env.VITE_BASE_URL}/api/v1/topic/getAll`)
  const {loading: hostLoading, data: hostsData} = useFetchData(`${import.meta.env.VITE_BASE_URL}/api/v1/host/getAll`)
  const {loading: expertLoading, data: expertsData} = useFetchData(`${import.meta.env.VITE_BASE_URL}/api/v1/expert/get`)

  console.log("fetched all expert data :",expertsData)

  const selectTopicsData = prepareSelectData(topicsData, getTopicLabel)
  const selectHostsData = prepareSelectData(hostsData, getHostLabel)
  const selectExpertsData = prepareSelectData(expertsData, getExpertLabel)


  console.log(topicsData, selectTopicsData)
  console.log(hostsData, selectHostsData)
  console.log(expertsData, selectExpertsData)


  // To handle modal openning and closing

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

  const defaultFormData = {
    topic: "",
    endDate: "",
    startDate:"",
   
    host: "",
    coHost:"",
    startTime:"",
    endTime:"",
    description: "",
    maxAttendees: 0,
    type: "",
    expert: "",
    photo: null,
  }
  const [formData, setFormData] = useState(defaultFormData);


  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  

  const handleCoHostSelect = (selectedOption) => {
    setFormData({ ...formData, coHost: selectedOption.value });
  }

  const handleExpertSelect = (selectedOption) => {
    setFormData({ ...formData, expert: selectedOption.value });
  }

  const handleHostSelect = (selectedOption) => {
    setFormData({ ...formData, host: selectedOption.value });
  };

  const handleTopicSelect = (selectedOption) => {
    setFormData({ ...formData, topic: selectedOption.value, photo: selectedOption.photo });
  }

  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];

    const data = await UploadImageToCloudinary(file);
    console.log("uploaded file is : ", data);
    setFormData({ ...formData, photo: data?.url });
  };



  const createEventHandler = async (e) => {
    e.preventDefault();
    if(formData.host === formData.coHost)
      {
        window.alert("Host and cohost can not me same ")
      }
    console.log("Form data is : ", formData);
        try {
          // Replace the API endpoint with your event creation endpoint
          const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/events/create`, {
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
          setFormData(defaultFormData)
        } catch (err) {
          toast.error(err.message);
        }
  };

  return (
    <>
      <h2 className="text-headingColor text-center font-bold text-[24px] leading-9 mb-10">
        Create A new Event
      </h2>

      <div className="grid px-6 grid-cols-1  mx-auto sm:grid-cols-2 gap-8">
        <div>
          <form onSubmit={createEventHandler}>
            <div className="mb-5">
              <p className="form__label">Name*</p>
              {topicLoading && <HashLoader />}
              {!topicLoading && <SearchingCard type={"topic"} onHostSelect={handleTopicSelect} data={selectTopicsData} />}
            </div>
            <div className="mb-5">
              <p className="form__label">Event Type*</p>
              <select
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                className="form__input"
              >
                <option value="">Select Event Type</option>
                <option value="Debate">Debate</option>
                <option value="GD">Group Discussion</option>
                <option value="ExpertTalk">Expert Talk</option>
              </select>
            </div>

            <p className="form__label">Assigned Host*</p>
              {hostLoading && <HashLoader />}
              {!hostLoading && <SearchingCard type={"host"} onHostSelect={handleHostSelect} data={selectHostsData} />}
            
            <p className="form__label mt-5">Assigned CoHost*</p>
              {hostLoading && <HashLoader />}
              {!hostLoading && <SearchingCard type={"coHost"} onHostSelect={handleCoHostSelect} data={selectHostsData} />}

            {formData.type === "ExpertTalk" && <>
              <p className="form__label mt-5">Assigned Expert*</p>
              {expertLoading && <HashLoader />}
              {!expertLoading && <SearchingCard type={"expert"} onHostSelect={handleExpertSelect} data={selectExpertsData} />}
            </>}

            {/* Add more fields for event details */}
            {/* Date */}
            {/* Time */}
            {/* Assigned Host */}
            {/* Description */}
            {/* Seats Available */}

            

            <div className=" flex flex-col items-center max-w-[300px]  mb-5 mt-10">
            {formData.photo && (
              <figure className="w-[300px] h-[240px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                <img
                  src={formData.photo}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </figure>
            )}
            <div className=" max-w-[200px]  ">
              <input
                type="file"
                name="photo"
                id="customFile"
                onChange={handleFileInputChange}
                accept=".jpg, .png"
                className="  opacity-0 cursor-pointer"
              />

              <label
                htmlFor="customFile"
                className="  w-full h-full flex justify-center px-[0.75rem] py-[0.575rem] text-[18px] leading-6  text-center overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
              >
                Upload New Photo
              </label>
            </div>
          </div>
          {/* Buttons */}
          <div className="mt-6">
              <button 
              onClick={createEventHandler}
                type="submit"
                className="bg-primaryColor text-white text-[18px] leading-[30px] w-full px-4 py-3 rounded-lg"
              >
                Create Event
              </button>
            </div>
          </form>
        </div>

        {/* Right Column */}
        <div>
          <div className="mb-5">
            <p className="form__label">Start Date*</p>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              className="form__input"
            />
          </div>

          <div className="mb-5">
            <p className="form__label">End Date*</p>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
              className="form__input"
            />
          </div>

          <div className="mb-5">
            <p className="form__label">Start Time*</p>
            <input
              type="time"
              name="startTime"
              value={formData.startTime}
              onChange={handleInputChange}
              className="form__input"
            />
          </div>

          <div className="mb-5">
            <p className="form__label">End Time*</p>
            <input
              type="time"
              name="endTime"
              value={formData.endTime}
              onChange={handleInputChange}
              className="form__input"
            />
          </div>


          <div className="mb-5">
            <p className="form__label">Description*</p>
            <textarea
              name="description"
              rows={2}
              value={formData.description}
              placeholder="Description"
              onChange={handleInputChange}
              className="form__input"
            ></textarea>
          </div>

          <div className="mb-5">
            <p className="form__label">Seats Available*</p>
            <input
              type="number"
              name="maxAttendees"
              value={formData.maxAttendees}
              onChange={handleInputChange}
              placeholder="Seats Available"
              className="form__input"
            />
          </div>

         
        </div>
      </div>
    </>
  );
};

export default CreateEventCard;
