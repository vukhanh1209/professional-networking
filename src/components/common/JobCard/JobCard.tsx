import Image from "next/legacy/image";
import Link from "next/link";

import GreenCoin from '@/images/search/greenCoin.svg'
import RemoteIcon from '@/images/search/remote.svg'
import LocationPin from '@/images/location-pin.svg'
import SuperHot from '@/images/search/super-hot.svg'
import { calculateElapsedDate } from "@/utils/lib";
import CompanyAvatar from '@/images/search/companyAvatar.png'
import { useRouter } from "next/navigation";



interface JobCardProps {
    data: any;
    isSelected : boolean;
    isSuperHot?: boolean;
    paddingClassName?: string;
}


const fakeData = {
    appliedDate: 10,
    title: "[Remote] - Shopify App Dev (ReactJS, Laravel,Hidrogen)",
    companyAvatar: CompanyAvatar,
    companyName: "Yet Company",
    minSalary: 1000,
    maxSalary: 1500,
    isRemote: false,
    location: "Ho Chi Minh",
    jobSkills: ["ReactJS", "English", "Lavarel"],
    hot_level: 2,
    benefits: ["Salary review twice a year", "13th month salary", "Working model : Remote"],
}

const JobCard = ({data, isSelected, isSuperHot ,paddingClassName} : JobCardProps) => {
    const router = useRouter()
    const jobItemData = data?.job || data;
    let padding = paddingClassName ? paddingClassName : "px-3 py-2";

    const createSubTitle = () => {
        const postedDate = jobItemData?.createdAt;
        const appliedDate = data?.appliedDate;
        if(postedDate) {
            return`Đăng ${calculateElapsedDate(postedDate)} ngày trước`

        }
        if(appliedDate) {
            return `Ngày ứng tuyển: ${appliedDate}`
        }
    }

    const onClickJobCard = () => {
        router.push(`job-detail?id=${jobItemData?.jobId}`)
    }

    return (
        <section onClick={onClickJobCard} className={`${isSelected && "job-card--selected"} ${isSuperHot && "job-card--super-hot"} bg-white relative mb-4 rounded-lg w-full h-fit cursor-pointer`}>
            <div className={`flex flex-col ${padding} w-full divide-y divide-dashed divide-silver-grey`}>
                <div className="flex flex-col pb-3 gap-3 ">
                    <div className="flex items-end justify-between w-full">
                        <span className="text-sm font-medium text-dark-grey">{createSubTitle()}</span>
                        {isSuperHot && 
                            <div className="flex items-center rounded-l-md bg-primary-red px-3 py-1 translate-x-3 job-label">
                                <div className="flex items-center shrink-0 w-4 h-[15px]">
                                    <Image src={SuperHot} className="w-4 h-[15px]" alt="fire"/>
                                </div>
                                <span className="uppercase text-white text-sm font-semibold">Super hot</span>
                            </div>
                        }
                    </div>
                    <h1 className="text-lg font-bold text-primary-black">{jobItemData?.title}</h1>
                    <div className="flex items-center">
                        <div className="flex items-center shrink-0 w-12 h-12 bg-white rounded-lg border border-silver-grey"> 
                            <Image src={fakeData?.companyAvatar} className="w-12 h-12" alt={jobItemData?.company?.name || jobItemData?.companyName}/>
                        </div>
                        <div className="text-sm ml-2 text-rich-grey">
                            <Link href="/">{jobItemData?.company?.name || jobItemData?.companyName}</Link>
                        </div>
                    </div>
                    <div  className="flex items-center">
                        <div className="flex items-center shrink-0 w-5 h-5">
                            <Image src={GreenCoin} className="w-5 h-5" alt="coin"/>
                        </div>
                        <span className="pl-2 text-available-green text-base font-medium">

                            {jobItemData?.minSalary ? `${jobItemData?.minSalary} - ${jobItemData?.maxSalary} USD`
                            : "You'll love it"}
                        </span>
                    </div>
                </div>
                <div className="flex flex-col py-2 w-full ">
                    <div  className="flex items-center mt-1 text-sm text-rich-grey">
                        <div className="flex items-center shrink-0 ">
                            <Image src={RemoteIcon} className="w-4 h-4" alt="remote"/>
                        </div>
                        <span className="pl-2">{fakeData?.isRemote ? "Làm từ xa" : "Tại văn phòng"}</span>
                    </div>

                    <div className="flex items-center mt-1 text-sm text-rich-grey">
                        <div className="flex items-center shrink-0">
                            <Image src={LocationPin} className="w-4 h-4" alt="location"/>
                        </div>
                        <span className="pl-2">{jobItemData?.company?.address || jobItemData?.address}</span>
                    </div>

                    {jobItemData?.skills?.length > 0 && <div className="flex flex-wrap w-full items-center gap-2 mt-3 mb-2">
                        {jobItemData?.skills.map((skill : string, index: number) => (
                            <div 
                                key={index} 
                                className="py-1 px-[10px] text-xs rounded-full bg-white text-rich-grey border border-silver-grey"
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                    }
                </div>
                {
                    fakeData?.benefits && 
                    <ul className="py-3">
                        {fakeData.benefits.map((benefit : any, index: number) => (
                            <li key={index} className="flex items-center gap-3 text-sm text-primary-black font-medium mb-1">
                                <div className="w-[5px] h-[5px] rounded-full bg-primary-red"></div>
                                {benefit}
                            </li>
                        ))}
                    </ul>
                }
                
            </div>
        </section>
    )
}

export default JobCard;