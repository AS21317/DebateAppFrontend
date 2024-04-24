import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext } from "react";
import { authContext } from "../../context/AuthContext";
import { HashLoader } from "react-spinners";

const FeedbackForm = ({setShowFeedbackForm}) => {
  const {token} = useContext(authContext)
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState(0);
  const [loading,setLoading] = useState(false)
  const {id} = useParams()

  const handleSubmitReview =async (e)=>{
      e.preventDefault();
      setLoading(true)
      try {
        if(!rating || !reviewText)
        {
          setLoading(false)
        return  toast.error("Rating and Review Fields are required !!")
        }
        
        const res = await fetch(`https://medical-booking-backend.vercel.app/api/v1/review/doctor/${id}/reviews`,{
          method:'POST',
          headers:{
            "Content-Type":"application/json",
            Authorization:`Bearer ${token}`
          },
          body: JSON.stringify({rating,reviewText})
        })

        const result  = await res.json();

        if(!res.ok)
        {
          throw new Error(result.message)
        }

        setLoading(false);
        toast.success(result.message);
        setShowFeedbackForm(false)

      } catch (err) {
        setLoading(false)
        toast.error(err.message)
        console.log("Error while submitting Review")
        
      }    
  }


  return (
    <form action="">
      <div>
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0 ">
          How would you rate the overall experience ?
        </h3>
        <div>
          {[...Array(5).keys()].map((_, index) => {
            index += 1;
            return (
              <button
                key={index}
                type="button"
                className={`${
                  index <= ((rating && hover) || hover)
                    ? "text-yellowColor"
                    : "text-gray-400"
                } bg-transparent border-none outline-none text-[22px] cursor-pointer `}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouselLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
              >
                <span>
                  <AiFillStar />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-[30px]">
<h3 className=" text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0 ">
Share your feedback or suggestions
</h3>
<textarea
className="border border-solid Oborder-[#0066ff34] focus:outline Moutline-primaryColor w-full px-0
py-3 rounded-md"
rows="5"
placeholder="Write your message"
onChange={e => setReviewText(e.target.value)}
></textarea>
</div>
 <button type="Submit" className="btn"  onClick={handleSubmitReview}>{loading?<HashLoader size={25} color="#fff" /> :"Send Feedback"}</button>


    </form>
  );
};

export default FeedbackForm;
