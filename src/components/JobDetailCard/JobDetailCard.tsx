import Image from "next/legacy/image";
import Link from "next/link";

import CompanyAvatar from '@/images/search/companyAvatar.png'
import GreenCoin from '@/images/search/greenCoin.svg'
import RemoteIcon from '@/images/search/remote.svg'
import LocationPin from '@/images/location-pin.svg'
import SuperHot from '@/images/search/super-hot.svg'
import HeartIcon from '@/images/search/heart.svg'
import TimeIcon from '@/images/search/time.svg'
import Redirect from '@/images/search/redirect.svg'

import ImageWrapper from "../common/ImageWrapper";

const jobData = {
    postedDate: 1,
    title: "[Remote] - Shopify App Dev (ReactJS, Laravel,Hidrogen)",
    companyAvatar: CompanyAvatar,
    companyName: "Yet Company",
    minSalary: 1000,
    maxSalary: 1500,
    isRemote: true,
    location: "Tầng 3A Tòa nhà HATA, Số 103 Phạm Viết Chánh, Phường 19, Binh Thanh, Ho Chi Minh",
    jobSkills: ["ReactJS", "English", "Lavarel"],
    benefits: ["Salary review twice a year", "13th month salary", "Working model : Remote"],
    hot_level: 2
}

const topReasons = ["Salary review twice a year", "13th month salary", "Working model : Remote"]
const jobDescription = [
    "Join Shopify's new Hidrogen-powered project",
    "Use Laravel to develop Shopify applications",
    "Work in groups and coordinate work based on the team leader's work assignments"
]

const requirements = [
    "At least 2 years of React experience",
    "Experience with Shopify (Hidrogen) is advantageous",
    "Know Laravel and use it properly",
    "Has enthusiasm, responsibility for work and good teamwork skills",
    "Communication in English, knowing Japanese is advantageous",
    "Priority given to English CVs"
]

const reasonsForWorking = [
    "After a 2-month probationary, working model will be decided at the office, remote or hybrid",
    "Salary review twice a year",
    "Monthly party, and birthday gifts given to employees whose birthdays are that month",
    "Female employee's gifts on March 8 and October 20",
    "Allowances:",
    "Lunch: 50,000 VND",
    "Gasoline, bus, parking fees",
    "Snacks, drinks"
]

const companyProfile = {
    type: "Product",
    size: "51-150",
    country: "Japan",
    working_day: "Thứ 2 - Thứ 6",
    ot_policy: "Thêm lương OT"
}

const JobDetailCard = () => {
    return (
        <article className="sticky top-[90px] flex flex-col gap-3 py-6 bg-white rounded-lg w-full h-fit">
            <div className="px-6 ">
                <div className="flex flex-col w-full  border-b border-silver-grey pb-2">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center px-2 bg-white w-fit aspect-square rounded-lg border border-silver-grey">
                            <ImageWrapper src={jobData.companyAvatar} width={100} alt=""/>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <h1 className="text-2xl font-bold">{jobData.title}</h1>
                            <div className="text-base text-rich-grey">
                                <Link href="/">{jobData.companyName}</Link>
                            </div>
                            <div  className="flex items-center">
                                <ImageWrapper src={GreenCoin} height={24} width={24}  alt="coin"/>
                                <span className="pl-2 text-available-green text-base font-medium">{`${jobData.minSalary} - ${jobData.maxSalary} USD`}</span>
                            </div>
                        </div>  

                        
                    </div>
                    <div className="flex items-center gap-3 my-4">
                        <button className="w-full rounded-lg py-2 px-5 bg-primary-red hover:bg-dark-red transition-all duration-100 ">
                            <span className="text-base font-medium text-white">Ứng tuyển</span>
                        </button>

                        <button className="">
                            <ImageWrapper src={HeartIcon} width={32} height={32} alt="heart" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="overflow-y-auto max-h-[500px] pb-40 ">
                <div className="px-6">
                    <div className="flex flex-col w-full py-6 border-b gap-2 border-dashed border-silver-grey">
                        <div className="flex items-center text-sm text-rich-grey">
                            <div className="flex items-center shrink-0">
                                <Image src={LocationPin} className="w-4 h-4" alt="location"/>
                            </div>
                            <span className="pl-2">{jobData.location}</span>
                        </div>

                        <div  className="flex items-center text-sm text-rich-grey">
                            <div className="flex items-center shrink-0 ">
                                <Image src={RemoteIcon} className="w-4 h-4" alt="remote"/>
                            </div>
                            <span className="pl-2">{jobData.isRemote ? "Làm từ xa" : "Tại văn phòng"}</span>
                        </div>

                        <div  className="flex items-center text-sm text-rich-grey">
                            <div className="flex items-center shrink-0 ">
                                <Image src={TimeIcon} className="w-4 h-4" alt="remote"/>
                            </div>
                            <span className="pl-2">{`${jobData.postedDate} ngày trước`}</span>
                        </div>
                        
                        <div className="flex flex-wrap w-full items-center gap-2 mb-2">
                            <span className="text-sm text-rich-grey font-medium mr-2">Kỹ năng: </span>
                            {jobData.jobSkills.map((skill : string, index: number) => (
                                <div 
                                    key={index} 
                                    className="py-1 px-[10px] text-xs rounded-full bg-white text-rich-grey border border-silver-grey"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="py-6 border-b gap-2 border-dashed border-silver-grey">
                        <h2 className="text-xl font-bold mb-4">{`${topReasons.length} Lý do để gia nhập công ty`}</h2>
                        {renderList(topReasons)}
                    </div>

                    <div className="py-6 border-b gap-2 border-dashed border-silver-grey">
                        <h2 className="text-xl font-bold mb-4">Mô tả công việc</h2>
                        {renderList(jobDescription)}        
                    </div>

                    <div className="py-6 border-b gap-2 border-dashed border-silver-grey">
                        <h2 className="text-xl font-bold mb-4">Yêu cầu công việc</h2>
                        {renderList(requirements)}
                    </div>

                    <div className="py-6 border-b gap-2 border-silver-grey">
                        <h2 className="text-xl font-bold mb-4">Tại sao bạn sẽ yêu thích làm việc tại đây</h2>
                        {renderList(reasonsForWorking)}
                    </div>

                    <div className="flex flex-col w-full py-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold mb-4">{jobData.companyName}</h2>
                            <Link href="/" className="flex gap-1 items-center text-hyperlink text-base font-medium">
                                Xem công ty
                                <Image src={Redirect} width={16} height={16} alt="redirect"/>
                            </Link>
                        </div>
                        <div className="grid grid-cols-3 w-full gap-y-4">
                            <div className="flex flex-col col-span-1 pr-4">
                                <h5 className="text-sm text-dark-grey">Mô hình công ty</h5>
                                <span className="text-base text-primary-black">{companyProfile.type}</span>
                            </div>
                            <div className="flex flex-col col-span-1 pr-4">
                                <h5 className="text-sm text-dark-grey">Quy mô công ty</h5>
                                <span className="text-base text-primary-black">{companyProfile.size}</span>
                            </div>
                            <div className="flex flex-col col-span-1 pr-4">
                                <h5 className="text-sm text-dark-grey">Quốc gia</h5>
                                <span className="text-base text-primary-black">{companyProfile.country}</span>
                            </div>
                            <div className="flex flex-col col-span-1 pr-4">
                                <h5 className="text-sm text-dark-grey">Thời gian làm việc</h5>
                                <span className="text-base text-primary-black">{companyProfile.working_day}</span>
                            </div>
                            <div className="flex flex-col col-span-1 pr-4">
                                <h5 className="text-sm text-dark-grey">Làm việc ngoài giờ</h5>
                                <span className="text-base text-primary-black">{companyProfile.ot_policy}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </article>
    )
}


const renderList = (listData : any) => {
    return (
        <ul className="my-2">
            {listData.map((data : any, index: number) => (
                <li key={index} className="flex gap-3 items-center text-base text-primary-black py-[6px]">
                    <div className="w-[6px] h-[6px] rounded-full bg-primary-red"></div>
                    {data}
                </li>
            ))}
        </ul>
    )
}

export default JobDetailCard;