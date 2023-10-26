import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
          <Header/>
          {children}
          <Footer/>
    </>
  )
}
