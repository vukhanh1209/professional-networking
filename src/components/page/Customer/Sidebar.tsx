import Link from "next/link";
import SearchIcon from "@/images/customer/search.svg";
import ApplicationIcon from "@/images/customer/application.svg";
import PostIcon from "@/images/customer/post.svg";
import ProfileIcon from "@/images/customer/profile.svg";

import Image from "next/image";

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
    href: "/customer",
    icon: ApplicationIcon,
  },
  {
    title: "Tìm kiếm ứng viên",
    href: "/customer",
    icon: SearchIcon,
  },
  {
    title: "Hồ sơ công ty",
    href: "/customer",
    icon: ProfileIcon,
  },
];

export default function Sidebar() {
  return (
    <nav className=" w-[350px] h-screen ">
      <div className="flex flex-col h-full border-r border-silver-grey px-[30px] py-3">
        {SIDEBAR_TAB.map((tab: SideBar, index: number) => (
          <Link
            className="flex items-center gap-4 w-full text-primary-black py-3 px-6 hover:bg-light-grey rounded-lg"
            key={index}
            href={tab.href}
          >
            <Image src={tab.icon} width={24} height={24} alt={tab.title} />
            <span className="text-lg font-medium">{tab.title}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
