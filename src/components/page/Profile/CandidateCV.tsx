"use client"
import { useAppDispatch } from "@/redux/hook";
import { getCandidateCV } from "@/redux/actions";
import CVSection from "./CVSections";
import CoverLetterSection from "./CoverLetterSection";
import { useEffect, useState } from "react";

type CVDataType = {
    linkCv: string
    coverLetter: string
    updatedAt: string
}


const CandidateCV = () => {
    const [cvData, setCVData] = useState<CVDataType | null>(null);
    const dispatch = useAppDispatch();

    useEffect(() => {
        async function fetchCVData() {
            const res = await dispatch(getCandidateCV({}))
            if(res.meta.requestStatus === "fulfilled") {
                setCVData(res.payload)
            }
        }
        if(!cvData) {
            fetchCVData()
        }
    }, [])



    return (
        <section className="flex flex-col gap-6 mx-auto max-w-[884px] pt-6 pb-10">
            <CVSection linkCV={cvData?.linkCv} updatedAt={cvData?.updatedAt}/>
            <CoverLetterSection defaultCoverLetter={cvData?.coverLetter}/>
        </section>


    )
}

export default CandidateCV;