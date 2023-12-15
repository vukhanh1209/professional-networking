"use client";
import InputBox from "../../common/FormInput/FormInput";
import { useState, useCallback, useMemo, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAppDispatch } from "@/redux/hook";
import YourCV from "./YourCV";
import CoverLetter from "./CoverLetter";
import { applyJob } from "@/redux/actions";
import { useRouter } from "next/navigation";

const schema = yup.object().shape({
  candidateName: yup.string().required("Bạn chưa nhập họ tên"),
  coverLetter: yup
    .string()
    .max(500, "Thư xin việc không được dài quá 500 ký tự"),
});

const ApplicationForm = ({ id }: { id: string }) => {
  const [cvURL, setCVURL] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    const params = {
      reqBody: {
        ...data,
        linkCv: cvURL,
      },
      jobId: Number(id),
    };
    const applyResponse = await dispatch(applyJob(params));
    if (applyResponse.meta.requestStatus === "fulfilled") {
      setTimeout(() => {
        router.back();
      }, 2000);
    }
  };

  return (
    <form className=" text-primary-black" onSubmit={handleSubmit(onSubmit)}>
      <InputBox
        register={register("candidateName")}
        title="Họ và tên"
        placeholder="Họ và tên"
        error={errors.candidateName}
        name="candidateName"
        required={true}
        delay="1"
      />
      <YourCV cvURL={cvURL} setCVUrl={setCVURL} />
      <CoverLetter
        register={register("coverLetter")}
        error={errors.coverLetter}
      />
      <button
        type="submit"
        className={`hover:bg-[#c82222] flex items-center justify-center py-3 px-6 w-full rounded-lg  bg-[#ed1b2f] transition-all duration-100 text-base font-semibold text-white mb-4`}
      >
        Gửi CV của tôi
      </button>
    </form>
  );
};

export default ApplicationForm;
