import React from 'react'

import 'grapesjs-preset-webpage';

// import Navbar from './Navbar'
// import Banner from './Banner'

const BuilderMain = () => {

  return (
    <div className='BuilderMain w-full bg-zinc-200'>
        <GrapesjsReact
    id='grapesjs-react'
    plugins={[
      'gjs-preset-webpage',
      'gjs-blocks-basic'
    ]}
    />
        
    </div>
  )
}


export default BuilderMain