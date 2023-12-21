"use client";
import { ApplicationResponse } from "@/types/recruiter.type";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ApplicationCard({
  data,
}: {
  data: ApplicationResponse;
}) {
  const router = useRouter();
  const onClickApplication = () => {
    router.push(`/customer/application-detail?id=${data?.id}`);
  };

  return (
    <div
      onClick={onClickApplication}
      className={`bg-white relative flex flex-col justify-center text-primary-black mb-4 p-6 rounded-lg w-full h-fit cursor-pointer shadow-md hover:shadow-xl transition-all duration-100`}
    >
      <span className="text-dark-grey text-sm">
        Ứng tuyển ngày {data.submittedAt}
      </span>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
        <Link
          onClick={(e) => e.stopPropagation()}
          href={`/customer/posted-job?id=${data.jobId}`}
          className="font-semibold text-xl mt-2 mb-1 hover:text-hyperlink"
        >
          {data.jobTitle}
        </Link>

        <button
          className={`${
            data.status === "APPROVED" &&
            "border-available-green text-available-green"
          } ${
            data.status === "DELIVERED" && "border-hyperlink text-hyperlink"
          }  px-2 py-1 rounded-lg border text-sm w-fit md:mt-2`}
        >
          {data.status}
        </button>
      </div>
      <span className="">{data.candidateName}</span>
    </div>
  );
}
