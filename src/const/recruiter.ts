import ApplicationIcon from "@/images/customer/application.svg";
import PostIcon from "@/images/customer/post.svg";
import ProfileIcon from "@/images/customer/profile.svg";
import MangeIcon from "@/images/customer/manage.svg"

export const SIDEBAR_TAB = [
    {
      title: "Quản lý bài đăng",
      href: "/customer",
      icon: MangeIcon,
    },
    {
        title: "Đăng bài tuyển dụng",
        href: "/customer/post",
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