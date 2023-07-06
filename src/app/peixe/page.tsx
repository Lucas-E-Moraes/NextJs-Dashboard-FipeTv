'use client'
import jurupoca from '@/assets/Blob.png'
import piraputanga from '@/assets/Blob(1).png'
import cachara from '@/assets/Blob(2).png'
import jau from '@/assets/Blob(3).png'
import pintado from '@/assets/Blob(4).png'
import todos from '@/assets/Blob(5).png'
import React from 'react'
import Container from '@/components/Container'
import FishBox from '@/components/FishBox'
import { Jost } from 'next/font/google'
import PeixeBox from '@/components/PeixeBox'
import OnOff from '@/components/OnOff'

const jostLight = Jost({ subsets: ['latin'], weight: ['300'] })

type Props = {}

export default function page({}: Props) {
  
  console.log(pintado.blurDataURL)
  return (
    <Container>
      <div className='w-full flex flex-rap'>
        <FishBox fishName='Jurupoca' fishImage={jurupoca}/>
        <FishBox fishName='Piraputanga' fishImage={piraputanga}/>
        <FishBox fishName='Cachara' fishImage={cachara}/>
      </div>
      <div className='w-full flex flex-rap'>
        <FishBox fishName='Jaú' fishImage={jau}/>
        <FishBox fishName='Pintado' fishImage={pintado}/>
        <FishBox fishName='Todos os Peixes' fishImage={todos}/>
      </div>
      
      <div className='m-5 flex flex-col items-center'>
        <PeixeBox />
        <OnOff dir='start' name='horas' id='on' />
        <OnOff dir='start' name='horas' id='off' />
      </div>
    </Container>
  )
}