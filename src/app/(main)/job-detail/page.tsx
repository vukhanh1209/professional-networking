"use client";
import JobDetailCard from "@/components/page/JobDetail/JobDetailCard";
import CompanyInfoCard from "@/components/page/JobDetail/CompanyInfoCard";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useAppDispatch } from "@/redux/hook";
import { jobGetDataById, markAsViewd } from "@/redux/actions/job.action";
import { useSearchParams } from "next/navigation";
import { LocalStorage } from "@/utils/LocalStorage";

export default function JobDetail() {
  const [jobData, setJobData] = useState<any>();
  const [id, setId] = useState<any>();

  const dispatch = useAppDispatch();
  const searchParam = useSearchParams();

  useEffect(() => {
    setId(searchParam.get("id"));
  }, []);

  useEffect(() => {
    async function fetchJob() {
      const getJobDataResponse = await dispatch(jobGetDataById(id));
      if (getJobDataResponse.meta.requestStatus === "fulfilled")
        setJobData(getJobDataResponse.payload);
    }
    if (id) {
      fetchJob();
      if (LocalStorage.getAccessToken()) dispatch(markAsViewd(id));
    }
  }, [id]);

  return (
    <div className="lg:sticky lg:top-[56px] mx-auto max-w-[1340px]">
      <div className="grid grid-cols-12 lg:pt-8 pb-16 ">
        <div className="col-span-full lg:col-span-8 w-full">
          <JobDetailCard data={jobData} />
        </div>
        <div className="col-span-full lg:col-span-4 w-full mt-8 lg:mt-0 lg:pl-6">
          <CompanyInfoCard data={jobData} />
        </div>
      </div>
    </div>
  );
}
