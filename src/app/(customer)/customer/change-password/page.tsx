"use client";
import InputBox from "@/components/common/FormInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { notifyErrors } from "@/utils/notification";
import { useAppDispatch } from "@/redux/hook";
import { recruiterChangePassword } from "@/redux/actions/recruiter.action";

const schema = yup.object().shape({
  newPassword: yup
    .string()
    .required("Bạn chưa nhập mật khẩu mới")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/,
      "Mật khẩu phải chứa 8-16 kí từ bao gồm chữ in hoa, chữ thường, số và kí tự đặc biệt"
    ),
  currentPassword: yup.string().required("Bạn chưa nhập mật khẩu hiện tại"),
  confirmPassword: yup
    .string()
    .required("Bạn chưa xác nhận lại mật khẩu")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/,
      "Mật khẩu phải chứa 8-16 kí từ bao gồm chữ in hoa, chữ thường, số và kí tự đặc biệt"
    ),
});

export default function ChangePassword() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const dispatch = useAppDispatch();
  const onSubmit = async (data: any) => {
    if (data) {
      if (data.newPassword === data.confirmPassword) {
        await dispatch(recruiterChangePassword(data));
      } else {
        notifyErrors("Mật khẩu xác nhận không khớp");
      }
    }
  };
  return (
    <div className="w-full px-5 py-8 md:px-10 md:py-10 ">
      <h1 className="font-bold text-2xl md:text-3xl text-primary-black mb-5 md:mb-8">
        Thay đổi mật khẩu
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-fit w-full bg-white rounded-lg max-w-full"
      >
        <div className="flex flex-col w-full">
          <InputBox
            register={register("currentPassword")}
            error={errors.currentPassword}
            title="Mật khẩu hiện tại"
            placeholder="Mật khẩu hiện tại"
            name="currentPassword"
            required={true}
            delay="1"
            type="password"
          />
          <InputBox
            register={register("newPassword")}
            error={errors.newPassword}
            title="Mật khẩu mới"
            placeholder="Mật khẩu mới"
            required={true}
            name="newPassword"
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
          type="submit"
          className={`hover:bg-[#c82222] flex items-center justify-center py-3 px-6 w-full rounded-lg  bg-[#ed1b2f] transition-all duration-100 text-base font-semibold text-white mb-4 mt-5`}
        >
          Đổi mật khẩu
        </button>
      </form>
    </div>
  );
}
