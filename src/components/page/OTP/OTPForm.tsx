"use client"
import InputBox from "../../common/FormInput/FormInput";
import { useState, useCallback, useMemo, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAppDispatch } from "@/redux/hook";
import { authVerify } from "@/redux/actions/auth.actions";
import { useRouter, useSearchParams } from "next/navigation";

const schema = yup.object().shape({
    otp: yup
    .string()
    .required('Bạn chưa nhập mã OTP')
    .min(6, "Mã OTP phải đủ 6 kí tự")
    .max(6, "Mã OTP chỉ bao gồm 6 kí tự")
    .matches(
        /[0-9]{6}/,
        'Mã OTP chỉ bao gồm kí tự số'
    ),
});


const OTPForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });
    
    const dispatch = useAppDispatch();
    const router = useRouter()
    const searchParam = useSearchParams();


    const onSubmit = async (data : any) => {
        const userEmail = searchParam.get("username");
        if(data) {
            const reqData = {
                email : userEmail,
                otp: data.otp
            }
            const res = await dispatch(authVerify(reqData))
            console.log("Log ~ file: OTPForm.tsx:37 ~ onSubmit ~ res:", res)
            if(res.meta.requestStatus == "fulfilled") router.push("/sign-in")
            
        }


    };

    return (
        <form className="flex flex-col items-start gap-3" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col w-full">
                <InputBox
                    register={register("otp")}
                    error={errors.otp}
                    title="Mã OTP"
                    placeholder="Mã OTP"
                    name="otp"
                    required={true}
                    delay="1"
                />
                
            </div>
            <button 
                type="submit"
                className={`hover:bg-[#c82222] flex items-center justify-center py-3 px-6 w-full rounded-lg  bg-[#ed1b2f] transition-all duration-100 text-base font-semibold text-white mb-4`}>
                Xác thực mã OTP
            </button>
        </form>


    )
}

export default OTPForm;