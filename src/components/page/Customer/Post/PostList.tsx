"use client";

import Pagination from "@/components/common/Pagination/Pagination";
import PostCard from "./PostCard";
import { useAppDispatch } from "@/redux/hook";
import { useEffect, useState } from "react";
import { recruiterGetPostedJobs } from "@/redux/actions/recruiter.action";
import ClipLoader from "react-spinners/ClipLoader";
import Empty from "@/images/my-job/empty.svg";
import Image from "next/image";

export default function PostList() {
  const [postedJobs, setPostedJobs] = useState<any[]>();

  const dispatch = useAppDispatch();
  useEffect(() => {
    const jobResponse = dispatch(recruiterGetPostedJobs({}));
    jobResponse.then((response) => {
      if (response.meta.requestStatus === "fulfilled") {
        setPostedJobs(response.payload);
      } else setPostedJobs([]);
    });
  }, []);

  return (
    <section className="w-full py-6">
      {postedJobs ? (
        postedJobs?.length > 0 ? (
          <>
            <h5 className="text-2xl md:text-3xl font-bold text-left text-primary-black mb-8">
              Bạn đang có {postedJobs?.length} bài tuyển dụng
            </h5>
            {postedJobs.map((post: any, index: number) => (
              <PostCard key={index} data={post} />
            ))}
            <Pagination total={10} currentPage={1} onChange={() => {}} />
          </>
        ) : (
          <div className="w-full h-full flex flex-col items-center gap-4 justify-center">
            <Image src={Empty} width={153} height={153} alt="empty" />
            <p className="text-rich-grey text-xl text-center">
              Bạn chưa có bài tuyển dụng nào
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
