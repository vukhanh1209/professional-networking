export default function HomeLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className="w-full h-fit primary-gradient px-5 lg:px-[1.875rem] mt-[5.5rem] ">
        {children}
      </main>
    )
  }