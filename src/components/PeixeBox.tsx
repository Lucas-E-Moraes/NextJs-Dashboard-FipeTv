import React from 'react'
import { Jost } from 'next/font/google'

const jostLight = Jost({ subsets: ['latin'], weight: ['300'] })
const jostBold = Jost({ subsets: ['latin'], weight: ['600'] })

type Props = {}

const PeixeBox = (props: Props) => {
    return (<>
        <p className={`${jostLight.className} leading-none basis-1/2 text-center text-left`}>HORAS DE PROVA</p>
        <div className='w-1/2 my-3 py-1 pl-1 pr-5 bg-gradient-to-r from-green-800 to-sky-800 flex'>
            <div className='bg-white basis-full p-3'>
            <div className='flex flex-wrap w-full text-black'>
                <p className={`${jostBold.className} leading-none basis-1/2 text-sm text-left`}>HORAS DE PROVA</p>
                <p className={`${jostLight.className} leading-none basis-1/2 text-sm text-right`}>00:57:00</p>
            </div>
            </div>
        </div>
    </>)
}

export default PeixeBox