import React from 'react'
import { services } from '../assets/data/services'
import ServiceCard from '../components/service/ServiceCard'
import Servicecard from '../components/cards/Servicecard'
import debate from "../assets/images/debate.jpg";
import home2 from "../assets/images/home2.jpg";
import exoertTalk from "../assets/images/expertTalk.jpg";


const text = [
  "Embark on intellectual journeys and sharpen your argumentative prowess with our Debate Services.Join a vibrant community of debaters committed to exploring diverse viewpoints and honing their rhetorical skills.", 
  "Facilitate collaboration, deepen understanding, and cultivate consensus with our Group Discussion Services. Explore complex issues, share insights, and forge connections with like-minded individuals.",
  "Gain  insights from industry leaders, subject matter experts, and thought leaders with our Expert Talk Services.  Expand your horizons with curated talks and discussions by experts in their fields.",
];

const Service = () => {
  return (
    <section className="hero__section sm:pb-[60px]  pt-10 pb-8  md:pt-[60px]  ">
    <div className="container max-w-full">
      <div className="x1:w-[470px] mx-auto">
        <h2 className="heading text-center">Our Services</h2>
        <p className="text__para mt-0 text-center font-semibold">
          Choose the best one to grow your personality
        </p>
      </div>
      <div
        className="sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[20px]
              lg:mt-[20px]"
      >
        <Servicecard about={text[0]} params={'debate'} title={"Debate"} photo={debate} />
        <Servicecard
          about={text[1]}
          params={'gd'}
          title={"Group Discussion"}
          photo={home2}
        />
        <Servicecard
        params={'et'}
          about={text[2]}
          title={"Expert Talk"}
          photo={exoertTalk}
        />
      </div>
    </div>
  </section>
  )
}

export default Service