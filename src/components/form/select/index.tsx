import React, { ReactElement } from 'react'
import { FaChevronDown } from 'react-icons/fa'
interface SelectProps {
    id?: string,
    name?: string,
    value?: string | number,
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    extraClass?: string,
    labelExtraClass?: string,
    marginTop?: string,
    label?: string,
    options: Array<{ label: string | number, value: string | number }>
    icon?: ReactElement,
    onBlur?: (e: any) => void,
    error?: any,
    touched?: any
}

const GTLSelect = ({ id, name = '', options, value, touched = {}, label, error, marginTop, extraClass, onChange, labelExtraClass }: SelectProps) => {
    return (
        <div className={`${marginTop} w-full`} >
            {label && <label htmlFor="" className={`${labelExtraClass} text-[12px] block text-[#ffffff] mb-1`}>{label}</label>}
            <div className="relative w-full">
                <select
                    id={id}
                    name={name}
                    onChange={onChange}
                    className={`${extraClass} border border-[#FFFFFF] w-full bg-[#FFFFFF08] px-5 rounded-[4px] shadow-shadowOne focus:ring-blue-500 focus:border-primaryVariantThree inline-block p-3.5 focus:outline-none appearance-none text-xs ${value !== '' ? '' : 'text-[#FFFFFF40]'}  ${touched[name] && error ? 'border-red-400' : ''}`}>
                    {
                        options.map((option, index) => (
                            <option key={index} value={option.value}>{option.label}</option>
                        ))
                    }
                </select>
                <span className='absolute text-[#FFFFFF40] text-xs right-4 top-5'><FaChevronDown /></span>
            </div>
            {touched[name] && error && <span className='text-xs text-red-400'>{error}</span>}
        </div>
    )
}

export default GTLSelect