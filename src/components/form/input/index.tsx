import React, { ReactElement } from 'react'

interface InputProps {
    id?: string,
    icon?: ReactElement,
    label?: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder?: string,
    type?: string,
    extraClass?: string,
    labelExtraClass?: string
    style?: React.CSSProperties,
    name?: string,
    marginTop?: string,
    onBlur?: (e: any) => void,
    error?: any,
    touched?: any,
    iconPosition?: 'left' | 'right',
    iconColor?: string
}

const GTLInput = ({ id, name = '', icon, marginTop, label, value, onChange, onBlur, error, touched = {}, placeholder, type = 'text', extraClass, iconPosition, iconColor, labelExtraClass, style }: InputProps) => {
    return (
        <div className={`${marginTop}`}>
            {label && <label htmlFor={name} className={`${labelExtraClass} text-md text-isGreyVariantSeven mb-1`}>{label}</label>}
            <div className='relative'>
                <input
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    type={type}
                    onBlur={onBlur}
                    className={`${extraClass} border border-[#FFFFFF] w-full block bg-[#FFFFFF08] p-2.5 px-3 rounded-[4px] shadow-shadowOne placeholder:text-sm focus:outline-none focus:border-primaryVariantThree ${touched[name] && error ? 'border-red-400' : ''}`} placeholder={placeholder} />
                {touched[name] && error && <span className='text-xs text-red-400'>{error}</span>}
                {icon && <span className={`text-${iconColor} absolute top-3 ${iconPosition === 'left' ? 'left-2.5': 'right-2.5'}`}> {icon} </span>}
            </div>
        </div>
    )
}

export default GTLInput