"use client"
import FormWrapper from "./FormWrapper"
import { useAppDispatch, useAppSelector } from "@/redux/hook"
import { closeInfoForm, selectIsOpeningInfoForm } from "@/redux/reducers/candidateSlice"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";


const schema = yup.object().shape({
    name: yup
    .string()
    .required('Vui lòng điền họ và tên của bạn'),
    role: yup
    .string()
    .required('Vui lòng điền chức vụ của bạn'),
    email: yup
    .string()
    .email("Vui lòng nhập đúng định dạng email")
    .required("Vui lòng điền địa chỉ email của bạn"),
    phone: yup
    .string()
    .matches(new RegExp('^(0[1-9]|1[0-2])/\d{4}$'), "Vui lòng nhập đúng định dạng MM/YYYY")
    .required("Vui lòng điền số điện thoại của bạn"),
    birthday: yup
    .string()
    .required("Vui lòng điền ngày sinh của bạn")
    .matches(new RegExp('^(0[1-9]|1[0-9]|2[0-9]|3[0-1])/(0[1-9]|1[0-2])/\d{4}$'), "Vui lòng nhập đúng định dạng DD/MM/YYYY"),
    gender: yup
    .string(),
    city: yup
    .string()
    .required("Vui lòng điền thành phố hiện tại của bạn"),
    address: yup
    .string(),
});



export default function FormInfo() {
    const isOpeningForm = useAppSelector(selectIsOpeningInfoForm)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });
    
    const dispatch = useAppDispatch();

    const onClose = () => {
        dispatch(closeInfoForm())
        reset();
    }

    const onSave = (data: any) => {
        
    }

    return (
        <>
            {isOpeningForm && 
                <FormWrapper title="Thông tin cá nhân" onClose={onClose} onSave={onSave} handleSubmit={handleSubmit}>
                    <div className="flex flex-col gap-10 pt-6 pb-20  pr-6 pl-8 max-h-[400px] overflow-auto text-primary-black">
                        <div className="relative flex flex-col gap-2">
                            <label htmlFor="name" className="font-semibold">
                                Họ và tên
                                <span className="ml-1 text-primary-red">*</span>
                            </label>
                            <input {...register("name")} id="name" placeholder="Nguyen Van A"  className="w-full p-4 rounded-lg border border-silver-grey" name="name"/>
                            {errors?.name && 
                            <span className="absolute text-primary-red text-sm left-0 top-[105%]">
                                {String(errors?.name?.message)}
                            </span>
                            }
                        </div>

                        <div className="relative flex flex-col gap-2">
                            <label htmlFor="role" className="font-semibold">
                                Chức danh
                                <span className="ml-1 text-primary-red">*</span>
                            </label>
                            <input {...register("role")} id="role" placeholder="Lập trình viên"  className="w-full p-4 rounded-lg border border-silver-grey" name="role"/>
                            {errors?.role && 
                            <span className="absolute text-primary-red text-sm left-0 top-[105%]">
                                {String(errors?.role?.message)}
                            </span>
                            }
                        
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-4 w-full">
                            <div className="relative col-span-1 flex flex-col gap-2 w-full">
                                <label htmlFor="email" className="font-semibold">
                                    Địa chỉ email
                                    <span className="ml-1 text-primary-red">*</span>
                                </label>
                                <input {...register("email")} id="email" placeholder="abc@company.com"  className="w-full p-4 rounded-lg border border-silver-grey" name="email"/>
                                {errors?.email && 
                                <span className="absolute text-primary-red text-sm left-0 top-[105%] ">
                                    {String(errors?.email?.message)}
                                </span>
                                }
                            </div>
                            <div className="relative col-span-1 flex flex-col gap-2  w-full">
                                <label htmlFor="phone" className="font-semibold">
                                    Số điện thoại
                                    <span className="ml-1 text-primary-red">*</span>
                                </label>
                                <input {...register("phone")} id="phone" placeholder="0123456789"  className="w-full p-4 rounded-lg border border-silver-grey" name="phone"/>
                                {errors?.phone &&
                                <span className="absolute text-primary-red text-sm left-0 top-[105%]  ">
                                    {String(errors?.phone?.message)}
                                </span>
                                }
                            </div>
                            <div className="relative col-span-1 flex flex-col gap-2 w-full">
                                <label htmlFor="birthday" className="font-semibold">
                                    Ngày sinh
                                    <span className="ml-1 text-primary-red">*</span>
                                </label>
                                <input {...register("birthday")} id="birthday" placeholder="DD/MM/YYYY"  className="w-full p-4 rounded-lg border border-silver-grey" name="birthday"/>
                                {errors?.birthday && 
                                <span className="absolute text-primary-red text-sm left-0 top-[105%] ">
                                    {String(errors?.birthday?.message)}
                                </span>
                                }
                            </div>
                            <div className="relative col-span-1 flex flex-col gap-2  w-full">
                                <label htmlFor="gender" className="font-semibold">
                                    Giới tính
                                </label>
                                <input {...register("gender")} id="gender" placeholder="Nam/Nữ"  className="w-full p-4 rounded-lg border border-silver-grey" name="gender"/>
                                {errors?.gender &&
                                <span className="absolute text-primary-red text-sm left-0 top-[105%]  ">
                                    {String(errors?.gender?.message)}
                                </span>
                                }
                            </div>
                            <div className="relative col-span-1 flex flex-col gap-2 w-full">
                                <label htmlFor="city" className="font-semibold">
                                    Tỉnh/Thành phố
                                    <span className="ml-1 text-primary-red">*</span>
                                </label>
                                <input {...register("city")} id="city" placeholder="Hồ Chí Minh"  className="w-full p-4 rounded-lg border border-silver-grey" name="city"/>
                                {errors?.city && 
                                <span className="absolute text-primary-red text-sm left-0 top-[105%] ">
                                    {String(errors?.city?.message)}
                                </span>
                                }
                            </div>
                            <div className="relative col-span-1 flex flex-col gap-2  w-full">
                                <label htmlFor="address" className="font-semibold">
                                    Địa chỉ
                                </label>
                                <input {...register("address")} id="address" placeholder="01 Nguyễn Huệ, Quận 1"  className="w-full p-4 rounded-lg border border-silver-grey" name="address"/>
                                {errors?.address &&
                                <span className="absolute text-primary-red text-sm left-0 top-[105%]  ">
                                    {String(errors?.address?.message)}
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