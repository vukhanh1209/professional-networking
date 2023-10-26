"use client"
import { useEffect, useState } from "react";
import BlueEye from '@/images/blue-eye.svg'
import Image from "next/legacy/image";

const YourCV = () => {
    const [pdfFile, setPdfFile]=useState<any>(null);
    const [blobURL, setBlobURL]=useState<string>("");
  
    const handlePdfFileChange=(e : any)=>{
      let selectedFile=e.target.files[0];
      setPdfFile(selectedFile)
      
    }

    useEffect(() => {
        if (pdfFile) {
            const pdfBlob = new Blob([pdfFile], { type: 'application/pdf' });
            const formData = new FormData();
            formData.append('file', pdfBlob);

            console.log("Log ~ file: YourCV.tsx:32 ~ useEffect ~ formData:", formData.get("file"))

      // Create a blob URL
            const blobUrl = URL.createObjectURL(pdfBlob);
            setBlobURL(blobUrl)
            // Create an <a> tag and trigger a click event to open the PDF in a new tab
    
          }
    }, [pdfFile])
  

    return (
        <>
            <h3 className="text-lg mb-3 font-bold">CV ứng tuyển</h3>
            <div className="flex gap-3 items-start border border-primary-red rounded-lg mt-4 p-4 bg-white-red ">
                <div className="flex flex-col items-start gap-2">
                    <span>Tải lên CV</span>
                    <div className="flex flex-col gap-1 ">
                        <input onChange={handlePdfFileChange} type="file" accept=".pdf, .doc, .docx"/>
                        <span className="text-sm text-dark-grey ">Hỗ trợ định dạng .doc .docx .pdf, không chứa mật khẩu bảo vệ, dung lượng dưới 3MB</span>
                    </div>
                    {blobURL && 
                        <div className="flex items-center gap-2">
                            <a href={blobURL} target="_blank" className="text-hyperlink">{pdfFile?.name}</a>
                            <Image src={BlueEye} alt="eye" width={24} height={24}/>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default YourCV;