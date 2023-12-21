"use client";
import ImageWrapper from "@/components/common/ImageWrapper";
import Image from "next/image";

import Email from "@/images/profile/email.svg";
import Gift from "@/images/profile/gift.svg";
import Phone from "@/images/profile/phone.svg";
import LocationPin from "@/images/profile/location-pin.svg";
import Profile from "@/images/profile/profile.svg";
import Edit from "@/images/profile/edit.svg";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { openInfoForm, selectProfile } from "@/redux/reducers/candidateSlice";

const avatarUrl =
  "https://heydevs.com/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMExqTmc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--dff1aa1037d189ab459a0aeb2527bdea2802cd88/AAcHTtcqGTwNOdvlwpcsUm-bdAN6yNXpxsPbzbjlwtrn=s96-c.jpg";

export default function InfoSection() {
  const dispatch = useAppDispatch();
  const profile = useAppSelector(selectProfile);

  const onOpenInfoForm = () => {
    dispatch(openInfoForm());
  };

  return (
    <div className="relative flex flex-col items-center md:flex-row  px-6 pt-6 pb-8 rounded-lg bg-white">
      <button className="absolute right-6 top-6" onClick={onOpenInfoForm}>
        <Image loading="lazy" src={Edit} width={20} height={20} alt="edit" />
      </button>
      <div className="flex mb-5 md:mb-0 items-center justify-center h-full w-[120px] md:h-full aspect-square shrink-0 rounded-full border border-rich-grey bg-dark-grey">
        <p className="leading-[100%] text-6xl font-semibold  text-white">
          {profile?.fullName ? profile?.fullName[0] : ""}
        </p>
      </div>
      <div className=" md:ml-8 flex flex-col w-full text-rich-grey">
        <span className="font-bold text-2xl md:text-3xl uppercase text-primary-black text-center md:text-left">
          {profile?.fullName}
        </span>

        <span className="font-bold text-lg mt-2 text-center md:text-left border-b-2 border-silver-grey md:border-b-0 pb-4 md:pb-0">
          {profile?.position}
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-4 ">
          <div className="flex flex-col gap-4 w-full col-span-1">
            <div className="flex gap-2 items-center">
              <Image src={Email} width={16} height={16} alt="email" />
              <span>{profile?.email}</span>
            </div>
            <div className="flex gap-2 items-center">
              <Image src={Gift} width={16} height={16} alt="gift" />
              <span>{profile?.birthdate}</span>
            </div>
            <div className="flex gap-2 items-center">
              <Image src={LocationPin} width={16} height={16} alt="location" />
              <span>{profile?.address}</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full col-span-1">
            <div className="flex gap-2 items-center">
              <Image src={Phone} width={16} height={16} alt="phone" />
              <span>{profile?.phoneNumber}</span>
            </div>
            <div className="flex gap-2 items-center">
              <Image src={Profile} width={16} height={16} alt="profile" />
              <span>{profile?.gender}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
