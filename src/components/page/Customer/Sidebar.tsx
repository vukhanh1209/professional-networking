"use client";
import Link from "next/link";
import SearchIcon from "@/images/customer/search.svg";
import ApplicationIcon from "@/images/customer/application.svg";
import PostIcon from "@/images/customer/post.svg";
import ProfileIcon from "@/images/customer/profile.svg";
import LogoutIcon from "@/images/customer/logout.svg";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { LocalStorage } from "@/utils/LocalStorage";

type SideBar = {
  title: string;
  href: string;
  icon: any;
};

const SIDEBAR_TAB = [
  {
    title: "Bài tuyển dụng",
    href: "/customer",
    icon: PostIcon,
  },
  {
    title: "Đơn ứng tuyển",
    href: "/customer/application",
    icon: ApplicationIcon,
  },
  // {
  //   title: "Tìm kiếm ứng viên",
  //   href: "/customer",
  //   icon: SearchIcon,
  // },
  {
    title: "Hồ sơ công ty",
    href: "/customer/profile",
    icon: ProfileIcon,
  },
];

export default function Sidebar() {
  const pathName = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    LocalStorage.clearToken();
    router.push("/for-recruiter/sign-in");
  };

  return (
    <nav className="fixed w-full max-w-[350px] h-screen mb-[344px]">
      <div className="flex flex-col h-full border-r border-silver-grey px-3 py-3">
        {SIDEBAR_TAB.map((tab: SideBar, index: number) => (
          <Link
            className={`${
              pathName === tab.href ? "bg-[#e7e7e7]" : ""
            } flex items-center gap-4 w-full text-primary-black py-3 px-[18px] hover:bg-[#e7e7e7] rounded-lg`}
            key={index}
            href={tab.href}
          >
            <Image src={tab.icon} width={24} height={24} alt={tab.title} />
            <span className="text-lg font-medium">{tab.title}</span>
          </Link>
        ))}
        <button
          onClick={handleLogout}
          className={`flex items-center gap-4 w-full text-primary-black py-3 px-[18px] hover:bg-[#e7e7e7] rounded-lg`}
        >
          <Image src={LogoutIcon} width={24} height={24} alt="log out" />
          <span className="text-lg font-medium">Đăng xuất</span>
        </button>
      </div>
    </nav>
  );
}
