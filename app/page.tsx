'use client'
import Link from 'next/link'
import { Geist } from 'next/font/google'
import CurvedLoop from '../components/CurvedLoop'
import RealtimeClock from './components/RealtimeClock'

import { Meteors } from "@/components/ui/meteors"
import AnimatedContent from '@/components/AnimatedContent'

const geistNormal = Geist({
  subsets: ['latin'],
  weight: '400'
})

const geistMedium = Geist({
  subsets: ['latin'],
  weight: '500'
})

const geistSemibold = Geist({
  subsets: ['latin'],
  weight: '600'
})

export default function Home() {
  return (
    <main>
      <div className={geistNormal.className}>
        <div className='m-4 top-0 flex justify-between text-lg'>
          <div className='flex space-x-20 h-fit'>
            <p>Capstone Project</p>
            <Link href={'https://ubg.ac.id/'} target='_blank'>©Bumigora University</Link>
            {/*<p>©Bumigora University</p>*/}
          </div>
          <ul className='*:w-fit'>
            <li className='duration-300 hover:bg-black hover:text-white cursor-pointer'>Index</li>
            <li className='text-neutral-300 duration-300 hover:bg-black hover:text-white cursor-pointer'>About</li>
            <li className='text-neutral-300 duration-400 hover:bg-black hover:text-white cursor-pointer'>Related</li>
          </ul>
          <RealtimeClock/>
        </div>
      </div>
      {/*<hr className='border-black/30 border'/>*/}
      <div className={geistSemibold.className}>
        <div className='relative'>
          <Meteors className='translate-y-10'/>
        </div>
        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={false}
          duration={0.8}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0}
        >
          <div className='flex justify-center items-center min-h-[540px] text-8xl'>Capstone Project</div>
        </AnimatedContent>
        <CurvedLoop
          marqueeText='Capstone Project'
          speed={1.3}
          curveAmount={0}
          direction='right'
          interactive={false}
        />
      </div>

      <div className={geistMedium.className}>
        <div className='text-7xl'>
          <p>We are Computer Science students at Bumigora University currently working on a Mobile Computing A.K.A Capstone Project to create something useful. I am leading this project, which combines expertise in full-stack development and DevOps to bring this idea to life.</p>
          <p></p>
        </div>
      </div>
      <div>
        <p>testing</p>
      </div>
    </main>
  );
}
