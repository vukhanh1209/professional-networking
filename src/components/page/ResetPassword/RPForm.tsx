"use client";
import InputBox from "../../common/FormInput/FormInput";
import { useState, useCallback, useMemo, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { notifyErrors } from "@/utils/notification";
import { resetPassword } from "@/redux/actions/user.action";
import { useAppDispatch } from "@/redux/hook";
import { handleServiceResponse } from "@/utils/handleServiceResponse";
import { usePathname, useRouter } from "next/navigation";

const schema = yup.object().shape({
  password: yup
    .string()
    .required("Bạn chưa nhập mật khẩu mới")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/,
      "Mật khẩu phải chứa 8-16 kí từ bao gồm chữ in hoa, chữ thường, số và kí tự đặc biệt"
    ),
  systemPassword: yup.string().required("Bạn chưa nhập mật khẩu hiện tại"),
  confirmPassword: yup
    .string()
    .required("Bạn chưa xác nhận lại mật khẩu")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/,
      "Mật khẩu phải chứa 8-16 kí từ bao gồm chữ in hoa, chữ thường, số và kí tự đặc biệt"
    ),
});

const RPForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathName = usePathname();
  const onSubmit = async (data: any) => {
    if (data) {
      if (data.password === data.confirmPassword) {
        const email = pathName.split("/")[3];

        const requestBody = {
          email,
          currentPassword: data.systemPassword,
          newPassword: data.password,
          confirmPassword: data.confirmPassword,
        };
        const res = await dispatch(resetPassword(requestBody));
        handleServiceResponse(res);
        if (res.meta.requestStatus === "fulfilled") {
          setTimeout(() => {
            router.push("/");
          }, 500);
        }
      } else {
        notifyErrors("Mật khẩu xác nhận không khớp");
      }
    }
  };

  return (
    <form
      className="flex flex-col items-start gap-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col w-full">
        <InputBox
          register={register("systemPassword")}
          error={errors.systemPassword}
          title="Mật khẩu hiện tại"
          placeholder="Mật khẩu hiện tại"
          name="systemPassword"
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
        <InputBox
          register={register("confirmPassword")}
          error={errors.confirmPassword}
          title="Xác nhận mật khẩu"
          placeholder="Xác nhận mật khẩu"
          required={true}
          name="confirmPassword"
          type="password"
        />
      </div>
      <button
        // disabled={!enoughField}
        type="submit"
        className={`hover:bg-[#c82222] flex items-center justify-center py-3 px-6 w-full rounded-lg  bg-[#ed1b2f] transition-all duration-100 text-base font-semibold text-white mb-4`}
      >
        Đặt lại mật khẩu
      </button>
    </form>
  );
};

export default RPForm;
