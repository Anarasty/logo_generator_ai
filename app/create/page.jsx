import React from 'react'
import LogoTitle from './_compenents/LogoTitle'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'

function CreateLogo() {
  return (
    <div className='mt-28 p-10 border rounded-xl 2xl:mx-72'>
      <LogoTitle/>

      <div className='flex items-center justify-between'>
        <Button variant="outline"> <ArrowLeft/> Previous</Button>
        <Button> <ArrowRight/> Next</Button>
      </div>
    </div>
  )
}

export default CreateLogo
