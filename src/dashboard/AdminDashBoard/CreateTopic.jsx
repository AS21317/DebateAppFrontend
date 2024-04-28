import React from 'react'
import SidebarComponent from './AdminSidebarPannel'
import CreateEventCard from '../../components/cards/CreateEventCard'
import CreateTopicCard from '../../components/cards/CreateTopicCard'

const CreateTopic = () => {
  return (
    <div className="flex  ">
      {/* Sidebar */}
      <div className="w-auto">
        <SidebarComponent/>
      </div>

      <section className='flex-grow' >
        <CreateTopicCard/>
      </section>
    </div>
  )
}

export default CreateTopic