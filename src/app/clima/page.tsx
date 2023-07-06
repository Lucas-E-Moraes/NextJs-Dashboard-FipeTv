'use client'
import React from 'react'
import { useState } from 'react'
import Container from '@/components/Container'
import InputPerson from '@/components/InputPerson'
import ButtonPerson from '@/components/ButtonPerson'

type Props = {}

export default function page({}: Props) {

    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    const [text3, setText3] = useState("");
    const [text4, setText4] = useState("");
    const placeholderT1 = "Coloque aqui a temperatura em ºC atual (Somente o número)"
    const placeholderT2 = "Coloque aqui a umidade do ar (Somente o número)"
    const placeholderT3 = "Coloque aqui a velocidade do vento (Somente o número)"
    const placeholderT4 = "Coloque aqui a probabilidade de chuva (Somente o número)"
  return (
    <Container>
        <InputPerson 
            placeholderInput={placeholderT1}
            textLabel="temperatura"
            idInput="t1"
            setValue={setText1}/>
        <InputPerson 
            placeholderInput={placeholderT2}
            textLabel="umidade"
            idInput='t2'
            setValue={setText2}/>
        <InputPerson 
            placeholderInput={placeholderT3}
            textLabel="vento"
            idInput="t3"
            setValue={setText3}/>
        <InputPerson 
            placeholderInput={placeholderT4}
            textLabel="chuva"
            idInput='t4'
            setValue={setText4}/>

        <ButtonPerson text='Atualizar no OBS' color='green'/>
        <ButtonPerson text='Veja o clima de Cáceres' color='yellow'/>
    </Container>
  )
}