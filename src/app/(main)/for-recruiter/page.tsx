"use client";
import Image from "next/image";
import Banner from "@/images/for-recruiter/banner.png";
import Link from "next/link";

import FirstHand from "@/images/for-recruiter/first-hand.svg";
import SecondHand from "@/images/for-recruiter/second-hand.svg";
import ThirdHand from "@/images/for-recruiter/third-hand.svg";
import Oppotunities from "@/images/for-recruiter/opportunities.svg";
import RightSkillBe from "@/images/for-recruiter/right-skill-be.svg";
import JobPosting from "@/images/for-recruiter/job-posting.png";
import EmployerBranding from "@/images/for-recruiter/employer-branding.png";
import FirstEmployerBranding from "@/images/for-recruiter/first-employer-branding.svg";
import SecondEmployerBranding from "@/images/for-recruiter/second-employer-branding.svg";
import FormContact from "@/components/page/ForRecruiter/FormContact";
import Phone from "@/images/for-recruiter/phone.svg";
import Time from "@/images/for-recruiter/time.svg";

const differences = [
  {
    img: FirstHand,
    statistics: "10,000+",
    title: "Công ty và Doanh nghiệp IT",
  },
  {
    img: SecondHand,
    statistics: "1,500,000+",
    title: "Hồ sơ gửi đến Nhà tuyển dụng",
  },
  {
    img: ThirdHand,
    statistics: "300,000+",
    title: "Hồ sơ Ứng viên kinh nghiệm cao",
  },
];

export default function Home() {
  return (
    <main className="w-full min-h-screen mt-[5.5rem]">
      <section className="flex justify-center w-full primary-gradient px-5">
        <div className="flex flex-col-reverse md:flex-row max-w-[1340px] pt-16 pb-5 md:pt-32 md:pb-16 w-full gap-x-20">
          <div className="">
            <h1 className="text-white font-bold text-2xl md:text-[36px] mt-8 leading-normal ">
              Tuyển dụng Nhân tài IT tại Việt Nam cùng HeyDevs
            </h1>
            <p className="text-base text-silver-grey mt-6 mb-12">
              Với hiểu biết sâu sắc về lĩnh vực IT và các kỹ năng chuyên môn,
              chúng tôi có thể giúp bạn tiếp cận và tuyển dụng những ứng viên IT
              tốt nhất.
            </p>
            <button
              onClick={() => {
                document
                  .getElementById("Contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:bg-[#c82222] flex items-center justify-center py-4 px-6 w-full rounded-lg  bg-[#ed1b2f] transition-all duration-100 text-base font-semibold text-white mb-4 md:max-w-[210px]"
            >
              Liên hệ ngay
            </button>
            <div className="mt-8">
              <span className="text-dark-grey">
                Đã có tài khoản khách hàng?{" "}
                <Link
                  href="/for-recruiter/sign-in"
                  className="text-white text-base underline"
                >
                  Đăng nhập
                </Link>
              </span>
            </div>
          </div>
          <div className="max-w-[610px]">
            <Image
              src={Banner}
              width={0}
              height={0}
              className="w-full aspect-auto "
              alt="banner"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center w-full bg-white px-5 py-16 md:py-32 text-primary-black">
        <h1 className="text-2xl md:text-4xl font-bold text-center">
          Điều gì tạo nên sự khác biệt ở HeyDevs?
        </h1>
        <p className="text-base pt-6 text-center">
          HeyDevs là trang tuyển dụng và cơ sở dữ liệu hàng đầu về các chuyên
          gia IT tại Việt Nam.
        </p>
        <div className="flex flex-col md:flex-row gap-14 text-primary-black justify-center mt-[60px] w-full max-w-[1340px]">
          {differences.map((difference: any, index: number) => (
            <div
              key={index}
              className="relative flex flex-col items-center bg-white rounded-2xl px-8 py-12 drop-shadow-2xl flex-1 max-w-[428px]"
            >
              <Image
                src={difference.img}
                width={80}
                height={80}
                alt="difference"
                className="absolute bottom-[80%]"
              />
              <h2 className="text-xl text-[36px] leading-[60px] font-bold text-primary-red ">
                {difference.statistics}
              </h2>
              <p className="text-base text-center mt-2">{difference.title}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col items-center w-full bg-[#680000] px-5 py-16 md:py-32 ">
        <h1 className="text-2xl md:text-4xl font-bold text-center text-white">
          Dịch vụ chất lượng cao dành cho Nhà tuyển dụng IT
        </h1>
        <div className="flex flex-col-reverse md:flex-row text-primary-black max-w-[1340px] bg-white rounded-2xl pt-12 pb-14 px-6 md:px-12 w-full gap-x-20 mt-6 md:mt-[60px]">
          <div className="">
            <h1 className="font-bold text-2xl md:text-3xl mt-8 ">
              Đăng tin tuyển dụng
            </h1>
            <p className="text-base text-rich-grey mt-6 mb-12">
              Đăng tuyển vị trí công việc IT, dễ dàng quản lý hồ sơ ứng viên với
              giao diện trực quan, đội ngũ hỗ trợ, và công cụ mạnh mẽ từ HeyDevs
            </p>
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <div className="rounded-lg bg-gradient-to-b from-white-red to-white flex items-start gap-4 p-4 flex-1">
                <Image
                  src={Oppotunities}
                  width={0}
                  height={0}
                  className="w-16 h-full"
                  alt=""
                />
                <p className="mt-4">
                  Gia tăng cơ hội để tiếp cận ứng viên IT chất lượng từ HeyDevs
                </p>
              </div>
              <div className="rounded-lg bg-gradient-to-b from-white-red to-white flex items-start gap-4 p-4 flex-1">
                <Image
                  src={RightSkillBe}
                  width={0}
                  height={0}
                  className="w-16 h-full"
                  alt=""
                />
                <p className="mt-4">
                  Thu hút ứng viên phù hợp với yêu cầu về kỹ năng IT
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-[480px]">
            <Image
              src={JobPosting}
              width={0}
              height={0}
              className="w-full aspect-auto "
              alt="banner"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row text-primary-black max-w-[1340px] bg-white rounded-2xl pt-12 pb-14 px-6 md:px-12 w-full gap-x-20 mt-6 md:mt-[60px]">
          <div className="">
            <h1 className="font-bold text-2xl md:text-3xl mt-8 ">
              Thương hiệu tuyển dụng
            </h1>
            <p className="text-base text-rich-grey mt-6 mb-12">
              Nâng cao nhận diện thương hiệu của Nhà tuyển dụng, tiếp cận các
              chuyên gia IT trên ITviec qua các điểm chạm đặc biệt, và kết nối
              với các ứng viên IT hàng đầu tại Việt Nam
            </p>
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <div className="rounded-lg bg-gradient-to-b from-white-red to-white flex items-start gap-4 p-4 flex-1">
                <Image
                  src={FirstEmployerBranding}
                  width={0}
                  height={0}
                  className="w-16 h-full"
                  alt=""
                />
                <div>
                  <h5 className="font-semibold">Nhà tuyển dụng hàng đầu</h5>
                  <p className="mt-2">
                    Xuất hiện với vị trí công ty IT nổi bật hàng đầu tại Việt
                    Nam
                  </p>
                </div>
              </div>
              <div className="rounded-lg bg-gradient-to-b from-white-red to-white flex items-start gap-4 p-4 flex-1">
                <Image
                  src={SecondEmployerBranding}
                  width={0}
                  height={0}
                  className="w-16 h-full"
                  alt=""
                />
                <div>
                  <h5 className="font-semibold">Nhà tuyển dụng nổi bật</h5>
                  <p className="mt-2">
                    Tăng cường xây dựng thương hiệu nhà tuyển dụng đến với những
                    nhân tài IT hàng đầu
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[480px]">
            <Image
              src={EmployerBranding}
              width={0}
              height={0}
              className="w-full aspect-auto "
              alt="banner"
            />
          </div>
        </div>
      </section>

      <section
        className="flex justify-center contact-bg w-full bg-white text-primary-black  pt-20 pb-14 px-6 md:px-12"
        id="Contact"
      >
        <div className="max-w-[1340px] w-full">
          <h1 className="font-bold text-2xl md:text-3xl mt-8 ">
            Tìm kiếm nhân tài IT phù hợp
          </h1>
          <p className="text-base text-rich-grey mt-6 mb-12">
            Để lại thông tin liên hệ để nhận tư vấn từ Phòng Chăm sóc Khách hàng
            của ITviec.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 w-full">
            <div className="col-span-full md:col-span-2 md:mr-6">
              <FormContact />
            </div>
            <div className="flex flex-col gap-5 col-span-full md:col-span-1 mt-6 md:mt-0">
              <div className="w-full rounded-lg flex items-center p-6 bg-[#a6a6a61a] ">
                <Image
                  src={Phone}
                  width={24}
                  height={24}
                  className="w-6 h-full"
                  alt="phone"
                />
                <div className="ml-3">
                  <p className="text-base">Hotline Hồ Chí Minh</p>
                  <p className="text-lg font-bold">0977 460 519</p>
                </div>
              </div>

              <div className="w-full rounded-lg flex items-center p-6 bg-[#a6a6a61a] ">
                <Image
                  src={Phone}
                  width={24}
                  height={24}
                  className="w-6 h-full"
                  alt="phone"
                />
                <div className="ml-3">
                  <p className="text-base">Hotline Hà Nội</p>
                  <p className="text-lg font-bold">0983 131 531</p>
                </div>
              </div>

              <div className="w-full rounded-lg flex items-center p-6 bg-[#a6a6a61a] ">
                <Image
                  src={Time}
                  width={24}
                  height={24}
                  className="w-6 h-full"
                  alt="phone"
                />
                <div className="ml-3">
                  <p className="text-base">Thời gian làm việc</p>
                  <p className="text-lg font-bold">
                    Thứ 2 - Thứ 6 | 8:30 - 17:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
