"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/images/header/logo-2.svg";
import Hamburger from "@/images/hamburger.svg";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  onDisplaySidebar,
  selectRecruiterProfile,
} from "@/redux/reducers/recruiterSlice";
import { recruiterGetProfile } from "@/redux/actions/recruiter.action";

const HeaderCustomer = () => {
  const dispatch = useAppDispatch();
  const profile = useAppSelector(selectRecruiterProfile);

  useEffect(() => {
    dispatch(recruiterGetProfile({}));
  }, []);

  const onClickMenuIcon = () => {
    dispatch(onDisplaySidebar());
  };

  return (
    <header className="fixed top-0 w-full flex items-center justify-between px-5 lg:px-[1.875rem] h-[5.5rem] primary-gradient border-b border-neutral-800 z-50">
      <button onClick={onClickMenuIcon} className="p-2 rounded-full md:hidden">
        <Image src={Hamburger} width={24} height={24} alt="menu" />
      </button>
      <div className="flex shrink-0">
        <Link href="/customer">
          <Image
            src={Logo}
            width={0}
            height={0}
            alt="logo"
            className=" w-[120px] lg:w-[152px] "
          />
        </Link>
      </div>
      <div className="flex gap-6">
        <div className="flex items-center gap-3">
          {profile?.companyLogo && (
            <Image
              src={profile?.companyLogo}
              width={32}
              height={32}
              alt="avatar"
              className="rounded-full h-8 w-8 aspect-square border border-white"
            />
          )}
          <div className="flex gap-2 items-center">
            <span className="first-letter:uppercase font-medium text-base text-white hidden lg:inline">
              {profile?.companyName}
            </span>
            {/* <div className="rotate-90 group-hover:-rotate-90 transition-all duration-300">
                        <ImageWrapper src={ArrowLeft} width={16} height={16} alt="arrow"/>
                    </div> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderCustomer;
