"use client";
import InputBox from "../../common/FormInput/FormInput";
import { useState, useCallback, useMemo, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAppDispatch } from "@/redux/hook";
import { authRegister } from "@/redux/actions/auth.action";
import { useRouter } from "next/navigation";
import { handleServiceResponse } from "@/utils/handleServiceResponse";

const schema = yup.object().shape({
  nickname: yup
    .string()
    .required("Bạn chưa nhập tên đăng nhập")
    .min(6, "Tên đăng nhập phải chứa ít nhất 6 kí tự"),
  password: yup
    .string()
    .required("Bạn chưa nhập mật khẩu")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/,
      "Mật khẩu phải chứa 8-16 kí từ bao gồm chữ in hoa, chữ thường, số và kí tự đặc biệt"
    ),
  username: yup
    .string()
    .required("Bạn chưa nhập Email")
    .email("Email không hợp lệ"),
});

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    if (data) {
      const res = await dispatch(authRegister(data));
      handleServiceResponse(res);
      if (res.meta.requestStatus === "fulfilled") {
        setTimeout(() => {
          router.push(`/account/otp?email=${data.username}`);
        }, 500);
      }
    }
  };

  return (
    <form
      className="flex flex-col items-start gap-8 mt-5 md:mt-0"
      onSubmit={handleSubmit(onSubmit)}
    >
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
          type="password"
        />
      </div>
      <div className="">
        <input
          type="checkbox"
          onChange={() => setIsConfirmed(!isConfirmed)}
          checked={isConfirmed}
          name="term"
          id="heydevs-term"
          className="absolute mt-[2px] inline-block w-5 h-5 mr-2"
        />
        <label
          htmlFor="heydevs-term"
          className="text-[#414042] text-base text-medium mb-6 inline"
        >
          <span className="ml-8">Tôi đã đọc và đồng ý với các </span>
          <a href="" target="_blank" className="text-[#0e2eed]">
            {" "}
            Điều khoản dịch vụ{" "}
          </a>
          và
          <a href="" target="_blank" className="text-[#0e2eed]">
            {" "}
            Chính sách và quyền riêng tư{" "}
          </a>
          của HeyDevs liên quan đến thông tin riêng tư của tôi.
        </label>
      </div>
      <button
        disabled={!isConfirmed}
        type="submit"
        className={`${
          isConfirmed ? "hover:bg-[#c82222] bg-[#ed1b2f]" : "bg-dark-grey"
        }  flex items-center justify-center py-3 px-6 w-full rounded-lg    transition-all duration-100 text-base font-semibold text-white mb-4`}
      >
        Đăng ký bằng Email
      </button>
    </form>
  );
};

export default SignUpForm;
