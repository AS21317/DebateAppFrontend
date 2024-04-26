import React from 'react'

const ReviewCard = () => {
  return (
    <div class="flex flex-col gap-3 mt-14">
    <div class="flex flex-col gap-4 bg-green-100 p-4">
        <div class="flex justify justify-between">
            <div class="flex gap-2">
                <div class="w-7 h-7 text-center font-bold rounded-full bg-red-500">J</div>
                <span className='font-semibold '>Jess Hopkins</span>
            </div>

            {/* Later you can use these stars for show ratings */}
            {/* <div class="flex p-1 gap-1 text-orange-300">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star-half"></ion-icon>
            </div> */}
        </div>

        <div>
            Gorgeous design! Even more responsive than the previous version. A pleasure to use!
        </div>

        <div class="flex justify-between">
            <span className='font-semibold'>Feb 13, 2021</span>
           
        </div>
    </div>
    </div>
  )
}

export default ReviewCard