import React, { ReactElement } from 'react'

interface TextAreaProps {
    id?: string,
    icon?: ReactElement,
    label?: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
    placeholder?: string,
    extraClass?: string,
    labelExtraClass?: string
    style?: React.CSSProperties,
    name?: string,
    marginTop?: string,
    col: number,
    row: number,
    onBlur?: (e: any) => void,
    touched?: any,
    error?: any,
}

const GTLTextArea = ({ id, name = '', error, touched = {}, onBlur, marginTop, labelExtraClass, label, value, onChange, placeholder, extraClass, col = 30, row = 8 }: TextAreaProps) => {
    return (
        <div className={marginTop}>
            {label && <label htmlFor={name} className={`${labelExtraClass} text-[14px] mb-1 block`}>{label}</label>}
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                id={id}
                cols={col}
                rows={row}
                className={`${extraClass} border border-[#FFFFFF] w-full block bg-[#FFFFFF08] focus:border-primaryVariantThree p-3 px-5 rounded-[4px] shadow-shadowOne placeholder:text-xs placeholder:text-[#FFFFFF40] focus:outline-none ${touched[name] && error ? 'border-red-400' : ''}`} placeholder={placeholder}></textarea>
            {touched[name] && error && <span className='text-xs text-red-400'>{error}</span>}
        </div>
    )
}

export default GTLTextArea