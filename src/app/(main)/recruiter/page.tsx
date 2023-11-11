"use client"
import RecuiterHeader from "@/components/page/Recuiter/RecruiterHeader";
import RecruiterBody from "@/components/page/Recuiter/RecuiterBody";
import { getCompanyInfo } from "@/redux/actions/company.action";
import { useAppDispatch } from "@/redux/hook";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


export default function RecruiterPage() {
    const [companyId, setCompanyId] = useState("")

    const searchParam = useSearchParams()
    const id = searchParam.get("id");

    const dispatch = useAppDispatch();

    useEffect(() => {
        if(id) {
            setCompanyId(id)
        } 
    }, [])

    useEffect(() => {
        if(companyId) {
            dispatch(getCompanyInfo(companyId))
        }
    }, [companyId])

    return (
        <>
            <section className="w-full px-5 lg:px-[1.875rem] primary-gradient">
                <div className="max-w-[1340px] mx-auto">
                    <RecuiterHeader/> 
                </div>
            </section>
            <section className="flex flex-col items-center w-full lg:px-[1.875rem] lg:py-8 text-primary-black">
                <div className="max-w-[1340px] w-full">
                    <RecruiterBody />
                </div>
            </section>
        </>
    )
}