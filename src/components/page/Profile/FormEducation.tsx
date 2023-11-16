import { useState } from "react"
import FormWrapper from "./FormWrapper"
import { useAppDispatch, useAppSelector } from "@/redux/hook"
import { closeEduForm, closeIntroForm, selectIsOpeningEduForm, selectIsOpeningIntroForm } from "@/redux/reducers/candidateSlice"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";

import requiredIcon from '@/images/sign-in/requireIcon.svg'
import Image from "next/image"
const schema = yup.object().shape({
    school: yup
    .string()
    .required('Vui lòng điền tên trường của bạn'),
    major: yup
    .string()
    .required('Vui lòng điền tên ngành học'),
    startDate: yup
    .string()
    .matches(new RegExp('^(0[1-9]|1[0-2])/\d{4}$'), "Vui lòng nhập đúng định dạng MM/YYYY")
    .required("Vui lòng chọn một mốc thời gian.")
    .length(7, "Vui lòng nhập đủ tháng, năm"),
    endDate: yup
    .string()
    .matches(new RegExp('^(0[1-9]|1[0-2])/\d{4}$'), "Vui lòng nhập đúng định dạng MM/YYYY")
    .required("Vui lòng chọn một mốc thời gian.")
    .length(7, "Vui lòng nhập đủ tháng, năm"),
});



export default function FormEducation() {
    const isOpeningEduForm = useAppSelector(selectIsOpeningEduForm)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });
    
    console.log("Log ~ file: FormEducation.tsx:37 ~ FormEducation ~ errors:", errors)
    const dispatch = useAppDispatch();
    const onClose = () => {
        dispatch(closeEduForm())
        reset();
    }

    const onSave = (data: any) => {
        console.log("Log ~ file: FormEducation.tsx:45 ~ onSave ~ data:", data)
        
    }

    return (
        <>
            {isOpeningEduForm && 
                <FormWrapper title="Học vấn" onClose={onClose} onSave={onSave} handleSubmit={handleSubmit}>
                    <div className="flex flex-col gap-10 pt-6 pb-20  pr-6 pl-8 max-h-[400px] overflow-auto text-primary-black">
                        <div className="relative flex flex-col gap-2">
                            <label htmlFor="school" className="font-semibold">
                                Tên trường
                                <span className="ml-1 text-primary-red">*</span>
                            </label>
                            <input {...register("school")} id="school" placeholder="Đại học Sư Phạm Kỹ Thuật TPHCM"  className="w-full p-4 rounded-lg border border-silver-grey" name="school"/>
                            {errors?.school && 
                            <span className="absolute text-primary-red text-sm left-0 top-[105%]">
                                {String(errors?.school?.message)}
                            </span>
                            }
                        </div>

                        <div className="relative flex flex-col gap-2">
                            <label htmlFor="major" className="font-semibold">
                                Ngành học
                                <span className="ml-1 text-primary-red">*</span>
                            </label>
                            <input {...register("major")} id="major" placeholder="Công nghệ thông tin"  className="w-full p-4 rounded-lg border border-silver-grey" name="major"/>
                            {errors?.major && 
                            <span className="absolute text-primary-red text-sm left-0 top-[105%]">
                                {String(errors?.major?.message)}
                            </span>
                            }
                        
                        </div>

                        <div className=" flex flex-col lg:flex-row gap-10 lg:gap-4 w-full">
                            <div className="relative flex flex-col gap-2 w-full">
                                <label htmlFor="startDate" className="font-semibold">
                                    Ngày bắt đầu
                                    <span className="ml-1 text-primary-red">*</span>
                                </label>
                                <input {...register("startDate")} id="startDate" placeholder="MM/YYYY"  className="w-full p-4 rounded-lg border border-silver-grey" name="startDate"/>
                                {errors?.startDate && 
                                <span className="absolute text-primary-red text-sm left-0 top-[105%] ">
                                    {String(errors?.startDate?.message)}
                                </span>
                                }
                            </div>
                            <div className="relative flex flex-col gap-2  w-full">
                                <label htmlFor="endDate" className="font-semibold">
                                    Ngày kết thúc
                                    <span className="ml-1 text-primary-red">*</span>
                                </label>
                                <input {...register("endDate")} id="endDate" placeholder="MM/YYYY"  className="w-full p-4 rounded-lg border border-silver-grey" name="endDate"/>
                                {errors?.endDate &&
                                <span className="absolute text-primary-red text-sm left-0 top-[105%]  ">
                                    {String(errors?.endDate?.message)}
                                </span>
                                }
                            </div>
                        </div>
                    </div>
                </FormWrapper>
                
            }
        </>
    )
}