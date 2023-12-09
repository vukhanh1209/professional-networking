import Footer from "@/components/common/Footer";
import HeaderCustomer from "@/components/page/Customer/HeaderCustomer";
import Sidebar from "@/components/page/Customer/Sidebar";

export default function CustomerLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderCustomer />
      <div className="flex w-full h-fit bg-white mt-[5.5rem] ">
        <Sidebar />
        <div className="ml-[350px] w-full">{children}</div>
      </div>
      <Footer />
    </>
  );
}
