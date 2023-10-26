export default function ForgotPasswordLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className="relative w-full h-full bg-white px-5 lg:px-[1.875rem]">
        <div className="application-bg">
        </div>
        {children}
      </main>
    )
  }