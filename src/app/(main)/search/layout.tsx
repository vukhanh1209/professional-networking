export default function SearchLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className="w-full h-fit bg-light-grey mt-[5.5rem] ">
        {children}
      </main>
    )
  }