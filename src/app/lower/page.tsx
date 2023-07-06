'use client'
import React from 'react'
import { useState } from 'react'
import Container from '@/components/Container'
import InputPerson from '@/components/InputPerson'
import ButtonPerson from '@/components/ButtonPerson'
import LowerBox from '@/components/LowerBox'

type Props = {}

export default function page({}: Props) {

    const [textSup, setTextSup] = useState("");
    const [textInf, setTextInf] = useState("");
    const placeholderTS = "Coloque aqui o nome da pessoa (Esquerda)"
    const placeholderTI = "Coloque aqui o cargo da pessoa (Direita)"

  return (
    <Container>
      <InputPerson 
        placeholderInput={placeholderTS}
        textLabel="nome da pessoa"
        idInput="ts"
        setValue={setTextSup}/>
      <InputPerson 
        placeholderInput={placeholderTI}
        textLabel="cargo"
        idInput="ti"
        setValue={setTextInf}/>

      <LowerBox text1={textSup} text2={textInf}/>
      <ButtonPerson text="Mostrar no OBS" color='green' />

    </Container>
  )
}