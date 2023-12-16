"use client";
import FormWrapper from "./FormWrapper";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  closeInfoForm,
  selectIsOpeningInfoForm,
  selectProfile,
  updateInfo,
} from "@/redux/reducers/candidateSlice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { getProfile, updateProfile } from "@/redux/actions";
import { birthdayRegExp, phoneRegExp } from "@/const/regExp";
import { notifySuccess } from "@/utils/notification";

const schema = yup.object().shape({
  fullName: yup.string().required("Vui lòng điền họ và tên của bạn"),
  position: yup.string().required("Vui lòng điền chức vụ của bạn"),
  email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Vui lòng điền địa chỉ email của bạn"),
  phoneNumber: yup
    .string()
    .required("Vui lòng điền số điện thoại của bạn")
    .matches(phoneRegExp, "Số điện thoại không hợp lệ"),
  birthdate: yup
    .string()
    .required("Vui lòng điền ngày sinh của bạn")
    .matches(birthdayRegExp, "Ngày sinh không hợp lệ"),
  gender: yup.string(),
  city: yup.string().required("Vui lòng điền thành phố hiện tại của bạn"),
  address: yup.string(),
});

export default function FormInfo() {
  const isOpeningForm = useAppSelector(selectIsOpeningInfoForm);
  const profile = useAppSelector(selectProfile);
  const {
    fullName,
    position,
    email,
    phoneNumber,
    birthdate,
    gender,
    city,
    address,
  } = profile;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const dispatch = useAppDispatch();

  const onClose = () => {
    dispatch(closeInfoForm());
    reset();
  };

  const onSave = async (data: any) => {
    if (data) {
      const res = await dispatch(updateProfile(data));
      if (res.meta.requestStatus === "fulfilled") {
        notifySuccess(res.payload?.message);
        dispatch(getProfile({}));
        onClose();
      }
    }
  };

  return (
    <>
      {isOpeningForm && (
        <FormWrapper
          title="Thông tin cá nhân"
          onClose={onClose}
          onSave={onSave}
          handleSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-10 pt-6 pb-20  pr-6 pl-8 max-h-[400px] overflow-auto text-primary-black">
            <div className="relative flex flex-col gap-2">
              <label htmlFor="fullName" className="font-semibold">
                Họ và tên
                <span className="ml-1 text-primary-red">*</span>
              </label>
              <input
                {...register("fullName")}
                defaultValue={fullName}
                id="fullName"
                placeholder="Nguyen Van A"
                className="w-full p-4 rounded-lg border border-silver-grey"
                name="fullName"
              />
              {errors?.fullName && (
                <span className="absolute text-primary-red text-sm left-0 top-[105%]">
                  {String(errors?.fullName?.message)}
                </span>
              )}
            </div>

            <div className="relative flex flex-col gap-2">
              <label htmlFor="position" className="font-semibold">
                Chức danh
                <span className="ml-1 text-primary-red">*</span>
              </label>
              <input
                {...register("position")}
                defaultValue={position}
                id="position"
                placeholder="Lập trình viên"
                className="w-full p-4 rounded-lg border border-silver-grey"
                name="position"
              />
              {errors?.position && (
                <span className="absolute text-primary-red text-sm left-0 top-[105%]">
                  {String(errors?.position?.message)}
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-4 w-full">
              <div className="relative col-span-1 flex flex-col gap-2 w-full">
                <label htmlFor="email" className="font-semibold">
                  Địa chỉ email
                  <span className="ml-1 text-primary-red">*</span>
                </label>
                <input
                  {...register("email")}
                  defaultValue={email}
                  id="email"
                  placeholder="abc@company.com"
                  className="w-full p-4 rounded-lg border border-silver-grey"
                  name="email"
                />
                {errors?.email && (
                  <span className="absolute text-primary-red text-sm left-0 top-[105%] ">
                    {String(errors?.email?.message)}
                  </span>
                )}
              </div>
              <div className="relative col-span-1 flex flex-col gap-2  w-full">
                <label htmlFor="phoneNumber" className="font-semibold">
                  Số điện thoại
                  <span className="ml-1 text-primary-red">*</span>
                </label>
                <input
                  {...register("phoneNumber")}
                  defaultValue={phoneNumber}
                  id="phoneNumber"
                  placeholder="0123456789"
                  className="w-full p-4 rounded-lg border border-silver-grey"
                  name="phoneNumber"
                />
                {errors?.phoneNumber && (
                  <span className="absolute text-primary-red text-sm left-0 top-[105%]  ">
                    {String(errors?.phoneNumber?.message)}
                  </span>
                )}
              </div>
              <div className="relative col-span-1 flex flex-col gap-2 w-full">
                <label htmlFor="birthdate" className="font-semibold">
                  Ngày sinh
                  <span className="ml-1 text-primary-red">*</span>
                </label>
                <input
                  {...register("birthdate")}
                  defaultValue={birthdate}
                  id="birthdate"
                  placeholder="DD/MM/YYYY"
                  className="w-full p-4 rounded-lg border border-silver-grey"
                  name="birthdate"
                />
                {errors?.birthdate && (
                  <span className="absolute text-primary-red text-sm left-0 top-[105%] ">
                    {String(errors?.birthdate?.message)}
                  </span>
                )}
              </div>
              <div className="relative col-span-1 flex flex-col gap-2  w-full">
                <label htmlFor="gender" className="font-semibold">
                  Giới tính
                </label>
                <input
                  {...register("gender")}
                  defaultValue={gender}
                  id="gender"
                  placeholder="Nam/Nữ"
                  className="w-full p-4 rounded-lg border border-silver-grey"
                  name="gender"
                />
                {errors?.gender && (
                  <span className="absolute text-primary-red text-sm left-0 top-[105%]  ">
                    {String(errors?.gender?.message)}
                  </span>
                )}
              </div>
              <div className="relative col-span-1 flex flex-col gap-2 w-full">
                <label htmlFor="city" className="font-semibold">
                  Tỉnh/Thành phố
                  <span className="ml-1 text-primary-red">*</span>
                </label>
                <input
                  {...register("city")}
                  defaultValue={city}
                  id="city"
                  placeholder="Hồ Chí Minh"
                  className="w-full p-4 rounded-lg border border-silver-grey"
                  name="city"
                />
                {errors?.city && (
                  <span className="absolute text-primary-red text-sm left-0 top-[105%] ">
                    {String(errors?.city?.message)}
                  </span>
                )}
              </div>
              <div className="relative col-span-1 flex flex-col gap-2  w-full">
                <label htmlFor="address" className="font-semibold">
                  Địa chỉ
                </label>
                <input
                  {...register("address")}
                  defaultValue={address}
                  id="address"
                  placeholder="01 Nguyễn Huệ, Quận 1"
                  className="w-full p-4 rounded-lg border border-silver-grey"
                  name="address"
                />
                {errors?.address && (
                  <span className="absolute text-primary-red text-sm left-0 top-[105%]  ">
                    {String(errors?.address?.message)}
                  </span>
                )}
              </div>
            </div>
          </div>
        </FormWrapper>
      )}
    </>
  );
}
