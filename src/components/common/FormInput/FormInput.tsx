"use client"
import { useState, useEffect } from "react";
import requiredIcon from 'public/images/sign-in/requireIcon.svg'
import ImageLegacy from 'next/legacy/image';

const FormInput = ({title, placeholder, setInputValue, error, register, name, delay, required} : any) => {
    const delayClassName = delay ? `delay-${delay}` : '';
    const [value, setValue] = useState("");
    const handleChangeInput = (e : any) => {
        setValue(String(e.target.value))
    }
    useEffect(() => {
        if(setInputValue) {
            const inputTimeout = setTimeout(() => {
                setInputValue(value)
            }, 500)
            return () => {
                clearTimeout(inputTimeout)
            }
        }
    }, [setInputValue, value])

    return (
        <div className={`relative flex flex-col animate-duration-1500 ContactFadeInRight ${delayClassName}`}>
            <h5 className="text-sm font-medium text-[#121212] mb-2">
                {title}
                {required && <span className="text-[#ed1b2f] ml-1">*</span>}
            </h5>
            <div className="relative flex items-center h-fit">
                <input 
                    {...register}
                    onChange={(e) => handleChangeInput(e)}
                    className={`${error ? 'border-[#ed1b2f]' : 'border-[#dedede]'} text-sm w-full rounded-lg bg-transparent outline-none text-[#121212] placeholder:text-[#656881] py-3 px-4 border`}
                    placeholder={placeholder}
                    name={name || ""}
                />
                 <div className={`${error ? "block" : "hidden"} absolute right-4 h-full flex items-center`}>
                    <ImageLegacy src={requiredIcon}/>
                </div>
            </div>
            <p className={`${error ? "opacity-1" : "opacity-0"} text-xs text-[#FF3D54] first-letter:uppercase min-h-[16px] my-1`}>{error?.message}</p>
        </div>
    )
}

export default FormInput;