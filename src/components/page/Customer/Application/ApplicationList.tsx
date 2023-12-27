"use client";
import Pagination from "@/components/common/Pagination/Pagination";
import { useAppDispatch } from "@/redux/hook";
import { useEffect, useState } from "react";
import { recruiterAllApplication } from "@/redux/actions/recruiter.action";
import ClipLoader from "react-spinners/ClipLoader";
import Empty from "@/images/my-job/empty.svg";
import Image from "next/image";
import ApplicationCard from "./ApplicationCard";
import { AppicationType, ApplicationStatus } from "@/types/recruiter.type";
import { useSearchParams } from "next/navigation";

type ApplicationsData = {
  content: any[];
  number: number;
  numberOfElements: number;
  size: number;
  totalElements: number;
  totalPages: number;
};

const APPICATION_STATUS: AppicationType[] = ["DELIVERED", "APPROVED"];

export default function ApplicationList() {
  const [applicationsData, setApplicationsData] = useState<ApplicationsData>();
  const [applicationType, setApplicationType] =
    useState<AppicationType>("DELIVERED");
    const searchParams = useSearchParams()
  const applicationList = applicationsData?.content;

  const dispatch = useAppDispatch();
  useEffect(() => {
    const currentPage = Number(searchParams.get("page"));
    const jobResponse = dispatch(
      recruiterAllApplication({
        page: currentPage > 0 ? currentPage - 1 : 0,
        size: 10,
        type: "DELIVERED",
      })
    );
    jobResponse.then((response) => {
      if (response.meta.requestStatus === "fulfilled") {
        setApplicationsData(response.payload);
      }
    });
  }, []);

  const onChagePage = (value: any) => {
    const jobResponse = dispatch(
      recruiterAllApplication({
        page: value - 1,
        size: 10,
        type: applicationType,
      })
    );
    jobResponse.then((response) => {
      if (response.meta.requestStatus === "fulfilled") {
        setApplicationsData(response.payload);
      }
    });
  };

  const onChangeAppicationType = (type: AppicationType) => {
    setApplicationType(type);
    const jobResponse = dispatch(
      recruiterAllApplication({ page: 0, size: 10, type })
    );
    jobResponse.then((response) => {
      if (response.meta.requestStatus === "fulfilled") {
        setApplicationsData(response.payload);
      }
    });
  };

  return (
    <section className="w-full py-6">
      <div className="flex gap-5 mb-10">
        {APPICATION_STATUS.map((status: AppicationType, index: number) => (
          <button
            key={index}
            onClick={() => onChangeAppicationType(status)}
            className={`${
              applicationType === status
                ? "border-primary-red text-primary-red"
                : "border-dark-grey text-dark-grey hover:text-primary-red hover:border-primary-red hover:bg-white-red"
            } px-3 py-2 rounded-lg border-2 text-lg  transition-all`}
          >
            {status}
          </button>
        ))}
      </div>
      {applicationList ? (
        applicationList?.length > 0 ? (
          <>
            <h5 className="text-3xl font-bold text-left text-primary-black mb-8">
              {applicationsData?.totalElements} bài tuyển dụng được tìm thấy
            </h5>
            {applicationList?.map((application: any, index: number) => (
              <ApplicationCard key={index} data={application} />
            ))}
            <Pagination
              total={applicationsData?.totalPages}
              currentPage={applicationsData?.number + 1}
              onChange={onChagePage}
            />
          </>
        ) : (
          <div className="w-full h-full flex flex-col items-center gap-4 justify-center">
            <Image src={Empty} width={153} height={153} alt="empty" />
            <p className="text-rich-grey text-xl text-center">
              {applicationType === "APPROVED"
                ? "Bạn chưa phê duyệt đơn ứng tuyển nào"
                : "Bạn chưa nhận được đơn ứng tuyển"}
            </p>
          </div>
        )
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <ClipLoader color="#ed1b2f" size={50} />
        </div>
      )}
    </section>
  );
}
