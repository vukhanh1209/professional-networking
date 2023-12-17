"use client";
import Image from "next/legacy/image";
import CompanyAvatar from "@/images/search/companyAvatar.png";
import GreenCoin from "@/images/search/greenCoin.svg";
import RemoteIcon from "@/images/search/remote.svg";
import LocationPin from "@/images/location-pin.svg";
import TimeIcon from "@/images/search/time.svg";
import Edit from "@/images/profile/edit.svg";

import ImageWrapper from "../../../common/ImageWrapper";
import { useRouter, useSearchParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useEffect, useState } from "react";
import {
  recruiterDeleteJob,
  recruiterGetPostedJob,
} from "@/redux/actions/recruiter.action";
import FormPostedJob from "./FormPostedJob";
import { selectPostData } from "@/redux/reducers/postedJobSlice";
import { useSelector } from "react-redux";
import ModalConfirmDelete from "./ModalConfirmDelete";

const jobData = {
  postedDate: 1,
  title: "[Remote] - Shopify App Dev (ReactJS, Laravel,Hidrogen)",
  companyAvatar: CompanyAvatar,
  companyName: "Yet Company",
  minSalary: 1000,
  maxSalary: 1500,
  isRemote: true,
  location:
    "Tầng 3A Tòa nhà HATA, Số 103 Phạm Viết Chánh, Phường 19, Binh Thanh, Ho Chi Minh",
  skills: ["ReactJS", "English", "Lavarel"],
  benefits: [
    "Salary review twice a year",
    "13th month salary",
    "Working model : Remote",
  ],
  hot_level: 2,
};

const topReasons =
  "Salary review twice a year\n 13th month salary\nWorking model : Remote";

const jobDescription = [
  "Join Shopify's new Hidrogen-powered project",
  "Use Laravel to develop Shopify applications",
  "Work in groups and coordinate work based on the team leader's work assignments",
];

const requirements =
  "At least 2 years of React experience\nExperience with Shopify (Hidrogen) is advantageous\nKnow Laravel and use it properly\nHas enthusiasm, responsibility for work and good teamwork skills\nCommunication in English, knowing Japanese is advantageous\nPriority given to English CVs";

const reasonsForWorking =
  "After a 2-month probationary, working model will be decided at the office, remote or hybrid\n Salary review twice a year\nMonthly party, and birthday gifts given to employees whose birthdays are that month\nFemale employee's gifts on March 8 and October 20\nAllowances:\nLunch: 50,000 VND\nGasoline, bus, parking fees\nSnacks, drinks";

const companyProfile = {
  type: "Product",
  size: "51-150",
  country: "Japan",
  working_day: "Thứ 2 - Thứ 6",
  ot_policy: "Thêm lương OT",
};

const PostedJobDetail = () => {
  const searchParams = useSearchParams();
  const jobId = searchParams.get("id");
  const postData = useSelector(selectPostData);
  const [isOpenningModalDelete, setIsOpenningModal] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (jobId) {
      dispatch(recruiterGetPostedJob(jobId));
    }
  }, [jobId]);

  const [isOpeningUpdateForm, setIsOpeningUpdateForm] =
    useState<boolean>(false);
  const onOpenUpdateForm = () => {
    setIsOpeningUpdateForm(true);
  };
  const onCloseUpdateForm = () => {
    setIsOpeningUpdateForm(false);
  };

  const onOpenModalDelete = () => {
    setIsOpenningModal(true);
  };

  return (
    <>
      <article className="flex w-full">
        <div className="flex flex-col gap-3 py-6 bg-white rounded-lg w-full h-fit text-primary-black">
          <div className="px-6 relative">
            <div className="absolute right-6 top-2 flex w-fit gap-5">
              <button onClick={onOpenUpdateForm} className="">
                <Image src={Edit} width={32} height={32} alt="edit" />
              </button>
            </div>
            <div className="flex flex-col w-full  border-b border-silver-grey pb-6">
              <div className="flex flex-col md:flex-row items-center justify-center gap-3">
                <div className="flex items-center justify-center px-2 bg-white w-fit aspect-square rounded-lg border border-silver-grey">
                  <Image
                    src={jobData?.companyAvatar}
                    width={80}
                    className="w-20 md:w-[100px] aspect-auto"
                    alt="avatar"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <h1 className="text-2xl font-bold ">{postData?.title}</h1>
                  <div className="text-base text-rich-grey">
                    {postData?.companyName}
                  </div>
                  <div className="flex items-center">
                    <ImageWrapper
                      src={GreenCoin}
                      height={24}
                      width={24}
                      alt="coin"
                    />
                    <span className="pl-2 text-available-green text-base font-medium">{`${postData?.minSalary} - ${postData?.maxSalary} USD`}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-full ">
            <div className="px-6">
              <div className="flex flex-col w-full py-6 border-b gap-2 border-dashed border-silver-grey">
                <div className="flex items-center text-sm text-rich-grey">
                  <div className="flex items-center shrink-0">
                    <Image
                      src={LocationPin}
                      className="w-4 h-4"
                      alt="location"
                    />
                  </div>
                  <span className="pl-2">{postData?.address}</span>
                </div>

                <div className="flex items-center text-sm text-rich-grey">
                  <div className="flex items-center shrink-0 ">
                    <Image src={RemoteIcon} className="w-4 h-4" alt="remote" />
                  </div>
                  <span className="pl-2">{postData?.jobType}</span>
                </div>

                <div className="flex items-center text-sm text-rich-grey">
                  <div className="flex items-center shrink-0 ">
                    <Image src={TimeIcon} className="w-4 h-4" alt="remote" />
                  </div>
                  <span className="pl-2">{`${jobData?.postedDate} ngày trước`}</span>
                </div>

                <div className="flex flex-wrap w-full items-center gap-2 mb-2">
                  <span className="text-sm text-rich-grey font-medium mr-2">
                    Kỹ năng:
                  </span>
                  {postData?.skills?.map((skill: string, index: number) => (
                    <div
                      key={index}
                      className="py-1 px-[10px] text-xs rounded-full bg-white text-rich-grey border border-silver-grey"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div className="py-6 border-b gap-2 border-dashed border-silver-grey">
                <h2 className="text-xl font-bold mb-4">{`Top 3 lý do để gia nhập công ty`}</h2>
                {renderList(topReasons)}
              </div>

              <div className="py-6 border-b gap-2 border-dashed border-silver-grey">
                <h2 className="text-xl font-bold mb-4">Mô tả công việc</h2>
                {renderList(postData?.description)}
              </div>

              <div className="py-6 border-b gap-2 border-dashed border-silver-grey">
                <h2 className="text-xl font-bold mb-4">Yêu cầu công việc</h2>
                {renderList(postData?.requirements)}
              </div>

              <div className="py-6 border-b gap-2 border-silver-grey">
                <h2 className="text-xl font-bold mb-4">
                  Tại sao bạn sẽ yêu thích làm việc tại đây
                </h2>
                {renderList(reasonsForWorking)}
              </div>

              <div className="flex flex-col w-full py-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold mb-4">
                    {jobData.companyName}
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-y-4">
                  <div className="flex flex-col col-span-1 pr-4">
                    <h5 className="text-sm text-dark-grey">Mô hình công ty</h5>
                    <span className="text-base text-primary-black">
                      {companyProfile.type}
                    </span>
                  </div>
                  <div className="flex flex-col col-span-1 pr-4">
                    <h5 className="text-sm text-dark-grey">Quy mô công ty</h5>
                    <span className="text-base text-primary-black">
                      {companyProfile.size}
                    </span>
                  </div>
                  <div className="flex flex-col col-span-1 pr-4">
                    <h5 className="text-sm text-dark-grey">Quốc gia</h5>
                    <span className="text-base text-primary-black">
                      {companyProfile.country}
                    </span>
                  </div>
                  <div className="flex flex-col col-span-1 pr-4">
                    <h5 className="text-sm text-dark-grey">
                      Thời gian làm việc
                    </h5>
                    <span className="text-base text-primary-black">
                      {companyProfile.working_day}
                    </span>
                  </div>
                  <div className="flex flex-col col-span-1 pr-4">
                    <h5 className="text-sm text-dark-grey">
                      Làm việc ngoài giờ
                    </h5>
                    <span className="text-base text-primary-black">
                      {companyProfile.ot_policy}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full py-10 ">
            <button
              className="text-primary-red bg-white text-base py-2 px-4 max-w-[220px] w-full rounded-lg hover:bg-primary-red hover:text-white transition-all border border-primary-red"
              onClick={onOpenModalDelete}
            >
              Xóa bài đăng
            </button>
          </div>
        </div>
      </article>
      <FormPostedJob
        jobId={jobId}
        postData={postData}
        isOpening={isOpeningUpdateForm}
        onClose={onCloseUpdateForm}
      />
      {isOpenningModalDelete ? (
        <ModalConfirmDelete
          jobId={jobId}
          setIsOpenningModal={setIsOpenningModal}
        />
      ) : null}
    </>
  );
};

const renderList = (listData: string) => {
  const renderData = listData?.split("\n");
  return (
    <ul className="my-2">
      {renderData?.map((data: any, index: number) => (
        <li
          key={index}
          className="flex gap-3 items-start text-base text-primary-black py-[6px]"
        >
          <div className="shrink-0 w-[6px] h-[6px] aspect-square rounded-full bg-primary-red mt-[9px]"></div>
          {data}
        </li>
      ))}
    </ul>
  );
};

export default PostedJobDetail;
