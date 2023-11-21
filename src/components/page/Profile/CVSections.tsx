"use client"
import { useEffect, useState } from "react";
import BlueEye from '@/images/blue-eye.svg'
import Image from "next/legacy/image";
import Link from "next/link";
import { File } from "buffer";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { applyJob, getCandidateCV, uploadDefaultCV } from "@/redux/actions";
import { uploadPDF } from "@/redux/actions/upload.action";
import { useForm } from "react-hook-form";

import Upload from "@/images/profile/upload.svg"
import CV from '@/images/profile/cv.svg'
import { selectCV } from "@/redux/reducers/candidateSlice";

export default function CVSection({linkCV} : any) {
    const [pdfFile, setPdfFile]=useState<any>();
    const [cvURL, setCVURL]=useState<string>("");

    const dispatch = useAppDispatch()
    
    const handlePdfFileChange=(e : any)=>{
      let selectedFile=e.target.files[0];
      setPdfFile(selectedFile)
      
    }

    useEffect(() => {
        async function uploadCV() {
            const uploadPDFResult : any = await dispatch(uploadPDF(pdfFile));
            if(uploadPDFResult.meta.requestStatus === "fulfilled") {
                const cvURLResponse = uploadPDFResult.payload?.data?.url;
                setCVURL(cvURLResponse)
                const requestBody = {
                    file: cvURLResponse
                }
                dispatch(uploadDefaultCV(requestBody))
            }

        }
        if (pdfFile) {
            uploadCV()
          }
    }, [pdfFile])


  

    return (
        <section className="flex flex-col gap-2 bg-white rounded-lg px-6 pt-6 pb-8 text-primary-black">
            <h3 className="text-xl font-bold">Quản lý CV</h3>
            <span className="py-4 text-rich-grey">Tải CV của bạn bên dưới để có thể sử dụng xuyên suốt quá trình tìm việc</span>
            <div className="relative flex flex-col md:flex-row gap-3 items-start border border-silver-grey rounded-lg p-4  ">
                <div className="absolute right-4 top-4 bg-[#e9e9e9] text-rich-grey text-sm py-[6px] pr-3 pl-[10px] rounded h-fit">
                    Mặc định
                </div>

                <div className="mt-1">
                    <Image src={CV} width={40} height={40} alt="cv" />
                </div>
                <div className="flex flex-col items-start gap-2 w-full">
                    <div className="flex justify-between w-full">
                        <div className="flex flex-col gap-2">
                            <span className="font-medium">CV của bạn</span>
                            <Link href={cvURL || linkCV || ""} target="_blank" className="text-rich-grey underline truncate max-w-[80%] sm:max-w-full">
                                {pdfFile ? pdfFile.name : "CV mặc định của bạn"}
                            </Link>
                            {/* <span className="text-sm text-[#868686]">Cập nhật: 14/11/2023</span> */}

                        </div>
                    </div>
                    <span className="flex flex-col lg:flex-row lg:items-center gap-2">
                        <label htmlFor="CVInput" className="text-hyperlink cursor-pointer text-base flex items-center gap-1">
                            <Image src={Upload} width={20} height={20} alt="Upload"/>
                            Tải lên CV mới
                        </label>
                        <span className="text-sm text-[#868686] ">(Sử dụng tệp .doc, .docx hoặc .pdf, không chứa mật khẩu bảo vệ và dưới 3MB)</span>
                    </span>

                    <input onChange={handlePdfFileChange} type="file" accept=".pdf, .doc, .docx" id="CVInput" className="h-0 w-0"/>

                    <div className="flex flex-col gap-1 w-full">
                        {/* <input type="text" placeholder="" {...register}  value={cvURL} name="linkCv" className="opacity-0 h-0"/> */}
                    </div>
                    {/* {cvURL && 
                        <Link href={cvURL} target="_blank" className="flex gap-2 w-full items-center text-hyperlink ">
                            <p className="truncate max-w-[80%]">{pdfFile?.name}</p>
                            <Image src={BlueEye} alt="eye" width={24} height={24}/>
                        </Link>
                    } */}

                </div>
            </div>
        </section>
    )
}