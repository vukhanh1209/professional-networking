"use client"
import { useEffect, useState } from "react";
import {useForm} from "react-hook-form"

export default function CoverLetterSection() {
    const maxLength = 500;
    const [value, setValue] = useState("")
    const {register, handleSubmit} = useForm()


    const handleChangeCoverLetter = (e : any) => {
        setValue(e.target.value)
    }

    return (
        <section className="bg-white rounded-lg px-6 pt-6 pb-8 text-primary-black">
            <h3 className="text-xl mb-3 font-bold">
                Thư xin việc&nbsp;
            </h3>

            <p className="text-base mb-3 font-normal">
                Những kỹ năng, dự án hay thành tựu nào chứng tỏ bạn là một ứng viên tiềm năng cho vị trí ứng tuyển này?
            </p>
            <textarea 
                {...register}
                name="coverLetter"
                onChange={handleChangeCoverLetter}
                className="h-[120px] placeholder:text-base placeholder:text-dark-grey w-full text-primary-black border border-available-green rounded-lg p-4"
                placeholder="Nêu nhiều ví dụ cụ thể để làm hồ sơ ứng tuyển của bạn thuyết phục hơn..." spellCheck="false">
            </textarea>
            <span className="text-base text-dark-grey">{`Còn lại ${maxLength - value.length} trong tổng số ${maxLength} ký tự`}</span>

        </section>
    )
}

