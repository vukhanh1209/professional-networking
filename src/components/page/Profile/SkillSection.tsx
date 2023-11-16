"use client"
import Image from "next/image";
import { useAppDispatch } from "@/redux/hook";
import { openSkillsForm } from "@/redux/reducers/candidateSlice";

import AddCircle from "@/images/profile/add-circle.svg"
import Edit from "@/images/profile/edit.svg"

export default function SkillsSection() {

    const dispatch = useAppDispatch();


    const onOpenSkillsForm = () => {
        dispatch(openSkillsForm())
    }

    return (
        <div className="flex flex-col mt-6 px-6 pt-6 pb-8 rounded-lg bg-white">
            <div className="flex justify-between w-full items-center">
                <span className="text-xl md:text-2xl font-bold text-primary-black">Kỹ năng</span>
                <button onClick={onOpenSkillsForm}>
                    <Image src={AddCircle} width={20} height={20} alt="add"/>
                </button>
            </div>
            <span className="text-base text-dark-grey mt-[10px]">Chia sẻ kỹ năng của bạn</span>
        </div>
    )
}

