"use client"
import InputBox from "../../common/FormInput/FormInput";
import { useState, useCallback, useMemo, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
    



    const onSubmit = (data : any) => {
        const dataRequestBody = { ...data }
        fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/contact_new`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataRequestBody),
        }).then(response => response.json())
            .then(dataRes => {

                if (!dataRes.error_code) {
                    reset();
                }

            })
            .catch((error) => {
                console.error('Error:', error);
            });

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