import JobCard from "@/components/common/JobCard";
import CompanyAvatar from '@/images/search/companyAvatar.png'

const jobData = {
    appliedDate: 10,
    title: "[Remote] - Shopify App Dev (ReactJS, Laravel,Hidrogen)",
    companyAvatar: CompanyAvatar,
    companyName: "Yet Company",
    minSalary: 1000,
    maxSalary: 1500,
    isRemote: true,
    location: "Ho Chi Minh",
    jobSkills: ["ReactJS", "English", "Lavarel"],
    hot_level: 2
}

export default function MyJobList () {
    return (
        <section className=" w-full max-w-[1340px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                    <JobCard data={jobData} isSelected={false} paddingClassName="px-4 pt-4 pb-5"/>
                    <JobCard data={jobData} isSelected={false} paddingClassName="px-4 pt-4 pb-5"/>
                    <JobCard data={jobData} isSelected={false} paddingClassName="px-4 pt-4 pb-5"/>
                    <JobCard data={jobData} isSelected={false} paddingClassName="px-4 pt-4 pb-5"/>
                    <JobCard data={jobData} isSelected={false} paddingClassName="px-4 pt-4 pb-5"/>
                </div>
            </section>
    )
}