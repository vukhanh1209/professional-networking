"use client"
import InputBox from "../../common/FormInput/FormInput";
import { useState, useCallback, useMemo, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    password: yup
    .string()
    .required('Bạn chưa nhập mật khẩu mới')
    .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/,
        'Mật khẩu phải chứa 8-16 kí từ bao gồm chữ in hoa, chữ thường, số và kí tự đặc biệt'
    ),
    systemPassword: yup
    .string()
    .required("Bạn chưa nhập mật khẩu hiện tại")
});


const RPForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });
    

    const [systemPassword, setSystemPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    // const enoughField = useMemo(() => newPassword && systemPassword, [newPassword, systemPassword]);


    const notifySuccessfull = useCallback(() => {
        setSystemPassword("");
        setNewPassword("");
    }, [])

    const onLoginSubmit = (data : any) => {
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
                    // notifySuccessfull()
                }

            })
            .catch((error) => {
                console.error('Error:', error);
            });

    };

    return (
        <form className="flex flex-col items-start gap-3" onSubmit={handleSubmit(onLoginSubmit)}>
            <div className="flex flex-col w-full">
                <InputBox
                    register={register("systemPassword")}
                    error={errors.systemPassword}
                    title="Mật khẩu hiện tại"
                    placeholder="Mật khẩu hiện tại"
                    name="systemPassword"
                    required={true}
                    setInputValue={setSystemPassword}
                    delay="1"
                />
                <InputBox
                    register={register("password")}
                    error={errors.password}
                    title="Mật khẩu"
                    placeholder="Mật khẩu"
                    setInputValue={setNewPassword}
                    required={true}
                    name="password"
                />
                
            </div>
            <button 
                // disabled={!enoughField}
                type="submit"
                className={`hover:bg-[#c82222] flex items-center justify-center py-3 px-6 w-full rounded-lg  bg-[#ed1b2f] transition-all duration-100 text-base font-semibold text-white mb-4`}>
                Đặt lại mật khẩu
            </button>
        </form>


    )
}

export default RPForm;