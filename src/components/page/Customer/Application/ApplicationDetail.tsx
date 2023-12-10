import { recruiterApplicationById } from "@/redux/actions/recruiter.action";
import { useAppDispatch } from "@/redux/hook";
import { selectApplicationData } from "@/redux/reducers/recruiterSlice";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import BlueEye from "@/images/blue-eye.svg";

export default function ApplicationDetail() {
  const searchParams = useSearchParams();
  const applicationId = searchParams.get("id");
  const applicationData = useSelector(selectApplicationData);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (applicationId) {
      dispatch(recruiterApplicationById(applicationId));
    }
  }, [applicationId]);

  return (
    <section className="relative bg-white drop-shadow-md w-full h-fit p-5 lg:p-8 lg:rounded-xl text-primary-black">
      <div className="absolute right-5 top-5">
        <button className="px-2 py-1 rounded-lg right-6 border border-available-green text-available-green text-sm">
          {applicationData.status}
        </button>
      </div>
      <Link
        href={`/customer/posted-job?id=${applicationData?.jobId}`}
        className="text-2xl mb-6  font-bold"
      >
        {applicationData?.jobTitle}
      </Link>
      <span>{applicationData?.candidateName}</span>
      <Link
        href={applicationData?.linkCV}
        target="_blank"
        className="flex gap-2 w-full items-center text-hyperlink "
      >
        {/* <p className="truncate max-w-[80%]">{pdfFile?.name}</p> */}
        <Image src={BlueEye} alt="eye" width={24} height={24} />
      </Link>

      <div className="flex flex-col">
        <h3 className="text-lg mb-3 font-bold">Thư xin việc</h3>

        <p className="text-base mb-3 font-normal">
          Những kỹ năng, dự án hay thành tựu nào chứng tỏ bạn là một ứng viên
          tiềm năng cho vị trí ứng tuyển này?
        </p>
        <p className="h-[120px] placeholder:text-base placeholder:text-dark-grey w-full text-primary-black border border-silver-gray rounded-lg p-4">
          {applicationData?.coverLetter}
        </p>
      </div>
    </section>
  );
}
