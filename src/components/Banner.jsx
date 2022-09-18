import React from 'react'
import '../App.css'

const Banner = () => {
  return (
    <div className='Banner'>
<main className="bg-[#fdf5df] relative overflow-hidden h-screen">
    <div className="flex relative z-20 items-center">
        <div className="container mx-auto px-6 flex flex-col justify-between items-center relative py-8">
            <div className="z-20 flex flex-col">
                <h1 className="font-semibold w-full uppercase text-center text-4xl sm:text-5xl text-[#5ebec4]">
                    OnePage, the last Page you need. 
                </h1>
                <h2 className="font-light max-w-2xl mx-auto w-full text-xl text-gray-500 text-center py-8">
                    A super simple page builder, designed and developed so that You can create stuning CVs, Resumes or Portfolios witout any technical knowledge! 
                </h2>
                <div className="flex items-center justify-center mt-4 mb-10">
                    <a className="uppercase m-2 py-2 px-4 bg-transparent shadow-md rounded-2xl border-2 border-[#f92c85] text-[#5ebec4]  text-md">
                       Get Started
                    </a>
                    <a className="uppercase m-2 py-2 px-4 bg-transparent shadow-md rounded-2xl border-2 border-[#f92c85] text-[#5ebec4] text-md">
                        Learn More
                    </a>
                </div>
                <h5 className="font-semibold w-full uppercase text-center text-sm text-[#f92c85] animate-pulse">
                    Scroll down
                </h5>
            </div>
            {/* <div className="block w-full mx-auto mt-6 md:mt-0 relative">
             
            </div> */}
            <div className='z-10 w-full flex flex-row justify-between absolute top-0 items-start'>
            <div class="blob-one w-60 h-60"></div>
            <div class="blob-two w-52 h-52 mt-40"></div>
            </div>
        </div>
    </div>
</main>


    </div>
  )
}

export default Banner