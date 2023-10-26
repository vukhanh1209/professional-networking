"use client"
import InputBox from "../../common/FormInput/FormInput";
import { useState, useCallback, useMemo, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAppDispatch } from "@/redux/hook";
import { authRegister } from "@/redux/actions/auth.actions";
import { useRouter } from "next/navigation";

const schema = yup.object().shape({
    nickname: yup
    .string()
    .required('Bạn chưa nhập tên đăng nhập')
    .min(6, "Tên đăng nhập phải chứa ít nhất 6 kí tự"),
    password: yup
    .string()
    .required('Bạn chưa nhập mật khẩu')
    .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/,
        'Mật khẩu phải chứa 8-16 kí từ bao gồm chữ in hoa, chữ thường, số và kí tự đặc biệt'
    )
    ,
    username: yup
    .string()
    .required('Bạn chưa nhập Email')
    .email('Email không hợp lệ')
});


const SignUpForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });
    const dispatch = useAppDispatch()
    const router = useRouter()

    const onSubmit = async (data : any) => {

        // console.log("Log ~ file: SignUpForm.tsx:47 ~ onSubmit ~ reqBody:", data)
        if(data) {
            const res = await dispatch(authRegister(data))
            console.log("Log ~ file: SignUpForm.tsx:43 ~ onSubmit ~ res:", res)
            if(res.meta.requestStatus == "fulfilled") router.push(`/account/otp?username=${data.username}`)
        }
        
        // fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/contact_new`, {
        //     method: 'POST', // or 'PUT'
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(dataRequestBody),
        // }).then(response => response.json())
        //     .then(dataRes => {

        //         if (!dataRes.error_code) {
        //             reset();
        //         }

        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });

    };

    return (
        <form className="flex flex-col items-start gap-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col w-full">
                <InputBox
                    register={register("nickname")}
                    error={errors.nickname}
                    title="Tên đăng nhập"
                    placeholder="Tên đăng nhập"
                    name="nickname"
                    required={true}
                    delay="1"
                />
                <InputBox
                    register={register("username")}
                    error={errors.username}
                    title="Địa chỉ Email"
                    placeholder="Địa chỉ Email"
                    name="username"
                    required={true}
                    delay="1"
                />
                <InputBox
                    register={register("password")}
                    error={errors.password}
                    title="Mật khẩu"
                    placeholder="Mật khẩu"
                    required={true}
                    name="password"
                />
                
            </div>
            <div className="">
                <input type="checkbox" name="term" id="itviec-term" className="inline-block w-5 h-5 mr-2"/>
                <label htmlFor="itviec-term" className="text-[#414042] text-base text-medium mb-6 inline">
                    Tôi đã đồng ý với các 
                    <a href="" target="_blank" className="text-[#0e2eed]"> Điều khoản dịch vụ </a>
                    và 
                    <a href="" target="_blank" className="text-[#0e2eed]"> Chính sách và quyền riêng tư </a>
                    của ITviec liên quan đến thông tin riêng tư của tôi.
                </label>
            </div>
            <button 
                type="submit"
                className={`hover:bg-[#c82222] flex items-center justify-center py-3 px-6 w-full rounded-lg  bg-[#ed1b2f]  transition-all duration-100 text-base font-semibold text-white mb-4`}>
                Đăng ký bằng Email
            </button>
        </form>


    )
}

export default SignUpForm;