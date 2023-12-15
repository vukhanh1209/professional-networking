"use client";
import {
  recruiterApplicationById,
  recruiterUpdateApplication,
} from "@/redux/actions/recruiter.action";
import { useAppDispatch } from "@/redux/hook";
import { selectApplicationData } from "@/redux/reducers/recruiterSlice";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BlueEye from "@/images/blue-eye.svg";
import { ApplicationStatus } from "@/types/recruiter.type";
import { ClipLoader } from "react-spinners";

const APPLICATION_STATUS = ["DELIVERED", "APPROVED", "REJECTED"];

export default function ApplicationDetail() {
  const searchParams = useSearchParams();
  const applicationId = searchParams.get("id");
  const applicationData = useSelector(selectApplicationData);
  const [applicationStatus, setApplicationStatus] =
    useState<ApplicationStatus>("DELIVERED");

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (applicationId) {
      dispatch(recruiterApplicationById(applicationId));
    }
  }, [applicationId]);

  useEffect(() => {
    if (applicationData.status) {
      setApplicationStatus(applicationData.status);
    }
  }, [applicationData.status]);

  const onChangeApplicationStatus = (status: ApplicationStatus) => {
    setApplicationStatus(status);
  };

  const handleUpdateApplicationStatus = () => {
    const request = {
      applicationId,
      requestBody: {
        status: applicationStatus,
      },
    };
    dispatch(recruiterUpdateApplication(request));
  };
  return (
    <section className="relative flex flex-col gap-8  bg-white w-full h-fit pt-10 lg:p-8 lg:rounded-xl text-primary-black">
      {applicationData ? (
        <>
          <div className="flex flex-col lg:flex-row justify-between gap-5 lg:items-center w-full">
            <Link
              href={`/customer/posted-job?id=${applicationData?.jobId}`}
              className="text-2xl font-bold hover:text-hyperlink"
            >
              {applicationData?.jobTitle}
            </Link>
            <div className="relative group text-base">
              <button
                disabled={applicationData?.status !== "DELIVERED"}
                className={`${
                  applicationStatus === "DELIVERED" &&
                  "border-hyperlink text-hyperlink"
                } ${
                  applicationStatus === "APPROVED" &&
                  "border-available-green text-available-green"
                } ${
                  applicationStatus === "REJECTED" &&
                  "border-primary-red text-primary-red"
                } px-5 py-2 rounded-lg border  max-w-[160px] w-full`}
              >
                {applicationStatus || applicationData?.status}
              </button>
              {applicationData?.status === "DELIVERED" ? (
                <>
                  <div className="h-3 w-full absolute top-[100%]"></div>
                  <ul className="absolute top-[100%] group-hover:visible group-hover:opacity-100 invisible opacity-0 transition-opacity w-full flex duration-500 border border-dropdown-border mt-2 flex-col bg-white rounded-lg p-2 z-50 shadow-lg text-rich-grey">
                    {APPLICATION_STATUS.filter(
                      (status) => status != applicationStatus
                    ).map((status: any, index: number) => (
                      <li
                        onClick={() => onChangeApplicationStatus(status)}
                        key={index}
                        className={`px-3 py-2 hover:bg-light-grey cursor-pointer rounded-lg`}
                      >
                        {status}
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
            </div>
          </div>

          <div className="flex flex-col">
            <h5 className="text-xl mb-3 font-medium">Thông tin ứng viên:</h5>
            <div className="flex gap-5 border border-silver-grey rounded-lg px-4 py-3">
              <div className="flex flex-col gap-2 min-w-[120px]">
                <span>Tên ứng viên:</span>
                <span>Email: </span>
                <span>Số điện thoại: </span>
                <span>Ngày sinh: </span>
                <span>Địa chỉ: </span>
              </div>
              <div className="flex flex-col gap-2 w-full overflow-hidden text-ellipsis">
                <p className="text-ellipsis max-w-full overflow-hidden">
                  {applicationData?.candidateName}
                </p>
                <p className="text-ellipsis max-w-full overflow-hidden">
                  {applicationData?.email}
                </p>
                <p className="text-ellipsis max-w-full overflow-hidden">
                  {applicationData?.phoneNumber}
                </p>
                <p className="text-ellipsis max-w-full overflow-hidden">
                  {applicationData?.birthdate}
                </p>
                <p className="text-ellipsis max-w-full overflow-hidden">
                  {applicationData?.address}
                </p>
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
          {applicationData?.coverLetter ? (
            <div className="flex flex-col">
              <h3 className="text-xl mb-3 font-medium">Thư xin việc</h3>
              <p className="w-full text-primary-black border border-silver-gray rounded-lg px-4 py-3">
                {applicationData?.coverLetter}
              </p>
            </div>
          ) : null}
          <div className="flex justify-center pb-10 mt-5">
            <button
              onClick={handleUpdateApplicationStatus}
              className="text-white bg-primary-red text-base lg:text-lg py-3 px-8 rounded-lg hover:bg-dark-red w-fit transition-all"
            >
              Cập nhật đơn ứng tuyển
            </button>
          </div>
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <ClipLoader color="#ed1b2f" size={50} />
        </div>
      )}
    </section>
  );
}
