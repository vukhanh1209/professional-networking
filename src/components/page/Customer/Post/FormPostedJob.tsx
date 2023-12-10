import { useAppDispatch } from "@/redux/hook";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormWrapper from "../../Profile/Profile/FormWrapper";
import {
  recruiterGetPostedJob,
  recruiterUpdateJob,
} from "@/redux/actions/recruiter.action";

const schema = yup.object().shape({
  jobTitle: yup.string().required("Vui lòng nhập tiêu đề công việc"),
  minSalary: yup.number(),
  maxSalary: yup.number(),
  location: yup.string().required("Vui lòng nhập nơi làm việc"),
  jobType: yup.string().required("Vui lòng nhập loại công việc"),
  description: yup.string().required("Vui lòng nhập mô tả công việc"),
  requirements: yup.string().required("Vui lòng nhập yêu cầu công việc"),
});

export default function FormPostedJob({
  jobId,
  postData,
  isOpening,
  onClose,
}: any) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const dispatch = useAppDispatch();

  const onSave = async (data: any) => {
    if (data) {
      const request = {
        id: jobId,
        body: data,
      };
      const updateResponse = await dispatch(recruiterUpdateJob(request));
      if (updateResponse.meta.requestStatus === "fulfilled") {
        dispatch(recruiterGetPostedJob(jobId));
      }
    }
  };

  return (
    <>
      {isOpening ? (
        <FormWrapper
          title="Chỉnh sửa bài đăng"
          onClose={onClose}
          onSave={onSave}
          handleSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-10 pt-6 pb-20  pr-6 pl-8 max-h-[400px] overflow-auto text-primary-black">
            <div className="relative flex flex-col gap-2">
              <label htmlFor="jobTitle" className="font-semibold">
                Tiêu đề công việc
                <span className="ml-1 text-primary-red">*</span>
              </label>
              <input
                {...register("jobTitle")}
                type="text"
                readOnly
                value={postData?.title}
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
                </label>
                <input
                  {...register("minSalary")}
                  type="number"
                  defaultValue={postData?.minSalary}
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
                </label>
                <input
                  {...register("maxSalary")}
                  type="number"
                  defaultValue={postData?.maxSalary}
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
              <label htmlFor="location" className="font-semibold">
                Nơi làm việc
                <span className="ml-1 text-primary-red">*</span>
              </label>
              <input
                {...register("location")}
                defaultValue={postData?.location}
                placeholder="Hồ Chí Minh"
                id="location"
                className="w-full p-4 rounded-lg border border-silver-grey"
                name="location"
              />
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
              <input
                {...register("jobType")}
                defaultValue={postData?.jobType}
                placeholder="Remote"
                id="jobType"
                className="w-full p-4 rounded-lg border border-silver-grey"
                name="jobType"
              />
              {errors?.jobType && (
                <span className="absolute text-primary-red text-sm left-0 top-[105%]">
                  {String(errors?.jobType?.message)}
                </span>
              )}
            </div>

            <div className="relative flex flex-col gap-2">
              <label htmlFor="description" className="font-semibold">
                Mô tả công việc
                <span className="ml-1 text-primary-red">*</span>
              </label>
              <textarea
                {...register("description")}
                defaultValue={postData?.description}
                placeholder="Nhập mô tả cụ thể cho công việc của bạn..."
                id="description"
                rows={6}
                className="w-full p-4 rounded-lg border border-silver-grey overflow-auto"
                name="description"
              />
              {errors?.description && (
                <span className="absolute text-primary-red text-sm left-0 top-[105%]">
                  {String(errors?.description?.message)}
                </span>
              )}
            </div>

            <div className="relative flex flex-col gap-2">
              <label htmlFor="requirements" className="font-semibold">
                Yêu cầu công việc
                <span className="ml-1 text-primary-red">*</span>
              </label>
              <textarea
                {...register("requirements")}
                defaultValue={postData?.requirements}
                placeholder="Nhập yêu cầu cụ thể cho công việc của bạn..."
                id="requirements"
                rows={6}
                className="w-full p-4 rounded-lg border border-silver-grey overflow-auto"
                name="requirements"
              />
              {errors?.requirements && (
                <span className="absolute text-primary-red text-sm left-0 top-[105%]">
                  {String(errors?.requirements?.message)}
                </span>
              )}
            </div>
          </div>
        </FormWrapper>
      ) : null}
    </>
  );
}
