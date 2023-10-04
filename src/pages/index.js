import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Banner_steps from '@/components/Banner_steps'
import Team from '@/components/Team'
import Service from '@/components/Service'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='main'>
      <Header/>
      <Banner/>
      <Team/>
      <Service/>
    </div>
  )
}
