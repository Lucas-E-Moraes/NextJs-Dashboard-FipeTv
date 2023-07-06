import React from 'react'
import { Jost } from 'next/font/google'

const jostLight = Jost({ subsets: ['latin'], weight: ['300'] })
const jostBold = Jost({ subsets: ['latin'], weight: ['600'] })

type Props = {
  text1 : string,
  text2 : string
}

const LowerBox = (props: Props) => {
  return (
    <div className='my-5 py-1 pl-1 pr-5 bg-gradient-to-r from-green-800 to-sky-800 flex'>
        <div className='bg-white basis-full p-5'>
          <div className='flex flex-wrap w-full text-black'>
            <p className={`${jostBold.className} leading-none basis-1/2 text-lg text-left`}>{props.text1}</p>
            <p className={`${jostLight.className} leading-none basis-1/2 text-lg text-right`}>{props.text2}</p>
          </div>
        </div>
    </div>
  )
}

export default LowerBox