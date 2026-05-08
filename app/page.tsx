import { Geist } from 'next/font/google' 
import RealtimeClock from './components/RealtimeClock'

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
          <div className='flex space-x-20'>
            <p>Capstone Project</p>
            <p>©Bumigora University</p>
          </div>
          <ul>
            <li>Index</li>
            <li className='text-neutral-400'>About</li>
            <li className='text-neutral-400'>Related</li>
          </ul>
          <RealtimeClock/>
        </div>
      </div>
      {/*<hr className='border-black/30 border'/>*/}
      <div className={geistSemibold.className}>
        <div className='flex justify-center items-center text-center min-h-screen text-8xl'>
          <p>Capstone Project</p>
        </div>
      </div>

      <div className={geistMedium.className}>
        <div className='text-7xl'>
          <p>We are Computer Science students from Bumigora University, building our Capstone Project with a vision to create something impactful. I lead the project, combining Full-Stack Development and DevOps expertise to bring the idea to life.</p>
          <p>--- ..- .-. ....... .--. .-. --- ..-. . ... ... --- .-. ... ....... -. . ...- . .-. ....... - .- ..- --. .... - ....... ..- ... ....... .- -... --- ..- - ....... ..-. ..- .-.. .-.. -....- ... - .- -.-. -.- ....... .- -. -.. ....... -.. . ...- --- .--. ... --..-- ....... ... --- ....... .-- . ....... .... .- -.. ....... - --- ....... - . .- -.-. .... ....... --- ..- .-. ... . .-.. ...- . ... .-.-.- ....... -... ..- - ....... -.-- . .- .... .-.-.- .-.-.- .-.-.- ....... .-.. . - ... ....... -.- . . .--. ....... - .... .- - ....... .- ....... ... . -.-. .-. . - .-.-.- .-.-.- .-.-.-</p>
        </div>
      </div>
    </main>
  );
}
