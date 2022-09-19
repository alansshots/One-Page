import React from 'react'

import ComponentsSidebar from '../components/ComponentsSidebar'
import BuilderMain from '../components/BuilderMain'
const PageBuilder = () => {
  return (
    <div className='PageBuilder'>
      <div className="flex flex-col sm:flex-row">
        <ComponentsSidebar/>
        <BuilderMain/>
      </div>  
    </div>
  )
}

export default PageBuilder