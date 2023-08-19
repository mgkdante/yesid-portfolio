import React from 'react'
import { styles } from '../styles'

const Hero = () => {
  return (
    <section className=' w-full h-screen relative mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex fex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#e77917]' />
          <div className='w-1 sm:h-80 h-40 orange-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi! I'm <span className='text-[#e77917]'>Yesid</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a <span className='text-[#e77917]'>Frontend Developer</span> based in Quebec, I love to create beautiful and functional websites.

          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
