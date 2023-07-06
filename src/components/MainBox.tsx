import React from 'react'
import Image from 'next/image'
import LogoFipe from '@/assets/LogoFIPe.png'
import { Jost } from 'next/font/google'

const jost = Jost({ subsets: ['latin'], weight: ['300'] })

type Props = {
    text1 : string,
    text2 : string
}

const MainBox = (props: Props) => {
  return (
    <div className='my-5 bg-gradient-to-r from-green-800 to-sky-800 flex'>
        <div className='py-2 px-1 inline-block'>
            <Image 
                src={LogoFipe}
                width={50}
                height={50}
                alt='Logo FIPe'
            />
        </div>
        <div className='bg-black mb-2 basis-11/12 py-2 px-8'>
            <p className='leading-none'>{props.text1.toUpperCase()}</p>
            <p className={`${jost.className} text-xs`}>{props.text2}</p>
        </div>
    </div>
  )
}

export default MainBox