'use client'
import React from 'react'

type Props = {}

const Container = ({children}:{children:React.ReactNode} ,props: Props) => {
  return (
    <div className='py-10 px-20 w-full'>
        {children}
    </div>
  )
}

export default Container