import ImageWrapper from "../ImageWrapper";
import ArrowLeft from "@/images/arrow-left.svg";
import Avatar from "@/images/header/avatar.png";
import User from "@/images/header/profile.svg";
import Logout from "@/images/header/logout.svg";
import Briefcase from "@/images/header/briefcase.svg";
import { LocalStorage } from "@/utils/LocalStorage";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { RouteKind } from "next/dist/server/future/route-kind";

const EmployeeNavigation = ({ profile, setProfile }: any) => {
  const router = useRouter();
  const logout = (e: any) => {
    e.preventDefault();
    LocalStorage.clearToken();
    setProfile(null);
    router.push("/sign-in");
  };

  const profileDropdownItem = [
    {
      title: "Hồ sơ và CV",
      icon: User,
      link: "/profile",
    },
    {
      title: "Việc làm của tôi",
      icon: Briefcase,
      link: "/my-jobs",
    },
  ];
  return (
    <div className="relative group cursor-pointer">
      <div className="flex items-center gap-3">
        <Image
          src={Avatar}
          width={32}
          height={32}
          alt="avatar"
          className="rounded-full border border-white"
        />
        <div className="flex gap-2 items-center">
          <span className="first-letter:uppercase font-medium text-base text-white hidden lg:inline">
            {profile?.username}
          </span>
          <div className="rotate-90 group-hover:-rotate-90 transition-all duration-300">
            <ImageWrapper src={ArrowLeft} width={16} height={16} alt="arrow" />
          </div>
        </div>
      </div>
      <div className="absolute top-[100%] h-4 w-full bg-transparent"></div>
      <div className="hidden group-hover:block absolute top-[100%] right-0 mt-4 w-full min-w-[250px] bg-[#121212] rounded-lg">
        <ul className="divide-y divide-[#2a2a2a] w-full py-3">
          {profileDropdownItem.map((item: any, index: number) => (
            <Link
              key={index}
              href={item.link}
              onClick={item?.action}
              className="flex items-center gap-3 text-white hover:text-white hover:bg-rich-grey text-sm w-full px-4 h-[45px]"
            >
              <ImageWrapper
                src={item.icon}
                width={20}
                height={20}
                alt={item.title}
              />
              <span>{item.title}</span>
            </Link>
          ))}
          <button
            onClick={logout}
            className="flex items-center gap-3 text-white hover:text-white hover:bg-rich-grey text-sm w-full px-4 h-[45px]"
          >
            <ImageWrapper src={Logout} width={20} height={20} alt="log out" />
            <span>Đăng xuất</span>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default EmployeeNavigation;
