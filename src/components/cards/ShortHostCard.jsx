import React from 'react'
import { CgProfile } from 'react-icons/cg';
import demoImg from '../../assets/images/faq1.jpg'

const ShortHostCard = ({hostData,expertise,role}) => {
    return <div className="flex bg-green-200  m-4  p-2 rounded-lg flex-row  gap-4">
      <div className="flex   items-center"> 
      <img src={hostData.user.photo ||demoImg } alt={"hostPic"} className="rounded-full" width={35}  />
      </div>
      
      <div className="flex flex-col  text-[16px] font-medium flex-wrap
       justify-between ">
        <p >{hostData.user.name} ( {role} )</p>
  
       {expertise && <div className="flex flex-wrap gap-1">
          {hostData.expertise.map((interest) => {
            return (
              <span class="mt-1 bg-lime-300 w-fit font-bold text-slate-900 py-1 px-2 rounded-[50px]">
                {interest}
              </span>
            );
          })}
        </div>}
      </div>
  
      
    </div>
}

export default ShortHostCard