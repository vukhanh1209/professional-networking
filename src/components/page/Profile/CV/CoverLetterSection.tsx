"use client";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Edit from "@/images/profile/edit.svg";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { writeCoverLetter } from "@/redux/actions";

export default function CoverLetterSection({ defaultCoverLetter }: any) {
  const maxLength = 500;
  const [value, setValue] = useState("");
  const { register, handleSubmit } = useForm();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [coverLetter, setCoverLetter] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleChangeCoverLetter = (e: any) => {
    setValue(e.target.value);
  };

  const onShowEditingSection = () => {
    setIsEditing(true);
  };

  const onSaveChange = async (data: any) => {
    if (data) {
      const res = await dispatch(writeCoverLetter(data));
      if (res.meta.requestStatus === "fulfilled")
        setCoverLetter(data?.coverLetter);
    }
    setIsEditing(false);
  };

  const onCancelEditing = () => {
    setIsEditing(false);
  };
  return (
    <section className="bg-white rounded-lg px-6 pt-6 pb-8 text-primary-black">
      <div
        className={`${
          defaultCoverLetter && "border-b-2 border-silver-grey"
        } flex items-center justify-between w-full pb-4`}
      >
        <h3 className="text-xl mb-3 font-bold">Thư xin việc</h3>
        <button
          onClick={onShowEditingSection}
          className={`${isEditing && "hidden"}`}
        >
          <Image src={Edit} width={20} height={20} alt="edit" />
        </button>
      </div>

      {isEditing ? (
        <form
          onSubmit={handleSubmit(onSaveChange)}
          className="flex flex-col  mt-6"
        >
          <p className="text-sm text-[#979595] italic mb-6">
            Gợi ý: Bắt đầu bằng việc mô tả những gì bạn có thể mang đến cho công
            việc và tại sao công việc này lại khiến bạn hứng thú
          </p>
          <div className="w-full rounded-lg border border-dark-grey p-4">
            <textarea
              {...register("coverLetter")}
              defaultValue={coverLetter || defaultCoverLetter}
              rows={6}
              name="coverLetter"
              onChange={handleChangeCoverLetter}
              className=" placeholder:text-base placeholder:text-dark-grey w-full text-primary-black outline-none rounded-lg"
              placeholder="Nêu nhiều ví dụ cụ thể để làm hồ sơ ứng tuyển của bạn thuyết phục hơn..."
              spellCheck="false"
            ></textarea>
          </div>
          <span className="text-sm text-[#979595]">{`${
            maxLength - value.length
          }/${maxLength} ký tự`}</span>

          <div className="flex justify-end w-full mt-4 gap-[10px]">
            <button
              type="button"
              onClick={onCancelEditing}
              className="text-base text-rich-grey w-fit rounded-lg hover:bg-light-grey py-3 px-6 "
            >
              Hủy
            </button>
            <button
              type="submit"
              className="button--primary w-fit min-w-[140px]"
            >
              Lưu
            </button>
          </div>
        </form>
      ) : (
        <p className="my-6 leading-7">
          {coverLetter ||
            defaultCoverLetter ||
            "Giới thiệu bản thân và lí do vì sao bạn sẽ là lựa chọn tuyển dụng tuyệt vời"}
        </p>
      )}
    </section>
  );
}
