"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import JobCard from "../../common/JobCard/JobCard";

import CompanyAvatar from "@/images/search/companyAvatar.png";
import {
  selectSearchJobsData,
  setSelectedJob,
} from "@/redux/reducers/jobSlice";
import { useCallback, useState } from "react";

const jobData = {
  postedDate: 1,
  title: "[Remote] - Shopify App Dev (ReactJS, Laravel,Hidrogen)",
  companyAvatar: CompanyAvatar,
  companyName: "Yet Company",
  minSalary: 1000,
  maxSalary: 1500,
  isRemote: true,
  location: "Ho Chi Minh",
  jobSkills: ["ReactJS", "English", "Lavarel"],
  benefits: [
    "Salary review twice a year",
    "13th month salary",
    "Working model : Remote",
  ],
  hot_level: 2,
};

const JobList = () => {
  const [selectedJobIndex, setSelectedJobIndex] = useState<number>(0);
  const seachJobsData = useAppSelector(selectSearchJobsData);
  const dispatch = useAppDispatch();
  const onClickJobCard = useCallback(
    (index: number) => {
      setSelectedJobIndex(index);
      dispatch(setSelectedJob(index));
    },
    [selectedJobIndex]
  );

  return (
    <div className="col-span-full lg:col-span-5 lg:pr-6">
      {seachJobsData?.jobs?.map((jobData: any, index: number) => (
        <button
          key={index}
          onClick={() => onClickJobCard(index)}
          className="w-full text-left"
        >
          <JobCard data={jobData} isSelected={selectedJobIndex === index} />
        </button>
      ))}
    </div>
  );
};

export default JobList;
