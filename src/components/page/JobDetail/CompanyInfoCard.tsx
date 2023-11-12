import Image from "next/legacy/image";
import Link from "next/link";

import Redirect from '@/images/search/redirect.svg'
import CompanyAvatar from '@/images/search/companyAvatar.png'
import ImageWrapper from "@/components/common/ImageWrapper";
import { useMemo } from "react";


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


const companyProfile = {
    type: "Product",
    size: "51-150",
    country: "Japan",
    working_day: "Thứ 2 - Thứ 6",
    ot_policy: "Thêm lương OT"
}

export default function CompanyInfoCard({data} : any) {
    console.log("Log ~ file: CompanyInfoCard.tsx:34 ~ CompanyInfoCard ~ data:", data)
    // console.log("Log ~ file: CompanyInfoCard.tsx:34 ~ CompanyInfoCard ~ data:", data)
    // const companyInfo = useMemo(() => {
    //     return {
    //         ...data?.company,
    //         companyType: data?.companyType,
    //         location: data?.location?.cityName
    //     }
    // }, [data])
    // console.log("Log ~ file: CompanyInfoCard.tsx:42 ~ companyInfo ~ companyInfo:", companyInfo)
    return (
        <section className="flex flex-col gap-4 w-full z-40 bg-white lg:rounded-lg h-fit text-primary-black py-6 px-5 drop-shadow-md">
            <div className="flex flex-col items-center lg:flex-row lg:items-start gap-4">
                <div className="flex items-center border border-silver-grey w-[120px] aspect-square rounded-lg">
                    <ImageWrapper src={CompanyAvatar} width={120} height={120} alt="logo"/>
                </div>
                <div className="flex flex-col ">
                    <h2 className="text-lg font-bold ">{data?.companyName}</h2>
                    <Link  href={`/recruiter?id=${data?.companyId}`} className="flex gap-1 items-center text-hyperlink text-base font-medium">
                        Xem công ty
                        <Image src={Redirect} width={16} height={16} alt="redirect"/>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col w-full divide-y divide-silver-grey divide-dashed ">
                <div className="flex justify-between py-2">
                    <h5 className="text-base text-dark-grey">Mô hình công ty</h5>
                    <span className="text-base text-primary-black">{companyProfile.type}</span>
                </div>
                <div className="flex justify-between py-2">
                    <h5 className="text-base text-dark-grey">Quy mô công ty</h5>
                    <span className="text-base text-primary-black">{companyProfile.size}</span>
                </div>
                <div className="flex justify-between py-2">
                    <h5 className="text-base text-dark-grey">Quốc gia</h5>
                    <span className="text-base text-primary-black">{companyProfile.country}</span>
                </div>
                <div className="flex justify-between py-2">
                    <h5 className="text-base text-dark-grey">Thời gian làm việc</h5>
                    <span className="text-base text-primary-black">{companyProfile.working_day}</span>
                </div>
                <div className="flex justify-between py-2">
                    <h5 className="text-base text-dark-grey">Làm việc ngoài giờ</h5>
                    <span className="text-base text-primary-black">{companyProfile.ot_policy}</span>
                </div>
            </div>
        </section>
    )
}