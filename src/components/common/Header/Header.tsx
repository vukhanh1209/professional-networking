"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/images/header/logo-2.svg";

import { useEffect, useState } from "react";
import { LocalStorage } from "@/utils/LocalStorage";
import { usePathname } from "next/navigation";
import EmployeeNavigation from "./EmployeeNavigation";
import Hamburger from "@/images/hamburger.svg";
import SidebarMobile from "../SideBarMobile";

const Header = () => {
  const [profile, setProfile] = useState<any>();
  const [isOpeningSidebar, setIsOpeningSidebar] = useState<boolean>(false);
  const pathName = usePathname();

  useEffect(() => {
    const profileInStorage = LocalStorage.getProfile();
    setProfile(profileInStorage);
  }, [pathName]);

  return (
    <>
      <header className="fixed top-0 w-full flex items-center justify-between px-5 lg:px-[1.875rem] h-[5.5rem] primary-gradient border-b border-neutral-800 z-50">
        <div className="flex shrink-0">
          <Link href="/">
            <Image
              src={Logo}
              width={0}
              height={0}
              alt="logo"
              className=" w-[120px] lg:w-[152px] "
            />
          </Link>
        </div>
        <div className="flex items-center md:gap-6">
          {!profile?.username && (
            <button
              onClick={() => {
                setIsOpeningSidebar(!isOpeningSidebar);
              }}
              className="p-2 rounded-full md:hidden"
            >
              <Image src={Hamburger} width={24} height={24} alt="menu" />
            </button>
          )}
          <Link
            href="/for-recruiter"
            className="bg-transparent text-white text-sm text-center lg:text-base font-medium hidden md:inline"
          >
            Nhà tuyển dụng
          </Link>
          {profile?.username ? (
            <EmployeeNavigation profile={profile} setProfile={setProfile} />
          ) : (
            <div className="bg-transparent text-white text-center text-base font-medium">
              <Link href="/sign-in" className="hidden md:inline">
                Đăng nhập{" "}
              </Link>
              <Link href="/sign-up" className="hidden md:inline">
                / Đăng ký
              </Link>
            </div>
          )}
        </div>
      </header>
      {!profile?.username && (
        <SidebarMobile
          isOpeningSidebar={isOpeningSidebar}
          setIsOpeningSidebar={setIsOpeningSidebar}
        />
      )}
    </>
  );
};

export default Header;
