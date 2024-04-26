import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { toast } from "react-toastify";


const Contact = () => {


  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
  message:"",
  firstName:"",
  lastName:""
  });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };
   

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    console.log("Calling submit handler ")
    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/contact/createMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
         
        },
        body: JSON.stringify(formData),
      });

      

      console.log("Yha aa gya 01");

      const { message } = await res.json();
      if (!res.ok) {
        throw new Error(message);
      }

      // if res found , 1. show a toast notification , 2. setLoading false
      console.log("navigating now  ")
      setLoading(false);
      toast.success(message);
      navigate('/');
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md ">
        <h2 className="heading text-center">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__para">
          Got a technical issue? Want to send feedback about a beta feature? Let
          us know.
        </p>
        <form onSubmit={submitHandler} className="space-y-8">
        <div className="flex gap-5 justify-between">
        <div>
            <label htmlFor="email" className="form__label">
            First Name
            </label>
            <input
              type="test"
              id="email"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First Name"
              className="form__input mt-1"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="form__label">
              Last Name
            </label>
            <input
              type="text"
              id="email"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last Name"
              className="form__input mt-1"
              required
            />
          </div>
        </div>
          <div>
            <label htmlFor="email" className="form__label">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="example@gmail.com"
              className="form__input mt-1"
              required
            />
          </div>

          <div>
            <label htmlFor="subject" className="form__label">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Let us know how we can help you"
              className="form__input mt-1"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="form__label">
              Your Message
            </label>
            <textarea
            rows={'6'}
              type="text"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Leave a Comment....?"
              className="form__input mt-1"
            />
          </div>


          <button type="submit" className="btn rounded sm:w-fit">
   {loading?<HashLoader size={25} color="white"/>:"Submit"}
</button> 
        </form>
      </div>
    </section>
  );
};

export default Contact;
