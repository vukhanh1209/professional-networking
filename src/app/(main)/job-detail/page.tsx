import JobDetailCard from "@/components/page/JobDetail/JobDetailCard";
import CompanyInfoCard from "@/components/page/JobDetail/CompanyInfoCard";

import Image from "next/image";

export default function JobDetail() {
    return (
        <div className="lg:sticky lg:top-[56px] mx-auto max-w-[1340px]">
            <div className="grid grid-cols-12 lg:pt-8 pb-16 ">
                <div className="col-span-full lg:col-span-8 w-full">
                    <JobDetailCard/>
                </div>
                <div className="col-span-full lg:col-span-4 w-full mt-8 lg:mt-0 lg:pl-6">
                    <CompanyInfoCard/>
                </div>
            </div>
        </div>
    )
}

