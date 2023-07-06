'use client'
import React from 'react'
import Image from 'next/image'
import LogoFIPe from '@/assets/TVFIPeLogo.png'
import { menu } from '@/data/menu'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <div className='p-1 bg-gray-900 shadow-[30px_0px_30px_0px_rgba(0,0,0,0.25)] basis-1/3 flex flex-col justify-between content-center'>
        <div className='w-full flex flex-col items-center'>
            <div className='flex flex-col items-center py-10 w-2/5'>
                <a href="/">  
                    <Image
                        className='transition duration-300 transform hover:scale-110'
                        src={LogoFIPe} 
                        alt='Banco de Horas'
                    />
                </a>
            </div>
            <div className='text-xl px-5'>
                <ul>
                    {menu.map((menu) => {
                            const {id, route, text, icon} = menu
                            return (
                                <li 
                                    className=""
                                    key={id}
                                >
                                    <a className='p-5 flex items-center gap-x-8' href={route}>{icon}{text}</a>
                                </li>
                        )})}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar