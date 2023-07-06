import React from 'react'
import Image, { StaticImageData } from 'next/image'
import OnOff from './OnOff'

type Props = {
    fishName : string,
    fishImage : StaticImageData,
}
const FishBox = (props: Props) => {
    return (
        <div className='basis-1/3 px-10 py-5'>
          <p>{props.fishName}</p>
          <Image 
            src={props.fishImage}
            alt={props.fishName}
            width={150}
            height={150}/>
          <OnOff 
            dir='start'
            name='peixe'
            id='on'/>
          <div className='flex'>
              <div className='w-24'>
                  <input type="radio" name="pexe1" id="pexe1-off" />
                  <label htmlFor="pexe1-off">Desligado</label>
              </div>
          </div>
        </div>
    )
}

export default FishBox