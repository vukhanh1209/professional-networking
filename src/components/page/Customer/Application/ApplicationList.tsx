"use client";
import Pagination from "@/components/common/Pagination/Pagination";
import PostCard from "../Post/PostCard";
import { useAppDispatch } from "@/redux/hook";
import { useEffect, useState } from "react";
import { recruiterAllApplication } from "@/redux/actions/recruiter.action";
import ClipLoader from "react-spinners/ClipLoader";
import Empty from "@/images/my-job/empty.svg";
import Image from "next/image";
import ApplicationCard from "./ApplicationCard";

type ApplicationsData = {
  content: any[];
  number: number;
  numberOfElements: number;
  size: number;
  totalElements: number;
  totalPages: number;
};

export default function ApplicationList() {
  const [applicationsData, setApplicationsData] = useState<ApplicationsData>();
  const applicationList = applicationsData?.content;

  const dispatch = useAppDispatch();
  useEffect(() => {
    const jobResponse = dispatch(
      recruiterAllApplication({ page: 0, size: 10 })
    );
    jobResponse.then((response) => {
      if (response.meta.requestStatus === "fulfilled") {
        setApplicationsData(response.payload);
      }
    });
  }, []);

  const onChagePage = (value: any) => {
    const jobResponse = dispatch(
      recruiterAllApplication({ page: value - 1, size: 10 })
    );
    jobResponse.then((response) => {
      if (response.meta.requestStatus === "fulfilled") {
        setApplicationsData(response.payload);
      }
    });
  };

  return (
    <section className="w-full py-6">
      {applicationList ? (
        applicationList?.length > 0 ? (
          <>
            <h5 className="text-3xl font-bold text-left text-primary-black mb-8">
              Bạn đang có {applicationList?.length} bài tuyển dụng
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
              Bạn chưa nhận được đơn ứng tuyển
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
