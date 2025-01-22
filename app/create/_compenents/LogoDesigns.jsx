import React from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import LogoDesign from '@/app/_data/LogoDesign'
import Image from 'next/image'

function LogoDesigns() {
  return (
    <div className='my-10'>
      <HeadingDescription
      title={Lookup.LogoDesignTitle}
      description={Lookup.LogoDesignDesc}/>

      <div className='grid grid-cols-2 md:grid-cols-3 '>
        {LogoDesign.map((design, index)=> (
            <div key={index}>
                <Image src={design.image} alt={design.title} width={300} height={200}/>
            </div>
        ))}
      </div>
    </div>
  )
}

export default LogoDesigns
