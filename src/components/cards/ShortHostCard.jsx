import React from 'react'
import { CgProfile } from 'react-icons/cg';

const ShortHostCard = ({hostData}) => {
    return <div className="flex bg-green-200  m-4  p-2 rounded-lg flex-row gap-4">
      <div className="flex   items-center"> 
      <img src={hostData.user.photo} alt={"hostPic"} className="rounded-full" width={55}  />
      </div>
      
      <div className="flex flex-col text-[16px] font-medium  justify-between w-[95%]">
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
  
      
    </div>
}

export default ShortHostCard