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
    router.push(`/application-detail?id=`);
  };

  return (
    <div
      onClick={onClickApplication}
      className={`bg-white relative flex flex-col justify-center text-primary-black mb-4 p-6 rounded-lg w-full h-fit cursor-pointer shadow-md hover:shadow-xl transition-all duration-100`}
    >
      <span className="text-dark-grey text-sm">
        Ứng tuyển ngày {data.submittedAt}
      </span>
      <Link
        onClick={(e) => e.stopPropagation()}
        href={`/customer/posted-job?id=${data.jobId}`}
        className="font-semibold text-xl mt-2 mb-1 hover:text-hyperlink"
      >
        {data.jobTitle}
      </Link>
      <span className="">{data.candidateName}</span>
      <button className="absolute px-2 py-1 rounded-lg right-6 border border-available-green text-available-green text-sm">
        {data.status}
      </button>
    </div>
  );
}
