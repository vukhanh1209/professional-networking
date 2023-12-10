"use client";
import { useEffect, useState } from "react";
import BlueEye from "@/images/blue-eye.svg";
import Image from "next/legacy/image";
import Link from "next/link";
import { useAppDispatch } from "@/redux/hook";
import { getCandidateCV } from "@/redux/actions";
import { uploadPDF } from "@/redux/actions/upload.action";
import { ClipLoader } from "react-spinners";

const YourCV = ({ cvURL, setCVUrl }: any) => {
  const [pdfFile, setPdfFile] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handlePdfFileChange = async (e: any) => {
    setIsLoading(true);
    let selectedFile = e.target.files[0];
    setPdfFile(selectedFile);
    const uploadPDFResult: any = await dispatch(uploadPDF(selectedFile));
    if (uploadPDFResult.meta.requestStatus === "fulfilled") {
      setCVUrl(uploadPDFResult.payload?.data?.url);
    }
  };

  useEffect(() => {
    if (cvURL) setIsLoading(false);
  }, [cvURL]);

  //   useEffect(() => {
  //       dispatch(getCandidateCV({}))
  //   }, [])

  return (
    <>
      <h3 className="text-lg mb-3 font-bold">CV ứng tuyển</h3>
      <div className="relative flex gap-3 items-start border border-silver-grey rounded-lg mt-4 p-4  ">
        <div className="flex flex-col items-start gap-2 w-full">
          <span>Tải lên CV</span>
          <div className="flex flex-col gap-1 w-full">
            <input
              onChange={handlePdfFileChange}
              type="file"
              accept=".pdf, .doc, .docx"
            />

            <span className="text-sm text-dark-grey">
              Hỗ trợ định dạng .doc .docx .pdf, không chứa mật khẩu bảo vệ, dung
              lượng dưới 3MB
            </span>
          </div>
          {isLoading ? (
            <ClipLoader size={32} color="#ed1b2f" />
          ) : (
            cvURL && (
              <Link
                href={cvURL}
                target="_blank"
                className="flex gap-2 w-full items-center text-hyperlink "
              >
                <p className="truncate max-w-[80%]">{pdfFile?.name}</p>
                <Image src={BlueEye} alt="eye" width={24} height={24} />
              </Link>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default YourCV;
