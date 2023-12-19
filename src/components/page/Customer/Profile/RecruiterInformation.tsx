"use client";
import { useAppSelector } from "@/redux/hook";
import { selectRecruiterProfile } from "@/redux/reducers/recruiterSlice";

const companyProfile = {
  type: "Sản phẩm",
  size: "1000+",
  country: "Australia",
  working_day: "Thứ 2 - Thứ 6",
  ot_policy: "Không có OT",
};

export default function RecruiterInformation() {
  const recruiterProfile = useAppSelector(selectRecruiterProfile);

  return (
    <div className="divide-y divide-dashed divide-silver-grey bg-white w-full rounded-lg drop-shadow-lg text-rich-grey px-6 pt-6 pb-8">
      <h1 className="text-xl lg:text-2xl text-primary-black pb-4 font-bold">
        Thông tin chung
      </h1>
      <div className="divide-y divide-dashed divide-silver-grey lg:divide-y-0 grid grid-cols-3 w-full lg:gap-y-4 lg:pt-4">
        <div className="flex justify-between lg:flex-col col-span-full lg:col-span-1 py-2 lg:py-0 lg:pr-4">
          <h5 className="text-base lg:text-sm text-dark-grey">
            Mô hình công ty
          </h5>
          <span className="text-base text-primary-black">
            {recruiterProfile?.companyType || "Product"}
          </span>
        </div>
        <div className="flex justify-between lg:flex-col col-span-full lg:col-span-1 py-2 lg:py-0 lg:pr-4">
          <h5 className="text-base lg:text-sm text-dark-grey">
            Quy mô công ty
          </h5>
          <span className="text-base text-primary-black">
            {recruiterProfile?.companySize || "100 - 200"}
          </span>
        </div>
        <div className="flex justify-between lg:flex-col col-span-full lg:col-span-1 py-2 lg:py-0 lg:pr-4">
          <h5 className="text-base lg:text-sm text-dark-grey">Quốc gia</h5>
          <span className="text-base text-primary-black">
            {recruiterProfile?.country || "USA"}
          </span>
        </div>
        <div className="flex justify-between lg:flex-col col-span-full lg:col-span-1 py-2 lg:py-0 lg:pr-4">
          <h5 className="text-base lg:text-sm text-dark-grey">
            Thời gian làm việc
          </h5>
          <span className="text-base text-primary-black">
            {companyProfile.working_day}
          </span>
        </div>
        <div className="flex justify-between lg:flex-col col-span-full lg:col-span-1 py-2 lg:py-0 lg:pr-4">
          <h5 className="text-base lg:text-sm text-dark-grey">
            Làm việc ngoài giờ
          </h5>
          <span className="text-base text-primary-black">
            {companyProfile.ot_policy}
          </span>
        </div>
      </div>
    </div>
  );
}
