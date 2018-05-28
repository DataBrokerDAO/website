import React from 'react'
import ScaleLoader from 'react-spinners/dist/spinners/ScaleLoader'

function SectionLoader() {
  return (
    <div style={{
      textAlign: 'center',
      background: 'white',
      height: '500px'
    }}>
      <ScaleLoader color={'#E53368'}
                   size={100}/>
    </div>
  )
}

export default SectionLoader