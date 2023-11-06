"use client"
import InputBox from "../../common/FormInput/FormInput";
import { useState, useCallback, useMemo, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAppDispatch } from "@/redux/hook";
import YourCV from "./YourCV";
import CoverLetter from "./CoverLetter";

const schema = yup.object().shape({
    name: yup
    .string()
    .required('Bạn chưa nhập họ tên'),
    coverLetter: yup
    .string()
    .max(500, "Thư xin việc không được dài quá 500 ký tự"),
});


const ApplicationForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });
    const dispatch = useAppDispatch()


    const onSubmit = async (data : any) => {
        console.log("Log ~ file: ApplicationForm.tsx:29 ~ onSubmit ~ data:", data)
        // if(data) {
        //     const res = await dispatch(authSignIn(data))
        //     console.log("Log ~ file: OTPForm.tsx:37 ~ onSubmit ~ res:", res)
            
        // }

    };

    return (
        <form className=" text-primary-black" onSubmit={handleSubmit(onSubmit)}>
            <InputBox
                register={register("name")}
                error={errors.name}
                title="Họ và tên"
                placeholder="Họ và tên"
                name="name"
                required={true}
                delay="1"
            />
            <YourCV/>
            <CoverLetter/>
            <button 
                type="submit"
                className={`hover:bg-[#c82222] flex items-center justify-center py-3 px-6 w-full rounded-lg  bg-[#ed1b2f] transition-all duration-100 text-base font-semibold text-white mb-4`}>
                Gửi CV của tôi
            </button>
        </form>


    )
}

export default ApplicationForm;