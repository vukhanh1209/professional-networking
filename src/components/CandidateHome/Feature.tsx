"use client"
import Image from 'next/image'

import JobFinding from "public/images/home/job-finding.svg"
import Profile from "public/images/home/profile.svg"

const features = [
    {
      title: "Tìm kiếm việc làm",
      des: 'Danh sách việc làm IT "chất" liên tục cập nhật các lựa chọn mới nhất theo thị trường và xu hướng tìm kiếm.',
      img: JobFinding,
      buttonType: 1
    },
    {
      title: "Hồ sơ cá nhân",
      des: 'Kiến tạo hồ sơ với bố cục chuẩn mực, chuyên nghiệp dành riêng cho ngành IT, được nhiều nhà tuyển dụng đề xuất.',
      img: Profile,
      buttonType: 2
    }
  ]

const Feature = () => {
    return (
        <section className="flex flex-col items-center w-full bg-white px-5 py-20 text-primary-black">
            <h1 className="text-3xl font-bold text-center">Công cụ tốt nhất cho hành trang ứng tuyển của bạn</h1>
            <p className="text-base pt-4 text-center">Khẳng định bản thân qua hồ sơ "chất" với công cụ và kiến thức bổ ích từ ITviec.</p>
            <div className="flex flex-col md:flex-row gap-14 text-primary-black mt-[60px]">
                {features.map((feature : any, index : number) => (
                <div key={index} className="flex flex-col items-center max-w-[440px] bg-white rounded-3xl px-8 py-6 drop-shadow-2xl">
                    <Image src={feature.img} width={160} height={160} alt="job finding"/>
                    <h2 className="mt-5 mb-4 text-2xl font-bold">{feature.title}</h2>
                    <p className="text-base text-center">{feature.des}</p>
                    <button 

                        className={`${feature.buttonType === 1 ? "border-primary-red bg-white hover:bg-white-red text-primary-red" : "bg-primary-red hover:bg-dark-red text-white"} py-3 px-6 border  mt-10 min-w-[180px] rounded-lg transition-all duration-100`}
                    >
                        Khám phá
                    </button>
                </div>
                ))}
            </div>
        </section >
    )
}

export default Feature;