"use client";
import { recruiterApplicationById } from "@/redux/actions/recruiter.action";
import { useAppDispatch } from "@/redux/hook";
import { selectApplicationData } from "@/redux/reducers/recruiterSlice";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import BlueEye from "@/images/blue-eye.svg";

export default function ApplicationDetail() {
  const searchParams = useSearchParams();
  const applicationId = searchParams.get("id");
  const applicationData = useSelector(selectApplicationData);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (applicationId) {
      dispatch(recruiterApplicationById(applicationId));
    }
  }, [applicationId]);

  return (
    <section className="relative flex flex-col gap-8  bg-white w-full h-fit p-5 lg:p-8 lg:rounded-xl text-primary-black">
      <div className="absolute right-5 top-6">
        <button className="px-3 py-2 rounded-lg border border-available-green text-available-green text-base">
          {applicationData?.status}
        </button>
      </div>
      <Link
        href={`/customer/posted-job?id=${applicationData?.jobId}`}
        className="text-2xl font-bold hover:text-hyperlink"
      >
        {applicationData?.jobTitle}
      </Link>

      <div className="flex flex-col">
        <h5 className="text-xl mb-3 font-medium">Thông tin ứng viên:</h5>
        <div className="flex gap-5 border border-silver-grey rounded-lg px-4 py-3">
          <div className="flex flex-col gap-2">
            <span>Tên ứng viên:</span>
            <span>Email: </span>
            <span>Số điện thoại: </span>
            <span>Ngày sinh: </span>
            <span>Địa chỉ: </span>
          </div>
          <div className="flex flex-col gap-2">
            <span>{applicationData?.candidateName}</span>
            <span>{applicationData?.email}</span>
            <span>{applicationData?.phoneNumber}</span>
            <span>{applicationData?.birthdate}</span>
            <span>{applicationData?.address}</span>
          </div>
        </div>
      </div>

      <div className="flex gap-3 w-full">
        <h5 className="font-medium text-xl whitespace-nowrap">Link CV:</h5>
        <Link
          href={`${applicationData?.linkCV}`}
          target="_blank"
          className="flex gap-2 items-center text-hyperlink hover:bg-blue-100 w-fit px-2 py-1 rounded-lg transition-all"
        >
          <p className="">Xem CV ứng viên</p>
          <Image src={BlueEye} alt="eye" width={24} height={24} />
        </Link>
      </div>

      <div className="flex flex-col">
        <h3 className="text-xl mb-3 font-medium">Thư xin việc</h3>
        <p className="w-full text-primary-black border border-silver-gray rounded-lg px-4 py-3">
          {applicationData?.coverLetter}
        </p>
      </div>
    </section>
  );
}
