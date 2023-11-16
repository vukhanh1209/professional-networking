"use client"
import Image from "next/image";
import { useAppDispatch } from "@/redux/hook";
import { openIntroForm } from "@/redux/reducers/candidateSlice";

import AddCircle from "@/images/profile/add-circle.svg"
import Edit from "@/images/profile/edit.svg"

export default function IntroSection() {
    const dispatch = useAppDispatch();
    const onOpenIntroductionForm = () => {
        dispatch(openIntroForm())
    }

    return (
        <div className="flex flex-col mt-6 px-6 pt-6 pb-8 rounded-lg bg-white">
            <div className="flex justify-between w-full items-center">
                <span className="text-xl md:text-2xl font-bold text-primary-black">Giới thiệu bản thân</span>
                <button onClick={onOpenIntroductionForm}>
                    <Image src={AddCircle} width={20} height={20} alt="add"/>
                </button>
            </div>
            <span className="text-base text-dark-grey  mt-[10px]">Tóm tắt kinh nghiệm chuyên môn, chú ý làm nổi bật các kỹ năng và điểm mạnh</span>
        </div>
    )
}

