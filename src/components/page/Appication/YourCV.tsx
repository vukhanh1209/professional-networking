"use client"
import { useEffect, useState } from "react";
import BlueEye from '@/images/blue-eye.svg'
import Image from "next/legacy/image";
import Link from "next/link";
import { File } from "buffer";
import { useAppDispatch } from "@/redux/hook";
import { applyJob } from "@/redux/actions";
import { uploadPDF } from "@/redux/actions/upload.action";

const YourCV = ({register, error} : any) => {
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
                setCVURL(uploadPDFResult.payload?.data?.url)
            }

        }
        if (pdfFile) {
            uploadCV()
          }
    }, [pdfFile])
  

    return (
        <>
            <h3 className="text-lg mb-3 font-bold">CV ứng tuyển</h3>
            <div className="relative flex gap-3 items-start border border-silver-grey rounded-lg mt-4 p-4  ">
                <div className="flex flex-col items-start gap-2 w-full">
                    <span>Tải lên CV</span>
                    <div className="flex flex-col gap-1 w-full">
                        <input onChange={handlePdfFileChange} type="file" accept=".pdf, .doc, .docx"/>
                        <input type="text" placeholder="" {...register}  value={cvURL} name="linkCv" className="opacity-0 h-0"/>
                        <span className="text-sm text-dark-grey">Hỗ trợ định dạng .doc .docx .pdf, không chứa mật khẩu bảo vệ, dung lượng dưới 3MB</span>
                    </div>
                    {cvURL && 
                        <Link href={cvURL} target="_blank" className="flex gap-2 w-full items-center text-hyperlink ">
                            <p className="truncate max-w-[80%]">{pdfFile?.name}</p>
                            <Image src={BlueEye} alt="eye" width={24} height={24}/>
                        </Link>
                    }

                </div>
                <p className={`${error ? "opacity-1" : "opacity-0"} absolute top-[100%] left-0 text-xs text-[#FF3D54] first-letter:uppercase min-h-[16px] my-1`}>{error?.message}</p>
            </div>
        </>
    )
}

export default YourCV;