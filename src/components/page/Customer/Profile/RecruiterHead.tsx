"use client";
import Image from "next/legacy/image";
import NAB from "@/images/NAB.png";
import LocationPin from "@/images/location-pin.svg";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { selectRecruiterProfile } from "@/redux/reducers/recruiterSlice";
import Edit from "@/images/profile/edit.svg";
import { useEffect, useState } from "react";
import FormEditProfile from "./FormEditProfile";
import { recruiterGetProfile } from "@/redux/actions/recruiter.action";

const recruiter = {
  name: "NAB Innovation Centre Vietnam",
  avatar: NAB,
  location: "District 4, Ho Chi Minh",
  job_amount: 4,
};

const RecruiterHead = ({ data }: any) => {
  const recruiterProfile = useAppSelector(selectRecruiterProfile);

  const [isOpenningEditForm, setIsOpenningEditForm] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (recruiterProfile.companyId === -1) {
      dispatch(recruiterGetProfile({}));
    }
  }, []);

  return (
    <>
      <div className="relative flex justify-between items-center w-full lg:px-[1.875rem] py-8">
        <button
          onClick={() => setIsOpenningEditForm(true)}
          className="absolute right-0 top-0 w-fit"
        >
          <Image src={Edit} width={32} height={32} alt="edit" />
        </button>
        <div className="flex flex-col w-full items-center lg:flex-row lg:items-start gap-6">
          <div className="flex items-center border border-silver-grey w-[200px] lg:w-[120px] aspect-square rounded-lg p-[2px]">
            <Image
              src={recruiterProfile?.companyLogo || ""}
              alt="logo"
              width={200}
              height={200}
              className="w-[200px] lg:w-[120px] lg:h-[120px]"
            />
          </div>
          <div className="flex flex-col ">
            <h2 className="text-2xl lg:text-3xl font-bold pb-2 text-center lg:text-left text-primary-black">
              {recruiterProfile?.companyName || ""}
            </h2>
            <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-6 text-primary-black text-sm font-normal lg:font-medium">
              <div className="flex gap-2 items-center  ">
                <Image
                  src={LocationPin}
                  width={16}
                  height={16}
                  alt="location"
                />
                {recruiterProfile?.address || ""}
              </div>
              {/* <Link href="/" className="flex gap-2 items-center ">
              <Image src={BriefCase} width={16} height={16} alt="job" />
              <span className="underline">{`${companyData?.countJobOpenings} việc làm đang tuyển dụng`}</span>
            </Link> */}
            </div>
          </div>
        </div>
      </div>
      <FormEditProfile
        isOpening={isOpenningEditForm}
        data={recruiterProfile}
        onClose={() => setIsOpenningEditForm(false)}
      />
    </>
  );
};

export default RecruiterHead;
