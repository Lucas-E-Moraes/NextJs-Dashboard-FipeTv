import React from 'react'

type Props = {
    placeholderInput : string,
    textLabel : string,
    idInput : string,
    setValue : Function,
}

const InputPerson = (props:Props) => {

    const classForm = "w-full flex flex-wrap py-3 gap-px justify-between"
    const classLabel = "basis-full py-2"
    const classInput = "basis-full p-3 text-black rounded-lg"

    return (
        <form className={classForm}>
            <label className={classLabel} htmlFor="ts">{props.textLabel.toUpperCase()}</label>
            <input className={classInput} placeholder={props.placeholderInput} type="text" name={props.idInput} id={props.idInput} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {props.setValue(e.target.value)}}/>
        </form>
    )
}

export default InputPerson