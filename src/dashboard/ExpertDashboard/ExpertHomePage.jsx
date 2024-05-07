import React from 'react'
import ExpertSidePannel from './ExpertSidepannel'

const ExpertHomePage = () => {
    return (
        <>
           <div className="flex flex-grow ">
    {/* Sidebar */}
    <div className="w-auto">
      <ExpertSidePannel />
    </div>

    <h1 className="mx-auto font-bold text-[24px]  ">Welcome Expert Home page</h1>
  </div>
        
    
     </>
    )
}

export default ExpertHomePage