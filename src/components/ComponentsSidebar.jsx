import React from 'react'

const ComponentsSidebar = () => {

  return (
    <div className='ComponentsSidebar'>  
        <div className="relative bg-white">
            <div className="w-72 h-screen  border-r-2 border-black">
                <nav className="p-2">
                    <div>
                        <p className="text-gray-300 ml-2 w-full border-b-2 pb-2 border-gray-100 mb-4 text-md font-normal">
                            Header
                        </p>
                        <button className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start" href="#"
                        >
                            {/* <img src="" alt="" /> */}
                            kawp[dkp[wakd]]
                        </button>
                    </div>
                    <div>
                        <p className="text-gray-300 ml-2 w-full border-b-2 pb-2 border-gray-100 mb-4 text-md font-normal">
                            Content
                        </p>
                        <button className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start" href="#">
                            <img src="" alt="" />
                        </button>
                    </div>
                    <div>
                        <p className="text-gray-300 ml-2 w-full border-b-2 pb-2 border-gray-100 mb-4 text-md font-normal">
                            Footer
                        </p>
                        <button className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start" href="#">
                            <img src="" alt="" />
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default ComponentsSidebar