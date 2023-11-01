import Navbar from "@/components/page/MyJob/Navbar"

export default function MyJobsLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className="w-full  bg-light-grey mt-[5.5rem] h-fit">
        <Navbar/>
        {children}
      </main>
    )
  }