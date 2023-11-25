"use client"
import {useForm} from "react-hook-form"
import { useAppDispatch } from "@/redux/hook";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import { getProfile, updateProfile } from "@/redux/actions"
import { birthdayRegExp, phoneRegExp } from "@/const/regExp"
import { notifySuccess } from "@/utils/notification";
import { useState } from "react";
import Link from "next/link";

const schema = yup.object().shape({
    fullName: yup
    .string()
    .required('Vui lòng điền họ và tên của bạn'),
    position: yup
    .string()
    .required('Vui lòng điền chức vụ của bạn'),
    email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Vui lòng điền địa chỉ email "),
    phoneNumber: yup
    .string()
    .required("Vui lòng điền số điện thoại của bạn")
    .matches(phoneRegExp, "Số điện thoại không hợp lệ"),
    companyName: yup
    .string()
    .required("Vui lòng điền tên công ty"),
    companyAddress: yup
    .string()
    .required("Vui lòng điền địa chỉ công ty"),
    companyWebsite: yup
    .string()
});

export default function FormContact() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });
    const [isConfirmed, setIsConfirmed] = useState<boolean>(false)

    const dispatch = useAppDispatch();


    const onSubmit = async (data: any) => {
        console.log("Log ~ file: FormContact.tsx:50 ~ onSubmit ~ data:", data)
        if(data) {
            // const res = await dispatch(writeAboutMe(data)) 
            // if(res.meta.requestStatus === "fulfilled") {
            //     notifySuccess(res.payload?.message)
            //     dispatch(getProfile({}))
            // }
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-xl drop-shadow-md" id="ContactForm">
            <div className="flex flex-col p-6 md:p-12 text-primary-black">
                <h5 className="font-bold text-xl">Thông tin quý khách</h5>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 w-full">
                    <div className="relative flex flex-col gap-2 mt-6">
                        <label htmlFor="fullName" className="font-semibold">
                            Họ và tên
                            <span className="ml-1 text-primary-red">*</span>
                        </label>
                        <input {...register("fullName")} id="fullName" placeholder="Nguyen Van A"  className="w-full p-4 rounded-lg border border-silver-grey" name="fullName"/>
                        {errors?.fullName && 
                        <span className="absolute text-primary-red text-sm left-0 top-[105%]">
                            {String(errors?.fullName?.message)}
                        </span>
                        }
                    </div>

                    <div className="relative flex flex-col gap-2 mt-10 md:mt-6">
                        <label htmlFor="position" className="font-semibold">
                            Chức vụ
                            <span className="ml-1 text-primary-red">*</span>
                        </label>
                        <input {...register("position")} id="position" placeholder="Lập trình viên"  className="w-full p-4 rounded-lg border border-silver-grey" name="position"/>
                        {errors?.position && 
                        <span className="absolute text-primary-red text-sm left-0 top-[105%]">
                            {String(errors?.position?.message)}
                        </span>
                        }
                    
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 w-full">
                    <div className="relative col-span-1 flex flex-col gap-2 mt-10 w-full">
                        <label htmlFor="email" className="font-semibold">
                            Email làm việc
                            <span className="ml-1 text-primary-red">*</span>
                        </label>
                        <input {...register("email")} id="email" placeholder="abc@company.com"  className="w-full p-4 rounded-lg border border-silver-grey" name="email"/>
                        {errors?.email && 
                        <span className="absolute text-primary-red text-sm left-0 top-[105%] ">
                            {String(errors?.email?.message)}
                        </span>
                        }
                    </div>
                    <div className="relative col-span-1 flex flex-col gap-2 mt-10  w-full">
                        <label htmlFor="phoneNumber" className="font-semibold">
                            Số điện thoại
                            <span className="ml-1 text-primary-red">*</span>
                        </label>
                        <input {...register("phoneNumber")} id="phoneNumber" placeholder="0123456789"  className="w-full p-4 rounded-lg border border-silver-grey" name="phoneNumber"/>
                        {errors?.phoneNumber &&
                        <span className="absolute text-primary-red text-sm left-0 top-[105%]  ">
                            {String(errors?.phoneNumber?.message)}
                        </span>
                        }
                    </div>
                </div>

                <h5 className="font-bold text-xl mt-14">Thông tin công ty</h5>
                <div className="relative col-span-1 flex flex-col gap-2 mt-6 w-full">
                        <label htmlFor="companyName" className="font-semibold">
                            Tên công ty
                            <span className="ml-1 text-primary-red">*</span>
                        </label>
                        <input {...register("companyName")} id="companyName" placeholder="HeyDevs"  className="w-full p-4 rounded-lg border border-silver-grey" name="companyName"/>
                        {errors?.companyName && 
                        <span className="absolute text-primary-red text-sm left-0 top-[105%] ">
                            {String(errors?.companyName?.message)}
                        </span>
                        }
                    </div>
                    <div className="relative col-span-1 flex flex-col gap-2 mt-10  w-full">
                        <label htmlFor="companyAddress" className="font-semibold">
                            Địa chỉ công ty
                            <span className="ml-1 text-primary-red">*</span>
                        </label>
                        <input {...register("companyAddress")} id="companyAddress" placeholder="Hồ Chí Minh"  className="w-full p-4 rounded-lg border border-silver-grey" name="companyAddress"/>
                        {errors?.companyAddress &&
                        <span className="absolute text-primary-red text-sm left-0 top-[105%]  ">
                            {String(errors?.companyAddress?.message)}
                        </span>
                        }
                    </div>
                    <div className="relative col-span-1 flex flex-col gap-2 mt-10 w-full">
                        <label htmlFor="companyWebsite" className="font-semibold">
                            Địa chỉ website
                        </label>
                        <input {...register("companyWebsite")} id="companyWebsite" placeholder="https://heydevs.com"  className="w-full p-4 rounded-lg border border-silver-grey" name="companyWebsite"/>
                        {errors?.companyWebsite && 
                        <span className="absolute text-primary-red text-sm left-0 top-[105%] ">
                            {String(errors?.companyWebsite?.message)}
                        </span>
                        }
                    </div>
                    <div className="relative mt-10">
                        <input type="checkbox" onChange={() => setIsConfirmed(!isConfirmed)} checked={isConfirmed} name="term" id="heydevs-term" className="absolute mt-[2px] inline-block w-5 h-5 mr-2"/>
                        <label htmlFor="heydevs-term" className="text-[#414042] text-base text-medium mb-6 inline">
                            <span className="ml-8">Tôi đã đọc và đồng ý với các </span>
                            <a href="" target="_blank" className="text-[#0e2eed]"> Điều khoản dịch vụ </a>
                            và 
                            <a href="" target="_blank" className="text-[#0e2eed]"> Chính sách và quyền riêng tư </a>
                            của HeyDevs liên quan đến thông tin riêng tư của tôi.
                        </label>
                    </div>
                    <div className="flex items-center mt-10">
                        <div className=" w-full">
                            <span className="text-primary-black">Đã có tài khoản khách hàng? <Link href="/customer/sign-in" className="text-hyperlink text-base">Đăng nhập</Link></span>
                        </div>    
                        <button 
                            disabled={!isConfirmed}
                            type="submit"
                            className={`${isConfirmed ? "hover:bg-[#c82222] bg-[#ed1b2f]" : "bg-dark-grey"}  flex items-center justify-center w-full md:max-w-[180px] py-3 px-6  rounded-lg transition-all duration-100 text-base font-semibold text-white`}>
                            Liên hệ tôi
                        </button>
                    </div>
            </div>
            
        </form>
    )
}