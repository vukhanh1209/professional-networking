"use client"
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { openEduForm, selectEducation } from "@/redux/reducers/candidateSlice";

import AddCircle from "@/images/profile/add-circle.svg"
import Edit from "@/images/profile/edit.svg"

export default function EduSection() {
    const dispatch = useAppDispatch();
    const education = useAppSelector(selectEducation)


    const onOpenEducationForm = () => {
        dispatch(openEduForm())
    }

    return (
        <div className="flex flex-col mt-6 px-6 pt-6 pb-8 rounded-lg bg-white text-primary-black">
            <div className="flex justify-between w-full items-center">
                <span className="text-xl md:text-2xl font-bold ">Học vấn</span>
                <button onClick={onOpenEducationForm}>
                    <Image src={education ? Edit : AddCircle} width={20} height={20} alt="add" className="w-6 h-6 md:h-5 md:w-5"/>
                </button>
            </div>
            {education ?
                <div className="border-t-2 border-silver-grey pt-6 mt-4 text-base">
                    <p className="font-bold text-lg mb-2">{education.school}</p>
                    <p className="mb-2">{education.major}</p>
                    {education.startDate && 
                    <p className="mt-1 uppercase">
                        {education.startDate} - {education.endDate || "Hiện tại"}
                    </p>
                    }
                </div>
            :
                <span className="text-base text-dark-grey  mt-[10px]">Chia sẻ trình độ học vấn của bạn</span>
            }
        </div>
    )
}

