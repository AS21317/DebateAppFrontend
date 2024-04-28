import React from 'react'

const QuestionsCard = ({ question, answer }) => {
  return (
    <div class="flex flex-col gap-3 mt-14">
    <div class="flex flex-col gap-4 bg-green-100 p-4">
        <div class="flex justify justify-between">
            <div class="flex gap-2">
                <span className='font-semibold '>Jess Hopkins</span>
            </div>

           
        </div>

        <div className=' font-semibold text-[20px]'>
            {question}
        </div>

        <div class="flex justify-between font-normal">
           <p>{answer}</p>
        </div>
    </div>
    </div>
  )
}

export default QuestionsCard