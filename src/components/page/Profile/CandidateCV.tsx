"use client"
import InputBox from "../../common/FormInput/FormInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAppDispatch } from "@/redux/hook";
import { applyJob } from "@/redux/actions";
import { useRouter } from "next/navigation";
import YourCV from "../Appication/YourCV";
import CoverLetter from "../Appication/CoverLetter";
import CVSection from "./CVSections";
import CoverLetterSection from "./CoverLetterSection";

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



const CandidateCV = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });
    const dispatch = useAppDispatch()
    const router = useRouter()


    const onSubmit = async (data : any) => {
        const reqBody = {
            ...data,
        }
        dispatch(applyJob(reqBody))
    };

    return (
        <section className="flex flex-col gap-6 mx-auto max-w-[884px] pt-6 pb-10">
            <CVSection/>
            <CoverLetterSection/>
        </section>


    )
}

export default CandidateCV;