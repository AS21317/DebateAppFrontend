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

const prepareSelectData = (datas=[], getLabel=()=>"") => {

  
  return datas.map((data) => {
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


const CreateEventCard = () => {

  const{token}= useContext(authContext) 


  const {loading: topicLoading, data: topicsData} = useFetchData('${import.meta.env.VITE_BASE_URL}/api/v1/topic/getAll')
  const {loading: hostLoading, data: hostsData} = useFetchData('${import.meta.env.VITE_BASE_URL}/api/v1/host/getAll')
  const [eventLoading, setEventLoading] = useState(false);

  const selectTopicsData = prepareSelectData(topicsData, getTopicLabel)
  const selectHostsData = prepareSelectData(hostsData, getHostLabel)

  console.log(topicsData, selectTopicsData)
  console.log(hostsData, selectHostsData)


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

  const [formData, setFormData] = useState({
    topic: "",
    endDate: "",
    startDate:"",
   
    hostId: "",
    startTime:"",
    endTime:"",
    description: "",
    maxAttendees: 0,
    type: "",
    
    photo: null,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleHostSelect = (selectedOption) => {
    setFormData({ ...formData, hostId: selectedOption.value });
  };

  const handleTopicSelect = (selectedOption) => {
    setFormData({ ...formData, topic: selectedOption.value });
  }

  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];

    const data = await UploadImageToCloudinary(file);
    console.log("uploaded file is : ", data);
    setFormData({ ...formData, photo: data?.url });
  };

  console.log("Form data is : ", formData);

  const createEventHandler = async (e) => {
    e.preventDefault();
        try {
          // Replace the API endpoint with your event creation endpoint
          const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/events/create/${formData.hostId}`, {
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
          setFormData("")
        } catch (err) {
          toast.error(err.message);
        }
  };

  return (
    <>
      <h2 className="text-headingColor text-center font-bold text-[24px] leading-9 mb-10">
        Create A new Event
      </h2>

      <div className="grid px-6 grid-cols-2 gap-8">
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
                <option value="debate">Debate</option>
                <option value="groupDiscussion">Group Discussion</option>
                <option value="expertTalk">Expert Talk</option>
              </select>
            </div>

            <p className="form__label">Assigned Host*</p>
            <p className="form__label">Name*</p>
              {hostLoading && <HashLoader />}
              {!hostLoading && <SearchingCard type={"host"} onHostSelect={handleHostSelect} data={selectHostsData} />}

            {/* Add more fields for event details */}
            {/* Date */}
            {/* Time */}
            {/* Assigned Host */}
            {/* Description */}
            {/* Seats Available */}

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

          <div className="mb-5">
            {formData.photo && (
              <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                <img
                  src={formData.photo}
                  alt=""
                  className="w-full h-full rounded-full"
                />
              </figure>
            )}
            <div className="relative w-[130px] h-[50px] ">
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
                className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
              >
                Upload Photo
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateEventCard;
