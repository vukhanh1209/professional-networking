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

export default function ApplicationList() {
  const [applications, setApplications] = useState<any[]>();

  const dispatch = useAppDispatch();
  useEffect(() => {
    const jobResponse = dispatch(recruiterAllApplication({}));
    jobResponse.then((response) => {
      if (response.meta.requestStatus === "fulfilled") {
        setApplications(response.payload);
      } else setApplications([]);
    });
  }, []);

  return (
    <section className="w-full py-6">
      {applications ? (
        applications?.length > 0 ? (
          <>
            <h5 className="text-3xl font-bold text-left text-primary-black mb-8">
              Bạn đang có {applications?.length} bài tuyển dụng
            </h5>
            {applications.map((application: any, index: number) => (
              <ApplicationCard key={index} data={application} />
            ))}
            <Pagination total={10} currentPage={1} onChange={() => {}} />
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
