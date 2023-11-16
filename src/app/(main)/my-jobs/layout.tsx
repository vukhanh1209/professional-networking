import Navbar from "@/components/page/MyJob/Navbar"

const myJobTabs = [
  {
      title: "Đã lưu",
      href: "/my-jobs",
  },
  {
      title: "Đã xem gần đây",
      href: "/my-jobs/recent-viewed",
  },
  {
      title: "Đã ứng tuyển",
      href: "/my-jobs/applied",
  },
]

export default function MyJobsLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className="w-full  bg-light-grey mt-[5.5rem] h-fit">
        <Navbar tabs={myJobTabs}/>
        {children}
      </main>
    )
  }