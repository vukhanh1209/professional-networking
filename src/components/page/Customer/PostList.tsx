"use client";

import Pagination from "@/components/common/Pagination/Pagination";
import PostCard from "./PostCard";
import { useAppDispatch } from "@/redux/hook";
import { useEffect, useState } from "react";
import { recruiterGetPostedJobs } from "@/redux/actions/recruiter.action";
import ClipLoader from "react-spinners/ClipLoader";

export default function PostList() {
  const [postedJobs, setPostedJobs] = useState<any[]>();
  console.log(
    "Log ~ file: PostList.tsx:11 ~ PostList ~ postedJobs:",
    postedJobs
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    const jobResponse = dispatch(recruiterGetPostedJobs({}));
    jobResponse.then((response) => {
      setPostedJobs(response.payload);
    });
  }, []);

  return (
    <section className="w-full py-6">
      {postedJobs ? (
        <>
          <h5 className="text-3xl font-bold text-left text-primary-black mb-8">
            Bạn đang có {postedJobs?.length} bài tuyển dụng
          </h5>
          {postedJobs.map((post: any, index: number) => (
            <PostCard key={index} data={post} />
          ))}
          <Pagination total={10} currentPage={1} onChange={() => {}} />
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <ClipLoader color="#ed1b2f" size={50} />
        </div>
      )}
    </section>
  );
}
