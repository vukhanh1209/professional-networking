"use client"
import InputBox from "../../common/FormInput/FormInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAppDispatch } from "@/redux/hook";
import { applyJob, getCandidateCV } from "@/redux/actions";
import { useRouter } from "next/navigation";
import YourCV from "../Appication/YourCV";
import CoverLetter from "../Appication/CoverLetter";
import CVSection from "./CVSections";
import CoverLetterSection from "./CoverLetterSection";
import { useEffect, useState } from "react";

const schema = yup.object().shape({
    candidateName: yup
    .string()
    .required('Bạn chưa nhập họ tên'),
    linkCv: yup
    .string()
    .required('Bạn chưa tải lên CV'),
    coverLetter: yup
    .string()
    .max(500, "Thư xin việc không được dài quá 500 ký tự"),
});

type CVDataType = {
    linkCv: string
    coverLetter: string
}


const CandidateCV = () => {
    const [cvData, setCVData] = useState<CVDataType>();
    const dispatch = useAppDispatch();
    useEffect(() => {
        async function fetchCVData() {
            const res = await dispatch(getCandidateCV({}))
            if(res.meta.requestStatus === "fulfilled") setCVData(res.payload)
        }

        if(!cvData) {
            fetchCVData()
        }
    }, [])



    return (
        <section className="flex flex-col gap-6 mx-auto max-w-[884px] pt-6 pb-10">
            <CVSection linkCV={cvData?.linkCv}/>
            <CoverLetterSection defaultCoverLetter={cvData?.coverLetter}/>
        </section>


    )
}

export default CandidateCV;