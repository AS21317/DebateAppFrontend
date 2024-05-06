import React from 'react'
import ExpertSidePannel from './ExpertSidepannel'
import ExpertAccount from './ExpertAccount'

const ExpertDashboard = () => {
  return (
    <div className="flex flex-grow ">
    {/* Sidebar */}
    <div className="w-auto">
      <ExpertSidePannel />
    </div>
    <ExpertAccount />{" "}
  </div>
  )
}

export default ExpertDashboard