"use client"
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { openIntroForm, selectIntroduction } from "@/redux/reducers/candidateSlice";

import AddCircle from "@/images/profile/add-circle.svg"
import Edit from "@/images/profile/edit.svg"

export default function IntroSection() {
    const dispatch = useAppDispatch();
    const introduction = useAppSelector(selectIntroduction)
    const onOpenIntroductionForm = () => {
        dispatch(openIntroForm())
    }

    return (
        <div className="flex flex-col mt-6 px-6 pt-6 pb-8 rounded-lg bg-white text-primary-black">
            <div className="flex justify-between w-full items-center">
                <span className="text-xl md:text-2xl font-bold ">Giới thiệu bản thân</span>
                <button onClick={onOpenIntroductionForm}>
                    <Image src={introduction ? Edit : AddCircle} width={20} height={20} alt="add" className="w-6 h-6 md:h-5 md:w-5"/>
                </button>
            </div>
            {introduction ? 
                <p className="border-t-2 border-silver-grey pt-6 mt-4">
                    {introduction}
                </p>
            :
                <span className="text-base text-dark-grey  mt-[10px]">Tóm tắt kinh nghiệm chuyên môn, chú ý làm nổi bật các kỹ năng và điểm mạnh</span>
            }
        </div>
    )
}

