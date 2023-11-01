import JobCard from "@/components/common/JobCard";
import CompanyAvatar from '@/images/search/companyAvatar.png'

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

export default function JobList() {
    return (
        <>
            <JobCard data={jobData} isSelected={false}/>
            <JobCard  data={jobData} isSelected={false}/>
            <JobCard  data={jobData} isSelected={false}/>
            <JobCard  data={jobData} isSelected={false}/>
        </>
    )
}