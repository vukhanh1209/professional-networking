import Image from "next/legacy/image";
import Link from "next/link";

import CompanyAvatar from '@/images/search/companyAvatar.png'
import GreenCoin from '@/images/search/greenCoin.svg'
import RemoteIcon from '@/images/search/remote.svg'
import LocationPin from '@/images/location-pin.svg'
import SuperHot from '@/images/search/super-hot.svg'

const jobData = {
    postedDate: 1,
    title: "[Remote] - Shopify App Dev (ReactJS, Laravel,Hidrogen)",
    companyAvatar: CompanyAvatar,
    companyName: "Yet Company",
    minSalary: 1000,
    maxSalary: 1500,
    isRemote: true,
    location: "Ho Chi Minh",
    jobSkills: ["ReactJS", "English", "Lavarel"],
    benefits: ["Salary review twice a year", "13th month salary", "Working model : Remote"],
    hot_level: 2
}

interface JobCardProps {
    isSelected : boolean;
}

const JobCard = ({isSelected} : JobCardProps) => {

    return (
        <div className={`${isSelected && "job-card--selected"} relative mb-4 rounded-lg border border-primary-red w-full h-fit`}>
            <div className="flex flex-col px-3 py-2 w-full ">
                <div className="flex flex-col pb-3 gap-3 border-b border-dashed border-silver-grey">
                    <div className="flex items-end justify-between w-full">
                        <span className="text-sm font-medium text-dark-grey">Đăng {jobData.postedDate} ngày trước</span>
                        {jobData.hot_level === 2 && 
                            <div className="flex items-center rounded-l-md bg-primary-red px-3 py-1 translate-x-3 job-label">
                                <div className="flex items-center shrink-0 w-4 h-[15px]">
                                    <Image src={SuperHot} className="w-4 h-[15px]" alt="fire"/>
                                </div>
                                <span className="uppercase text-white text-sm font-semibold">Super hot</span>
                            </div>
                        }
                    </div>
                    <h1 className="text-lg font-bold">{jobData.title}</h1>
                    <div className="flex items-center">
                        <div className="flex items-center shrink-0 w-12 h-12 bg-white rounded-lg border border-silver-grey"> 
                            <Image src={jobData.companyAvatar} className="w-12 h-12" alt={jobData.companyName}/>
                        </div>
                        <div className="text-sm ml-2 text-rich-grey">
                            <Link href="/">{jobData.companyName}</Link>
                        </div>
                    </div>
                    <div  className="flex items-center">
                        <div className="flex items-center shrink-0 w-5 h-5">
                            <Image src={GreenCoin} className="w-5 h-5" alt="coin"/>
                        </div>
                        <span className="pl-2 text-available-green text-base font-medium">{`${jobData.minSalary} - ${jobData.maxSalary} USD`}</span>
                    </div>
                </div>
                <div className="flex flex-col py-2 w-full border-b border-dashed border-silver-grey">
                    <div  className="flex items-center mt-1 text-sm text-rich-grey">
                        <div className="flex items-center shrink-0 ">
                            <Image src={RemoteIcon} className="w-4 h-4" alt="remote"/>
                        </div>
                        <span className="pl-2">{jobData.isRemote ? "Làm từ xa" : "Tại văn phòng"}</span>
                    </div>

                    <div className="flex items-center mt-1 text-sm text-rich-grey">
                        <div className="flex items-center shrink-0">
                            <Image src={LocationPin} className="w-4 h-4" alt="location"/>
                        </div>
                        <span className="pl-2">{jobData.location}</span>
                    </div>

                    <div className="flex flex-wrap w-full items-center gap-2 mt-3 mb-2">
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
                <ul className="py-3">
                    {jobData.benefits.map((benefit : any, index: number) => (
                        <li key={index} className="flex items-center gap-3 text-sm text-primary-black font-medium mb-1">
                            <div className="w-[5px] h-[5px] rounded-full bg-primary-red"></div>
                            {benefit}
                        </li>
                    ))}
                </ul>
                
            </div>
        </div>
    )
}

export default JobCard;