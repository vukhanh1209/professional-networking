"use client"
import ImageWrapper from "@/components/common/ImageWrapper";
import Image from "next/image";

import Email from "@/images/profile/email.svg"
import Gift from "@/images/profile/gift.svg"
import Phone from "@/images/profile/phone.svg"
import LocationPin from "@/images/profile/location-pin.svg"
import Profile from "@/images/profile/profile.svg"
import Edit from "@/images/profile/edit.svg"
import { useAppDispatch } from "@/redux/hook";
import { openInfoForm } from "@/redux/reducers/candidateSlice";


const avatarUrl = "https://itviec.com/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMExqTmc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--dff1aa1037d189ab459a0aeb2527bdea2802cd88/AAcHTtcqGTwNOdvlwpcsUm-bdAN6yNXpxsPbzbjlwtrn=s96-c.jpg"


export default function InfoSection() {
    const dispatch = useAppDispatch();

    const onOpenInfoForm = () => {
        dispatch(openInfoForm())
    }

    return (
        <div className="flex flex-col md:flex-row  px-6 pt-6 pb-8 rounded-lg bg-white">
            <div className="hidden md:block">
                <ImageWrapper src={avatarUrl} width={120} height={120} rounded={"full"} alt="avatar"/>
            </div>
            <div className="flex md:hidden w-full justify-center mb-4">
                <ImageWrapper src={avatarUrl} width={64} height={64} rounded={"full"} alt="avatar"/>
            </div>
            <div className="md:ml-8 flex flex-col w-full text-rich-grey">
                <div className="flex justify-between">
                    <span 
                        className="font-bold text-2xl md:text-3xl uppercase text-primary-black text-center md:text-left"
                    >
                        Khanh Nguyen
                    </span>
                    <button onClick={onOpenInfoForm}>
                        <Image src={Edit} width={20} height={20} alt="edit"/>
                    </button>

                </div>
                <span 
                    className="font-bold text-lg mt-2 text-center md:text-left border-b-2 border-silver-grey md:border-b-0 pb-4 md:pb-0"
                >
                    Student
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-4 ">
                    <div className="flex flex-col gap-4 w-full col-span-1">
                        <div className="flex gap-2 items-center">
                            <Image src={Email} width={16} height={16} alt="email"/>
                            <span>nghvukhanh@gmail.com</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <Image src={Gift} width={16} height={16} alt="gift"/>
                            <span>12/09/2001</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <Image src={LocationPin} width={16} height={16} alt="location"/>
                            <span>Binh Thanh Dicstrict, Ho Chi Minh City</span>
                        </div>

                    </div>

                    <div className="flex flex-col gap-4 w-full col-span-1">
                        <div className="flex gap-2 items-center">
                            <Image src={Phone} width={16} height={16} alt="phone"/>
                            <span>0986354614</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <Image src={Profile} width={16} height={16} alt="profile"/>
                            <span>Nam</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}