import React from 'react'

type Props = {
    text : string,
    color : string
}

const ButtonPerson = (props: Props) => {
    
    const classForm = "w-full flex flex-wrap py-3 gap-px justify-between"
    const classButton = `basis-full p-3 bg-${props.color}-800 rounded-lg`

    return (
        <div className={classForm}>
            <button className={classButton}>{props.text}</button>
        </div>
    )
}

export default ButtonPerson