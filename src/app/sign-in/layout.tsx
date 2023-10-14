export default function SignInLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className="w-full h-fit bg-white px-[1.875rem] mt-[5.5rem] ">
        {children}
      </main>
    )
  }