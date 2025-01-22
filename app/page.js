import HeroSection from '@/component/HeroSection/HeroSection'
import MyProject from '@/component/MyProject/MyProject'
import MyServices from '@/component/MyServices/MyServices'
import Resume from '@/component/resume/Resume'
import React from 'react'

const page = () => {
  return (
    <div>
    <HeroSection/>
    <MyServices/>
    <Resume/>
    <MyProject/>
    </div>
  )
}

export default page