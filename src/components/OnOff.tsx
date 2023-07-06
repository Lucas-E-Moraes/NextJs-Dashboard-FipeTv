import React from 'react'

type Props = {
    dir : string,
    name : string,
    id : string,
}

const OnOff = (props: Props) => {
    let stats

    props.id === "on" ? 
        (stats = "Ligado") : 
        (stats = "Desligado")

    return (
        <div className={`flex justify-${props.dir}`}>
            <div className='w-24'>
                <input type="radio" name={props.name} id={`${props.name}-${props.id}`} />
                <label htmlFor={`${props.name}-${props.id}`}>{stats}</label>
            </div>
        </div>
    )
}

export default OnOff