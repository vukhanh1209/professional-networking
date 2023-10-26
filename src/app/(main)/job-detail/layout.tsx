export default function JobDetailLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className="relative w-full  bg-light-grey lg:px-[1.875rem] mt-[5.5rem] h-fit overflow-hidden">
        <div className="application-bg">
        </div>
        {children}
      </main>
    )
  }