"use client";
import JobCard from "@/components/common/JobCard";
import { getAppliedJobs, getSavedJobs, getViewedJobs } from "@/redux/actions";
import { useAppDispatch } from "@/redux/hook";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Empty from "@/images/my-job/empty.svg";

export default function MyJobList() {
  const [tab, setTab] = useState<string>("");
  const [jobsData, setJobsData] = useState<any>();
  const jobDataList = jobsData?.jobs?.content || jobsData?.content || jobsData;
  const pathName = usePathname();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const tabName = pathName.split("/")[2];
    if (tabName) setTab(tabName);
    else setTab("saved");
  }, []);

  useEffect(() => {
    async function fetchJobData() {
      let params = {
        page: 0,
        size: 20,
        sort: "Xem gần nhất",
      };
      switch (tab) {
        case "recent-viewed": {
          const jobData = await dispatch(getViewedJobs(params));
          setJobsData(jobData.payload);
          break;
        }
        case "applied": {
          params = {
            ...params,
            sort: "Ngày ứng tuyển gần nhất",
          };
          const jobData: any = await dispatch(getAppliedJobs(params));
          setJobsData(jobData.payload);
          break;
        }
        case "saved": {
          const savedParams = {
            sort: "Ngày ứng tuyển gần nhất",
          };
          const jobData: any = await dispatch(getSavedJobs(savedParams));
          setJobsData(jobData.payload);
          break;
        }
      }
    }

    if (tab) {
      fetchJobData();
    }
  }, [tab]);

  return (
    <section className=" w-full max-w-[1340px] mx-auto pb-10">
      {typeof jobsData === "object" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {jobDataList?.map((data: any, index: number) => (
            <JobCard
              key={index}
              data={data}
              isSelected={false}
              paddingClassName="px-4 pt-4 pb-5"
            />
          ))}
        </div>
      ) : (
        <div className=" flex flex-col items-center gap-5 bg-white rounded-lg w-full pt-9 pb-10">
          <Image src={Empty} width={153} height={153} alt="empty" />
          <span className="text-dark-grey font-base">{jobsData}</span>
        </div>
      )}
    </section>
  );
}
