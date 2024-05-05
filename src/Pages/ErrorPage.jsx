import React from 'react'
import ErrorSVG from '/ErrorSVG.svg'

const ErrorPage = () => {
  return (
    <section className='p-0'>
        <div className="hero__section1 text-white">
            <div className="flex py-16">
                <div className="m-auto text-center">
                    <img src={ErrorSVG} alt="error" />

                    <p className="text-sm md:text-base font-bold text-[#2F2E41] p-2 mb-4">The stuff you were looking for doesn't exist
                    </p>
                    <a href="/home"
                        className="bg-transparent hover:bg-yellow-300 font-bold text-[#2F2E41] rounded shadow hover:shadow-lg py-2 px-4 border-2 border-[#2F2E41] hover:border-transparent">
                        Go To HomePage
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ErrorPage