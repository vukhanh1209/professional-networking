import Navbar from "@/components/page/MyJob/Navbar"

const profileTabs = [
  {
      title: "Hồ sơ",
      href: "/profile",
  },
  {
      title: "Quản lý CV",
      href: "/profile/cv",
  },
]

export default function ProfileLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className="w-full  bg-light-grey mt-[5.5rem] h-fit">
        <Navbar tabs={profileTabs}/>
        {children}
      </main>
    )
  }