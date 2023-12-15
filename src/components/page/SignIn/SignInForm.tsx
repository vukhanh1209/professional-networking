"use client";
import InputBox from "../../common/FormInput/FormInput";
import { useState, useCallback, useMemo, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { authSignIn } from "@/redux/actions/auth.action";
import { useAppDispatch } from "@/redux/hook";
import { handleServiceResponse } from "@/utils/handleServiceResponse";
import { useParams, useRouter } from "next/navigation";
import { notifySuccess } from "@/utils/notification";
import { LocalStorage } from "@/utils/LocalStorage";

const schema = yup.object().shape({
  password: yup.string().required("Bạn chưa nhập mật khẩu"),
  // .matches(
  //     /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/,
  //     'Mật khẩu phải chứa 8-16 kí từ bao gồm chữ in hoa, chữ thường, số và kí tự đặc biệt'
  // )
  username: yup
    .string()
    .required("Bạn chưa nhập Email")
    .email("Email không hợp lệ"),
});

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onLoginSubmit = async (data: any) => {
    if (data) {
      const res = await dispatch(authSignIn(data));
      if (res.meta.requestStatus === "fulfilled") {
        setTimeout(() => {
          router.push("/");
        }, 500);
      }
    }
  };

  return (
    <form
      className="flex flex-col items-start gap-8"
      onSubmit={handleSubmit(onLoginSubmit)}
    >
      <div className="flex flex-col w-full">
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
          type="password"
        />
      </div>
      <button
        type="submit"
        className={`hover:bg-[#c82222] flex items-center justify-center py-3 px-6 w-full rounded-lg  bg-[#ed1b2f] transition-all duration-100 text-base font-semibold text-white mb-4`}
      >
        Đăng nhập bằng Email
      </button>
    </form>
  );
};

export default SignInForm;
