import React from 'react'
import SidebarComponent from './AdminSidebarPannel'
import CreateEventCard from '../../components/cards/CreateEventCard'

const CreateEvent = () => {
  return (
    <div className="flex  ">
      {/* Sidebar */}
      <div className="w-auto">
        <SidebarComponent/>
      </div>

      <section className='flex-grow' >
        <CreateEventCard/>
      </section>
    </div>
  )
}

export default CreateEvent