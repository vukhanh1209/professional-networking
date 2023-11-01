"use client"
import InputBox from "../../common/FormInput/FormInput";
import { useState, useCallback, useMemo, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAppDispatch } from "@/redux/hook";
import { authRegenerateOTP, authVerify } from "@/redux/actions/auth.actions";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { handleServiceResponse } from "@/utils/handleServiceResponse";

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
    const searchParam = useSearchParams()
    const userEmail = searchParam.get("email");

    const onSubmit = async (data : any) => {
        if(data) {
            const reqData = {
                email : userEmail,
                otp: data.otp
            }
            const res = await dispatch(authVerify(reqData))
            handleServiceResponse(res)
            if(res.meta.requestStatus === "fulfilled") {
                setTimeout(() => {
                    router.push("/sign-in")
                }, 500)
            }
          
        }


    };

    const handleResendOTP = async (e : any) => {
        e.preventDefault()

        const res = await dispatch(authRegenerateOTP(userEmail))
        handleServiceResponse(res)
    }

    return (
        <form className="flex flex-col items-center gap-3" onSubmit={handleSubmit(onSubmit)}>
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
                className={`hover:bg-[#c82222] flex items-center justify-center py-3 px-6 w-full rounded-lg  bg-[#ed1b2f] transition-all duration-100 text-base font-semibold text-white`}>
                Xác thực mã OTP
            </button>
            <button onClick={handleResendOTP} className=" px-6 bg-transparent text-sm text-right text-hyperlink mb-4">Lấy lại mã OTP</button>
        </form>


    )
}

export default OTPForm;