"use client";
import { useAppDispatch } from "@/redux/hook";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { recruiterPostJob } from "@/redux/actions/recruiter.action";
import { JOB_TYPE, LOCATION } from "@/const/job";
import EdtiorWrapper from "@/components/common/EditorWrapper";
import { useMemo, useState } from "react";
import { notifyErrors } from "@/utils/notification";

const schema = yup.object().shape({
  jobTitle: yup.string().required("Vui lòng nhập tiêu đề công việc"),
  minSalary: yup.number().required("Vui lòng nhập mức lương tối thiểu"),
  maxSalary: yup.number().required("Vui lòng nhập mức lương tối đa"),
  location: yup.string().required("Vui lòng nhập nơi làm việc"),
  jobType: yup.string().required("Vui lòng nhập loại công việc"),
  // description: yup.string().required("Vui lòng nhập mô tả công việc"),
  // requirements: yup.string().required("Vui lòng nhập yêu cầu công việc"),
  skills: yup.string().required("Vui lòng nhập kỹ năng yêu cầu cho công việc"),
});

export default function FormPostedJob() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [requirements, setRequirements] = useState("");
  const [requirementsError, setRequirementsError] = useState("");

  const dispatch = useAppDispatch();

  const onSave = async (data: any) => {
    if (!description) {
      setDescriptionError("Vui lòng nhập mô tả công việc");
    }
    if (!requirements) {
      setRequirementsError("Vui lòng nhập yêu cầu công việc");
    }
    if (data && description && description) {
      setDescriptionError("");
      setRequirementsError("");
      let skills = data?.skills
        ?.split(",")
        .map((skill: string) => skill.trim());
      skills = skills?.filter((skill: string) => skill !== "");

      const requestBody = {
        ...data,
        skills,
        description,
        requirements,
      };
      const postJobResponse = await dispatch(recruiterPostJob(requestBody));
      if (postJobResponse.meta.requestStatus === "fulfilled") reset();
    }
  };

  return (
    <div className="w-full recruiter__editor-wrapper">
      <form
        onSubmit={handleSubmit(onSave)}
        className="h-fit w-full bg-white rounded-lg md:px-5 max-w-full"
      >
        <div className="flex justify-between py-4 pr-4 pl-8">
          <h2 className="font-bold text-2xl md:text-3xl text-primary-black ">
            Đăng bài tuyển dụng
          </h2>
        </div>
        <div className="flex flex-col gap-10 pt-6 pb-20  pr-6 pl-8 text-primary-black">
          <div className="relative flex flex-col gap-2">
            <label htmlFor="jobTitle" className="font-semibold">
              Tiêu đề công việc
              <span className="ml-1 text-primary-red">*</span>
            </label>
            <input
              {...register("jobTitle")}
              type="text"
              id="jobTitle"
              placeholder="Software Engineer"
              className="w-full p-4 rounded-lg border border-silver-grey outline-none"
              name="jobTitle"
            />
            {errors?.jobTitle && (
              <span className="absolute text-primary-red text-sm left-0 top-[105%]">
                {String(errors?.jobTitle?.message)}
              </span>
            )}
          </div>

          <div className=" flex flex-col lg:flex-row gap-10 lg:gap-4 w-full">
            <div className="relative flex flex-col gap-2 w-full">
              <label htmlFor="minSalary" className="font-semibold">
                Mức lương tối thiểu
                <span className="ml-1 text-primary-red">*</span>
              </label>
              <input
                {...register("minSalary")}
                type="number"
                defaultValue={0}
                id="minSalary"
                className="w-full p-4 rounded-lg border border-silver-grey"
                name="minSalary"
              />
              {errors?.minSalary && (
                <span className="absolute text-primary-red text-sm left-0 top-[105%] ">
                  {String(errors?.minSalary?.message)}
                </span>
              )}
            </div>
            <div className="relative flex flex-col gap-2  w-full">
              <label htmlFor="maxSalary" className="font-semibold">
                Mức lương tối đa
                <span className="ml-1 text-primary-red">*</span>
              </label>
              <input
                {...register("maxSalary")}
                type="number"
                defaultValue={0}
                id="maxSalary"
                className="w-full p-4 rounded-lg border border-silver-grey"
                name="maxSalary"
              />
              {errors?.maxSalary && (
                <span className="absolute text-primary-red text-sm left-0 top-[105%]  ">
                  {String(errors?.maxSalary?.message)}
                </span>
              )}
            </div>
          </div>

          <div className="relative flex flex-col gap-2">
            <label htmlFor="skills" className="font-semibold">
              Kỹ năng yêu cầu
              <span className="ml-1 text-primary-red">*</span>
            </label>
            <input
              {...register("skills")}
              placeholder="Java, Spring Boot"
              id="skills"
              className="w-full p-4 rounded-lg border border-silver-grey"
              name="skills"
            />
            <span className="text-dark-grey text-sm">
              Lưu ý: Các kỹ năng cách nhau bởi dấu phẩy
            </span>
            {errors?.skills && (
              <span className="absolute text-primary-red text-sm left-0 top-[105%]">
                {String(errors?.skills?.message)}
              </span>
            )}
          </div>

          <div className="relative flex flex-col gap-2">
            <label htmlFor="location" className="font-semibold">
              Nơi làm việc
              <span className="ml-1 text-primary-red">*</span>
            </label>
            <select
              {...register("location")}
              id="location"
              className="w-full p-4 rounded-lg border border-silver-grey"
              name="location"
            >
              {LOCATION.map((location: string, index: number) => (
                <option key={index} value={location}>
                  {location}
                </option>
              ))}
            </select>
            {errors?.location && (
              <span className="absolute text-primary-red text-sm left-0 top-[105%]">
                {String(errors?.location?.message)}
              </span>
            )}
          </div>

          <div className="relative flex flex-col gap-2">
            <label htmlFor="jobType" className="font-semibold">
              Loại công việc
              <span className="ml-1 text-primary-red">*</span>
            </label>
            <select
              {...register("jobType")}
              id="jobType"
              className="w-full p-4 rounded-lg border border-silver-grey"
              name="jobType"
            >
              {JOB_TYPE.map((type: string, index: number) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors?.jobType && (
              <span className="absolute text-primary-red text-sm left-0 top-[105%]">
                {String(errors?.jobType?.message)}
              </span>
            )}
          </div>

          <div className="relative flex flex-col gap-2 max-w-full">
            <label htmlFor="description" className="font-semibold">
              Mô tả công việc
              <span className="ml-1 text-primary-red">*</span>
            </label>
            <EdtiorWrapper
              onChange={(value: string) => setDescription(value)}
              error={descriptionError}
            />
          </div>

          <div className="relative flex flex-col gap-2">
            <label htmlFor="requirements" className="font-semibold">
              Yêu cầu công việc
              <span className="ml-1 text-primary-red">*</span>
            </label>
            <EdtiorWrapper
              onChange={(value: string) => setRequirements(value)}
              error={requirementsError}
            />
          </div>
        </div>
        <div className="flex justify-center px-6 pb-10">
          <button
            type="submit"
            onClick={onSave}
            className="text-white bg-primary-red text-lg py-3 px-8 rounded-lg hover:bg-dark-red max-w-[200px] w-full"
          >
            Đăng bài
          </button>
        </div>
      </form>
    </div>
  );
}
