"use client"
import Image from 'next/image'

import SunGroveCompany from "public/images/home/sungrove-company.png"
import NabCompany from "public/images/home/nab-company.png"
import MBCompany from "public/images/home/mb-company.png"
import Link from 'next/link'
import { useRouter } from 'next/navigation'


const topRecruiters = [
    {
      img: SunGroveCompany,
      name: "Sungrove Tech Vietnam",
      location: "Ho Chi Minh",
      key_skils: ["ReactJS", "VueJS", "TypeScript", "Ruby on Rails", "Python", "JavaScript"],
      job_amount: 2
    },
    {
      img: NabCompany,
      name: "NAB Innovation Centre Vietnam",
      location: "Ho Chi Minh",
      key_skils: ["NodeJS", "ReactJS", "Java", "Agile", "DevOps", "Cloud"],
      job_amount: 5
    },
    {
      img: MBCompany,
      name: "MB Bank",
      location: "Ha Noi",
      key_skils: ["Java", "Oracle", ".NET", "C++"],
      job_amount: 10
    }
  ]

const TopRecruiters = () => {
    const router = useRouter();
    const handleClickTopRecruiter = () => {
        router.push("/recruiter")
    }
    return (
        <section className="flex flex-col items-center w-full bg-light-grey py-20 px-5 md:px-[30px] text-primary-black ">
            <h1 className="text-3xl font-bold pb-4 text-center">Nhà Tuyển Dụng Hàng Đầu</h1>
            <div className="flex flex-col md:flex-row md:mx-[60px] pt-20">
                {topRecruiters.map((recruiter : any, index : number) => (
                    <div 
                        key={index}
                        onClick={handleClickTopRecruiter}
                        className="min-h-[390px] mb-20 flex flex-col md:mx-3 items-center  w-full h-full bg-white rounded-lg border border-light-grey px-4 drop-shadow-sm"
                    >
                        <div className="bg-white w-40 h-40 rounded-lg border border-light-grey -translate-y-12">
                            <Image src={recruiter.img} width={160} height={160} alt={recruiter.name} className="w-full h-full"/>
                        </div>
                        <div className="flex flex-col items-center justify-between">
                            <div className="flex flex-col items-center">
                                <h2 className="mt-5 text-lg font-bold">{recruiter.name}</h2>
                                <p className="text-base text-dark-grey text-center mt-3">{recruiter.location}</p>
                                <div className="flex flex-wrap justify-center gap-3 mt-6">
                                    {recruiter.key_skils.map((skill : string, skillIndex: number) => (
                                    <div 
                                        key={skillIndex} 
                                        className="py-2 px-3 text-sm rounded-full bg-light-grey text-rich-grey"
                                    >
                                        {skill}
                                    </div>
                                    ))}
                                </div>
                            </div>
                            <Link href="/abc" className="text-base text-hyperlink mb-4 z-20">{`${recruiter.job_amount} việc làm`}</Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TopRecruiters;