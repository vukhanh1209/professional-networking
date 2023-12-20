import { useAppDispatch } from "@/redux/hook";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormWrapper from "../../Profile/Profile/FormWrapper";
import {
  recruiterGetPostedJob,
  recruiterGetProfile,
  recruiterUpdateJob,
  recruiterUpdateProfile,
} from "@/redux/actions/recruiter.action";
import { JOB_TYPE, LOCATION } from "@/const/job";
import { isValidMotionProp } from "framer-motion";
import { phoneRegExp } from "@/const/regExp";
import { RecruiterProfile } from "@/redux/reducers/recruiterSlice";

const schema = yup.object().shape({
  address: yup.string().required("Vui lòng nhập địa chỉ công ty"),
  description: yup.string().required("Vui lòng nhập mô tả"),
  foundedDate: yup.string().required("Vui lòng chọn ngày thành lập"),
  industry: yup.string().required("Vui lòng nhập lĩnh vực"),
  companyName: yup.string().required("Vui lòng nhập tên công ty"),
  phoneNumber: yup
    .string()
    .required("Vui lòng nhập số điện thoại")
    .matches(phoneRegExp, "Số điện thoại chưa hợp lệ"),
  website: yup.string(),
  minCompanySize: yup.number().required("Vui lòng nhập quy mô công ty"),
  maxCompanySize: yup.number().required("Vui lòng nhập quy mô công ty"),
  country: yup.string().required("Vui lòng nhập quốc gia"),
  workingFrom: yup.string().required("Vui lòng nhập thời gian làm việc"),
  workingTo: yup.string().required("Vui lòng nhập thời gian làm việc"),
  overtimePolicy: yup.string().required("Vui lòng nhập chính sách OT"),
  companyType: yup.string().required("Vui lòng nhập loại công ty"),
  companyKeySkill: yup
    .string()
    .required("Vui lòng các công nghệ chính của công ty bạn"),
});

type FormEditProfile = {
  data: RecruiterProfile;
  isOpening: boolean;
  onClose: any;
};

export default function FormEditProfile({
  data,
  isOpening,
  onClose,
}: FormEditProfile) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const dispatch = useAppDispatch();

  const onSave = async (data: any) => {
    if (data) {
      let companyKeySkill = data.companyKeySkill
        .split(",")
        .map((skill: string) => skill.trim());
      companyKeySkill = companyKeySkill.filter((skill: string) => skill !== "");

      const requestBody = {
        ...data,
        companyKeySkill,
      };
      const updateResponse = await dispatch(
        recruiterUpdateProfile(requestBody)
      );
      if (updateResponse.meta.requestStatus === "fulfilled") {
        dispatch(recruiterGetProfile({}));
        onClose();
      }
    }
  };

  return (
    <>
      {isOpening ? (
        <FormWrapper
          title="Chỉnh sửa hồ sơ"
          onClose={onClose}
          onSave={onSave}
          handleSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-10 pt-6 pb-20  pr-6 pl-8 max-h-[400px] overflow-auto text-primary-black">
            <div className="relative flex flex-col gap-2">
              <label htmlFor="companyName" className="font-semibold">
                Tên công ty
                <span className="ml-1 text-primary-red">*</span>
              </label>
              <input
                {...register("companyName")}
                type="text"
                readOnly
                value={data?.companyName}
                id="companyName"
                placeholder="HeyDevs"
                className="w-full p-4 rounded-lg border border-silver-grey outline-none"
                name="companyName"
              />
              {errors?.companyName && (
                <span className="absolute text-primary-red text-sm left-0 top-[105%]">
                  {String(errors?.companyName?.message)}
                </span>
              )}
            </div>

            <div className="relative flex flex-col gap-2">
              <label htmlFor="phoneNumber" className="font-semibold">
                Số điện thoại
                <span className="ml-1 text-primary-red">*</span>
              </label>
              <input
                {...register("phoneNumber")}
                type="text"
                defaultValue={data?.phoneNumber}
                placeholder="+84..."
                id="phoneNumber"
                className="w-full p-4 rounded-lg border border-silver-grey"
                name="phoneNumber"
              />
              {errors?.phoneNumber && (
                <span className="absolute text-primary-red text-sm left-0 top-[105%]">
                  {String(errors?.phoneNumber?.message)}
                </span>
              )}
            </div>

            <div className=" flex flex-col lg:flex-row gap-10 lg:gap-4 w-full">
              <div className="relative flex flex-col gap-2 w-full">
                <label htmlFor="foundedDate" className="font-semibold">
                  Ngày thành lập
                  <span className="ml-1 text-primary-red">*</span>
                </label>
                <input
                  {...register("foundedDate")}
                  type="date"
                  defaultValue={data?.foundedDate}
                  id="foundedDate"
                  className="w-full p-4 rounded-lg border border-silver-grey"
                  name="foundedDate"
                />
                {errors?.foundedDate && (
                  <span className="absolute text-primary-red text-sm left-0 top-[105%] ">
                    {String(errors?.foundedDate?.message)}
                  </span>
                )}
              </div>
              <div className="relative flex flex-col gap-2  w-full">
                <label htmlFor="industry" className="font-semibold">
                  Lĩnh vực
                  <span className="ml-1 text-primary-red">*</span>
                </label>
                <input
                  {...register("industry")}
                  type="text"
                  defaultValue={data?.industry}
                  placeholder="Technology"
                  id="industry"
                  className="w-full p-4 rounded-lg border border-silver-grey"
                  name="industry"
                />
                {errors?.industry && (
                  <span className="absolute text-primary-red text-sm left-0 top-[105%]  ">
                    {String(errors?.industry?.message)}
                  </span>
                )}
              </div>
            </div>

            <div className=" flex flex-col lg:flex-row gap-10 lg:gap-4 w-full">
              <div className="relative flex flex-col gap-2 w-full">
                <label htmlFor="workingFrom" className="font-semibold">
                  Thời gian bắt đầu làm việc
                  <span className="ml-1 text-primary-red">*</span>
                </label>
                <input
                  {...register("workingFrom")}
                  type="text"
                  defaultValue={data?.workingFrom}
                  placeholder="8AM"
                  id="workingFrom"
                  className="w-full p-4 rounded-lg border border-silver-grey"
                  name="workingFrom"
                />
                {errors?.workingFrom && (
                  <span className="absolute text-primary-red text-sm left-0 top-[105%] ">
                    {String(errors?.workingFrom?.message)}
                  </span>
                )}
              </div>
              <div className="relative flex flex-col gap-2  w-full">
                <label htmlFor="workingTo" className="font-semibold">
                  Thời gian kết thúc
                  <span className="ml-1 text-primary-red">*</span>
                </label>
                <input
                  {...register("workingTo")}
                  type="text"
                  defaultValue={data?.workingTo}
                  placeholder="6PM"
                  id="workingTo"
                  className="w-full p-4 rounded-lg border border-silver-grey"
                  name="workingTo"
                />
                {errors?.workingTo && (
                  <span className="absolute text-primary-red text-sm left-0 top-[105%]  ">
                    {String(errors?.workingTo?.message)}
                  </span>
                )}
              </div>
            </div>

            <div className=" flex flex-col lg:flex-row gap-10 lg:gap-4 w-full">
              <div className="relative flex flex-col gap-2 w-full">
                <label htmlFor="minCompanySize" className="font-semibold">
                  Số nhân viên tối thiểu
                  <span className="ml-1 text-primary-red">*</span>
                </label>
                <input
                  {...register("minCompanySize")}
                  type="text"
                  defaultValue={data?.minCompanySize}
                  placeholder="50"
                  id="minCompanySize"
                  className="w-full p-4 rounded-lg border border-silver-grey"
                  name="minCompanySize"
                />
                {errors?.minCompanySize && (
                  <span className="absolute text-primary-red text-sm left-0 top-[105%] ">
                    {String(errors?.minCompanySize?.message)}
                  </span>
                )}
              </div>
              <div className="relative flex flex-col gap-2  w-full">
                <label htmlFor="maxCompanySize" className="font-semibold">
                  Số nhân viên tối đa
                  <span className="ml-1 text-primary-red">*</span>
                </label>
                <input
                  {...register("maxCompanySize")}
                  type="text"
                  defaultValue={data?.maxCompanySize}
                  id="maxCompanySize"
                  placeholder="100"
                  className="w-full p-4 rounded-lg border border-silver-grey"
                  name="maxCompanySize"
                />
                {errors?.maxCompanySize && (
                  <span className="absolute text-primary-red text-sm left-0 top-[105%]  ">
                    {String(errors?.maxCompanySize?.message)}
                  </span>
                )}
              </div>
            </div>

            <div className="relative flex flex-col gap-2 w-full">
              <label htmlFor="address" className="font-semibold">
                Địa chỉ
                <span className="ml-1 text-primary-red">*</span>
              </label>

              <input
                {...register("address")}
                defaultValue={data?.address}
                id="address"
                placeholder="01 Nguyễn Huệ, Quận 1, Hồ Chí Minh"
                className="w-full p-4 rounded-lg border border-silver-grey"
                name="address"
              />
              {errors?.address && (
                <span className="absolute text-primary-red text-sm left-0 top-[105%]">
                  {String(errors?.address?.message)}
                </span>
              )}
            </div>

            <div className="relative flex flex-col gap-2">
              <label htmlFor="country" className="font-semibold">
                Quốc gia
                <span className="ml-1 text-primary-red">*</span>
              </label>
              <input
                {...register("country")}
                defaultValue={data?.country}
                placeholder="USA"
                id="country"
                className="w-full p-4 rounded-lg border border-silver-grey"
                name="country"
              />

              {errors?.country && (
                <span className="absolute text-primary-red text-sm left-0 top-[105%]">
                  {String(errors?.country?.message)}
                </span>
              )}
            </div>

            <div className="relative flex flex-col gap-2">
              <label htmlFor="companyType" className="font-semibold">
                Mô hình công ty
                <span className="ml-1 text-primary-red">*</span>
              </label>
              <input
                {...register("companyType")}
                defaultValue={data?.companyType}
                placeholder="Product"
                id="companyType"
                className="w-full p-4 rounded-lg border border-silver-grey"
                name="companyType"
              />
              {errors?.companyType && (
                <span className="absolute text-primary-red text-sm left-0 top-[105%]">
                  {String(errors?.companyType?.message)}
                </span>
              )}
            </div>

            <div className="relative flex flex-col gap-2">
              <label htmlFor="overtimePolicy" className="font-semibold">
                Chính sách OT
                <span className="ml-1 text-primary-red">*</span>
              </label>
              <input
                {...register("overtimePolicy")}
                defaultValue={data?.overtimePolicy}
                placeholder="Thêm lương OT"
                id="overtimePolicy"
                className="w-full p-4 rounded-lg border border-silver-grey"
                name="overtimePolicy"
              />
              {errors?.overtimePolicy && (
                <span className="absolute text-primary-red text-sm left-0 top-[105%]">
                  {String(errors?.overtimePolicy?.message)}
                </span>
              )}
            </div>

            <div className="relative flex flex-col gap-2">
              <label htmlFor="description" className="font-semibold">
                Mô tả công ty
                <span className="ml-1 text-primary-red">*</span>
              </label>
              <textarea
                {...register("description")}
                defaultValue={data?.description}
                placeholder="Nhập mô tả cho công ty của bạn..."
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
              <label htmlFor="website" className="font-semibold">
                Link website
              </label>
              <input
                {...register("website")}
                defaultValue={data?.website}
                placeholder="Nhập địa chỉ website công ty của bạn"
                id="website"
                className="w-full p-4 rounded-lg border border-silver-grey overflow-auto"
                name="website"
              />
            </div>

            <div className="relative flex flex-col gap-2">
              <label htmlFor="companyKeySkill" className="font-semibold">
                Kỹ năng yêu cầu
                <span className="ml-1 text-primary-red">*</span>
              </label>
              <input
                {...register("companyKeySkill")}
                defaultValue={data?.companyKeySkill}
                placeholder="Java, Spring Boot"
                id="companyKeySkill"
                className="w-full p-4 rounded-lg border border-silver-grey"
                name="companyKeySkill"
              />
              <span className="text-dark-grey text-sm">
                Lưu ý: Các kỹ năng cách nhau bởi dấu phẩy
              </span>
              {errors?.companyKeySkill && (
                <span className="absolute text-primary-red text-sm left-0 top-[105%]">
                  {String(errors?.companyKeySkill?.message)}
                </span>
              )}
            </div>
          </div>
        </FormWrapper>
      ) : null}
    </>
  );
}
