"use client";
import Image from "next/legacy/image";
import Link from "next/link";

import GreenCoin from "@/images/search/greenCoin.svg";
import RemoteIcon from "@/images/search/remote.svg";
import LocationPin from "@/images/location-pin.svg";
import { calculateElapsedDate } from "@/utils/lib";
import CompanyAvatar from "@/images/search/companyAvatar.png";
import { useRouter, useSearchParams } from "next/navigation";

import { useMemo } from "react";

interface PostCardProps {
  data?: any;
}

const fakeData = {
  appliedDate: 10,
  title: "[Remote] - Shopify App Dev (ReactJS, Laravel,Hidrogen)",
  companyAvatar: CompanyAvatar,
  companyName: "Yet Company",
  minSalary: 1000,
  maxSalary: 1500,
  isRemote: false,
  location: "Ho Chi Minh",
  skills: ["ReactJS", "English", "Lavarel"],
  level: "SUPER_HOT",
  benefits: [
    "Salary review twice a year",
    "13th month salary",
    "Working model : Remote",
  ],
  createdAt: "01/12/2023",
  jobId: 1,
  address: "55 Nam Kỳ Khởi Nghĩa, Quận 1",
};

const PostCard = ({ data }: PostCardProps) => {
  const router = useRouter();

  const postedDescription = useMemo(() => {
    const postedDate = data?.createdDate;
    return `Đăng ${calculateElapsedDate(postedDate)} ngày trước`;
  }, [data?.createdDate]);

  const expiredDescription = useMemo(() => {
    const expiredDate = data?.expiredDate;
    return `Hết hạn: ${calculateElapsedDate(expiredDate)} ngày`;
  }, [data?.expiredDate]);

  const onClickPostCard = () => {
    router.push(`posted-job?id=${data?.jobId}`);
  };

  return (
    <div
      onClick={onClickPostCard}
      className={`bg-white relative mb-4 rounded-lg w-full h-fit cursor-pointer shadow-md hover:shadow-xl transition-all duration-100`}
    >
      <div
        className={`flex flex-col p-6 py-4 w-full divide-y divide-dashed divide-silver-grey`}
      >
        <div className="flex flex-col pb-3 gap-3 ">
          <div className="flex items-end justify-between w-full">
            <span className="text-sm font-medium text-dark-grey">
              {postedDescription}
            </span>
            <span className="text-sm font-medium text-dark-red">
              {expiredDescription}
            </span>
          </div>
          <Link href={`/job-detail?id=${data?.jobId}`} className="w-fit">
            <h1 className="text-lg font-bold text-primary-black w-fit">
              {data?.title}
            </h1>
          </Link>
          <div className="flex items-center">
            <div className="flex items-center shrink-0 w-5 h-5">
              <Image src={GreenCoin} className="w-5 h-5" alt="coin" />
            </div>
            <span className="pl-2 text-available-green text-base font-medium">
              {data?.minSalary
                ? `${data?.minSalary} - ${data?.maxSalary} USD`
                : "You'll love it"}
            </span>
          </div>
        </div>
        <div className="flex flex-col py-2 w-full ">
          <div className="flex items-center mt-1 text-sm text-rich-grey">
            <div className="flex items-center shrink-0 ">
              <Image src={RemoteIcon} className="w-4 h-4" alt="remote" />
            </div>
            {data?.jobType ? (
              <span className="pl-2">{data?.jobType}</span>
            ) : null}
          </div>

          <div className="flex items-center mt-1 text-sm text-rich-grey">
            <div className="flex items-center shrink-0">
              <Image src={LocationPin} className="w-4 h-4" alt="location" />
            </div>
            <span className="pl-2">{data?.address}</span>
          </div>

          {fakeData?.skills?.length > 0 && (
            <div className="flex flex-wrap w-full items-center gap-2 mt-3 mb-2">
              {fakeData?.skills.map((skill: string, index: number) => (
                <div
                  key={index}
                  className="py-1 px-[10px] text-xs rounded-full bg-white text-rich-grey border border-silver-grey"
                >
                  {skill}
                </div>
              ))}
            </div>
          )}
        </div>
        {fakeData?.benefits && (
          <ul className="py-3">
            {fakeData.benefits.map((benefit: any, index: number) => (
              <li
                key={index}
                className="flex items-center gap-3 text-sm text-primary-black font-medium mb-1"
              >
                <div className="w-[5px] h-[5px] rounded-full bg-primary-red"></div>
                {benefit}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default PostCard;
