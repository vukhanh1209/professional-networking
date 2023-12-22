"use client";
import Image from "next/legacy/image";
import Link from "next/link";

import CompanyAvatar from "@/images/search/companyAvatar.png";
import GreenCoin from "@/images/search/greenCoin.svg";
import RemoteIcon from "@/images/search/remote.svg";
import LocationPin from "@/images/location-pin.svg";
// import HeartIcon from '@/images/search/heart.svg'
import TimeIcon from "@/images/search/time.svg";

import ImageWrapper from "../../common/ImageWrapper";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useAppDispatch } from "@/redux/hook";
import { deleteSavedJob, saveJob } from "@/redux/actions";
import SVGHeart from "@/components/common/SVGHeart/SVGHeart";
import CheckCircle from "@/images/check-circle.svg";

import { calculateElapsedDate } from "@/utils/lib";

// const jobData = {
//     postedDate: 1,
//     title: "[Remote] - Shopify App Dev (ReactJS, Laravel,Hidrogen)",
//     companyAvatar: CompanyAvatar,
//     companyName: "Yet Company",
//     minSalary: 1000,
//     maxSalary: 1500,
//     isRemote: true,
//     location: "Tầng 3A Tòa nhà HATA, Số 103 Phạm Viết Chánh, Phường 19, Binh Thanh, Ho Chi Minh",
//     jobSkills: ["ReactJS", "English", "Lavarel"],
//     benefits: ["Salary review twice a year", "13th month salary", "Working model : Remote"],
//     hot_level: 2
// }

const topReasons = [
  "Salary review twice a year",
  "13th month salary",
  "Working model : Remote",
];
const jobDescription = [
  "Join Shopify's new Hidrogen-powered project",
  "Use Laravel to develop Shopify applications",
  "Work in groups and coordinate work based on the team leader's work assignments",
];

// const requirements = [
//     "At least 2 years of React experience",
//     "Experience with Shopify (Hidrogen) is advantageous",
//     "Know Laravel and use it properly",
//     "Has enthusiasm, responsibility for work and good teamwork skills",
//     "Communication in English, knowing Japanese is advantageous",
//     "Priority given to English CVs"
// ]

const reasonsForWorking = [
  "After a 2-month probationary, working model will be decided at the office, remote or hybrid",
  "Salary review twice a year",
  "Monthly party, and birthday gifts given to employees whose birthdays are that month",
  "Female employee's gifts on March 8 and October 20",
  "Allowances:",
  "Lunch: 50,000 VND",
  "Gasoline, bus, parking fees",
  "Snacks, drinks",
];

const JobDetailCard = ({ data }: any) => {
  const [isSaved, setIsSaved] = useState<boolean>();
  const searchParams = useSearchParams();
  useEffect(() => {
    setIsSaved(data?.isSaved);
  }, [data]);

  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleClickApply = () => {
    router.push(`/application?id=${data?.jobId}`);
  };

  const onSaveJob = async () => {
    if (data?.isSaved) {
      const res = await dispatch(deleteSavedJob(data?.jobId));
      if (res.meta.requestStatus === "fulfilled") setIsSaved(false);
    } else {
      const res = await dispatch(saveJob(data?.jobId));
      if (res.meta.requestStatus === "fulfilled") setIsSaved(true);
    }
  };

  return (
    <article className="flex flex-col gap-3 pt-6 lg:py-6 bg-white lg:rounded-lg w-full h-fit drop-shadow-md text-primary-black">
      <div className="px-5 md:px-6 ">
        <div className="flex flex-col w-full  border-b border-silver-grey pb-2">
          <div className="flex items-center gap-3">
            {/* <div className="flex items-center justify-center px-2 bg-white w-fit aspect-square rounded-lg border border-silver-grey">
                                <ImageWrapper src={jobData.companyAvatar} width={100} alt=""/>
                            </div> */}
            <div className="flex flex-col gap-2 w-full">
              <Link href={`/job-detail?id=${data?.jobId}`}>
                <h1 className="text-2xl font-bold">{data?.title}</h1>
              </Link>
              <div className="text-base text-rich-grey">
                <Link href={`/recruiter?id=${data?.company?.id}`}>
                  {data?.company?.name}
                </Link>
              </div>
              <div className="flex items-center">
                <ImageWrapper
                  src={GreenCoin}
                  height={24}
                  width={24}
                  alt="coin"
                />
                <span className="pl-2 text-available-green text-base font-medium">
                  {data?.minSalary
                    ? `${Number(data?.minSalary)} - ${Number(
                        data?.maxSalary
                      )} USD`
                    : "You'll love it"}
                </span>
              </div>
            </div>
          </div>
          {data?.isApplied ? (
            <div className="flex items-center gap-2 w-full bg-[#eaf9e9] py-2 px-3 text-base text-primary-black mt-4 mb-3 rounded-md">
              <Image
                src={CheckCircle}
                width={24}
                height={24}
                alt="check-circle"
              />
              Đã ứng tuyển {data?.appliedAt}
            </div>
          ) : (
            <div className="flex items-center gap-3 my-4">
              <button
                onClick={handleClickApply}
                className="w-full rounded-lg py-2 px-5 bg-primary-red hover:bg-dark-red transition-all duration-100 "
              >
                <span className="text-base font-medium text-white">
                  Ứng tuyển
                </span>
              </button>

              <button onClick={onSaveJob}>
                <SVGHeart fill={isSaved ? "#ed1b2f" : "none"} />
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="lg:overflow-y-auto lg:max-h-[500px] ">
        <div className="px-6 divide-y divide-dashed border-silver-grey">
          <div className="flex flex-col w-full py-6 gap-2 ">
            <div className="flex items-center text-sm text-rich-grey">
              <div className="flex items-center shrink-0">
                <Image src={LocationPin} className="w-4 h-4" alt="location" />
              </div>
              <span className="pl-2">
                {data?.company?.address || data?.address}
              </span>
            </div>

            <div className="flex items-center text-sm text-rich-grey">
              <div className="flex items-center shrink-0 ">
                <Image src={RemoteIcon} className="w-4 h-4" alt="remote" />
              </div>
              <span className="pl-2">{data?.jobType}</span>
            </div>

            <div className="flex items-center text-sm text-rich-grey">
              <div className="flex items-center shrink-0 ">
                <Image src={TimeIcon} className="w-4 h-4" alt="remote" />
              </div>
              <span className="pl-2">{`${calculateElapsedDate(
                data?.createdDate
              )} ngày trước`}</span>
            </div>

            <div className="flex flex-wrap w-full items-center gap-2 mb-2">
              <span className="text-sm text-rich-grey font-medium mr-2">
                Kỹ năng:{" "}
              </span>
              {data?.skills?.map((skill: string, index: number) => (
                <div
                  key={index}
                  className="py-1 px-[10px] text-xs rounded-full bg-white text-rich-grey border border-silver-grey"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="py-6 gap-2 ">
            <h2 className="text-xl font-bold mb-4">{`${topReasons.length} Lý do để gia nhập công ty`}</h2>
            {renderList(topReasons)}
          </div>

          <div className="py-6 gap-2 ">
            <h2 className="text-xl font-bold mb-4">Mô tả công việc</h2>
            {/* {renderList(data?.description)} */}
            <div
              className="rendered-content__wrapper"
              dangerouslySetInnerHTML={{ __html: data?.description }}
            ></div>
          </div>

          <div className="py-6 gap-2 ">
            <h2 className="text-xl font-bold mb-4">Yêu cầu công việc</h2>
            {/* {renderList(data?.requirements)} */}
            <div
              className="rendered-content__wrapper"
              dangerouslySetInnerHTML={{ __html: data?.requirements }}
            ></div>
          </div>

          <div className="py-6 gap-2 ">
            <h2 className="text-xl font-bold mb-4">
              Tại sao bạn sẽ yêu thích làm việc tại đây
            </h2>
            {renderList(reasonsForWorking)}
          </div>
        </div>
      </div>
    </article>
  );
};

const renderList = (listData: any) => {
  let data = listData;
  if (typeof data === "string") data = [data];

  return (
    <ul className="my-2">
      {data?.map((data: any, index: number) => (
        <li
          key={index}
          className="flex gap-3 items-start text-base text-primary-black py-[6px]"
        >
          <div className="w-[6px] h-[6px] rounded-full shrink-0 bg-primary-red mt-[9px]"></div>
          {data}
        </li>
      ))}
    </ul>
  );
};

export default JobDetailCard;
