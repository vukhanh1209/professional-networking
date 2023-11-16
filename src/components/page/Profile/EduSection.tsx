"use client"
import Image from "next/image";
import { useAppDispatch } from "@/redux/hook";
import { openEduForm } from "@/redux/reducers/candidateSlice";

import AddCircle from "@/images/profile/add-circle.svg"
import Edit from "@/images/profile/edit.svg"

export default function EduSection() {
    const dispatch = useAppDispatch();

    const onOpenEducationForm = () => {
        dispatch(openEduForm())
    }

    return (
        <div className="flex flex-col mt-6 px-6 pt-6 pb-8 rounded-lg bg-white">
            <div className="flex justify-between w-full items-center">
                <span className="text-xl md:text-2xl font-bold text-primary-black">Học vấn</span>
                <button onClick={onOpenEducationForm}>
                    <Image src={AddCircle} width={20} height={20} alt="add"/>
                </button>
            </div>
            <span className="text-base text-dark-grey  mt-[10px]">Chia sẻ trình độ học vấn của bạn</span>
        </div>
    )
}

