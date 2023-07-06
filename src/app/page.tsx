'use client'
import React from 'react'
import { useState } from 'react'
import Container from '@/components/Container'
import InputPerson from '@/components/InputPerson'
import MainBox from '@/components/MainBox'
import ButtonPerson from '@/components/ButtonPerson'
import OnOff from '@/components/OnOff'

type Props = {}

export default function page({}: Props) {

    const [textSup, setTextSup] = useState("");
    const [textInf, setTextInf] = useState("");
    const placeholderTS = "Coloque aqui o texto da parte superior do Chyron"
    const placeholderTI = "Coloque aqui o texto da parte inferior do Chyron"

  return (
    <Container>

        <InputPerson 
            placeholderInput={placeholderTS}
            textLabel="texto superior"
            idInput="ts"
            setValue={setTextSup} />

        <InputPerson 
            placeholderInput={placeholderTI}
            textLabel="texto inferior"
            idInput="ti"
            setValue={setTextInf} />
        
        <MainBox text1={textSup} text2={textInf}/>
        <ButtonPerson text="Atualizar no OBS" color="green"/>

        <div className='flex flex-col w-full justify-center'>
            <h1 className='text-xl text-center'>PGM Status:</h1>
            <OnOff dir="center" name="pgm" id="on"/>
            <OnOff dir="center" name="pgm" id="off"/>
        </div>
    </Container>
  )
}