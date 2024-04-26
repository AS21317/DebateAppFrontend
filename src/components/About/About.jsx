import React from 'react'
import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom'
import whydebate from '../../assets/images/whydebate.png'

const About = () => {
  return (
    <>
        
        <section>
<div className="container">
<div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">

<div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
<img src={whydebate} alt="" />
<div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%]
lg:right-[22%]">
{/* <img src={whydebate} alt="" /> */}
</div>
</div> 

<div className="w-full lg:w-1/2 xl:w-[670px]  mt-4 order-1 lg:order-2"> 
  <h2 className="heading">Why one should learn Debate</h2> 
  <p className="text__para font-semibold mt-8">Perhaps the most important skill debaters learn is the ability to think rigorously and critically.</p> 

  <ul className="list-disc text-[18px] list-inside mt-4 mb-4">
    <li>Enhances critical thinking skills</li>
    <li>Enhances your mental and emotional maturity </li>
    <li>Improves communication abilities</li>
    <li>Get a better research skill</li>
    <li>Fosters empathy and understanding</li>
    <li>Provides opportunities for personal growth and fulfillment</li>
  </ul>

  <Link to='/'><button className="btn">Learn More</button></Link> 
</div>



</div>
</div>
</section>

    </>
  )
}

export default About