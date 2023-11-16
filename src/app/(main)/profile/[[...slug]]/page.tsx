"use client"
import CandidateCV from "@/components/page/Profile/CandidateCV";
import CandidateProfile from "@/components/page/Profile/CandidateProfile";
import { usePathname } from "next/navigation";

export default function Profile () {
    const pathName = usePathname()

    return (
        <div className="relative sm:px-5">
            {pathName.includes("cv") ?
            <CandidateCV/>
            :
            <CandidateProfile/>
            } 

        </div>
    )
}