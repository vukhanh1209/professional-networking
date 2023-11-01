"use client"
import InputBox from "../../common/FormInput/FormInput";
import { useState, useCallback, useMemo, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAppDispatch } from "@/redux/hook";
import { useRouter } from "next/navigation";
import { handleServiceResponse } from "@/utils/handleServiceResponse";
import { forgotPassword } from "@/redux/actions/user.action";

const schema = yup.object().shape({
    email: yup
    .string()
    .required('Bạn chưa nhập Email')
    .email('Email không hợp lệ')
});


const FPForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });
    const dispatch = useAppDispatch();
    const router = useRouter()

    const onSubmit = async (data : any) => {
        if(data) {
            const resBody = {
                email: data.email,
            }
            const res = await dispatch(forgotPassword(resBody))
            handleServiceResponse(res)
            if(res.meta.requestStatus === "fulfilled") {
                setTimeout(() => {
                    router.push(`/account/reset-password/${data.email}`);
                }, 500)
            }
        }

    };

    return (
        <form className="flex flex-col items-start gap-3" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col w-full">
                <InputBox
                    register={register("email")}
                    error={errors.email}
                    title="Email của bạn"
                    placeholder="Email của bạn"
                    name="email"
                    required={true}
                    delay="1"
                />
            </div>
            <button 
                type="submit"
                className={`hover:bg-[#c82222] flex items-center justify-center py-3 px-6 w-full rounded-lg  bg-[#ed1b2f] transition-all duration-100 text-base font-semibold text-white mb-4`}>
                Quên mật khẩu
            </button>
        </form>


    )
}

export default FPForm;