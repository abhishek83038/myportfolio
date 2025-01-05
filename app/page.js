import HeroSection from '@/component/HeroSection/HeroSection'
import MyServices from '@/component/MyServices/MyServices'
import Resume from '@/component/resume/Resume'
import React from 'react'

const page = () => {
  return (
    <div>
    <HeroSection/>
    <MyServices/>
    <Resume/>
    </div>
  )
}

export default page