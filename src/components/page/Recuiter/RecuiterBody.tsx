"use client";
import Link from "next/link";
import Introduction from "./Information";
import { usePathname } from "next/navigation";
import Overview from "./Overview";
import KeySkills from "./KeySkills";
import Benefits from "./Benefits";
import JobCard from "@/components/common/JobCard";
import { useAppSelector } from "@/redux/hook";
import { selectOpeningJobs } from "@/redux/reducers/companySlice";

export default function RecruiterBody({ data }: any) {
  const pathName = usePathname();
  const openingJobs = useAppSelector(selectOpeningJobs);

  return (
    <div className="relative grid grid-cols-12 w-full">
      <section className=" flex flex-col gap-6 col-span-full lg:col-span-8">
        <nav className="sticky top-[88px] z-40 flex justify-center lg:justify-start gap-12 bg-white w-full lg:rounded-lg drop-shadow-lg text-rich-grey px-6 font-semibold">
          <Link
            href="/recruiter"
            className={`${
              pathName === "/recruiter" && "tab--active"
            } py-4 lg:py-6 opacity-80 tab`}
          >
            Giới thiệu
          </Link>
          <Link
            href="/recruiter/review"
            className={`${
              pathName.includes("/review") && "tab--active"
            } flex items-center gap-3  py-4 lg:py-6 opacity-80 tab`}
          >
            Đánh giá
            <span className="bg-rich-grey px-2 rounded-full text-white font-normal">
              25
            </span>
          </Link>
        </nav>
        <Introduction />
        <Overview />
        <KeySkills />
        <Benefits />
      </section>
      <section className="col-span-full lg:col-span-4 lg:pl-6">
        <div className="flex flex-col sticky top-[88px] z-40 py-7 px-5 lg:px-0 lg:py-0">
          <p className="font-bold text-xl lg:text-2xl pt-3 pb-6">
            {`${openingJobs?.length} việc làm đang tuyển dụng`}{" "}
          </p>
          <div className="lg:h-[90vh] lg:overflow-auto">
            {openingJobs?.map((jobData: any, index: number) => (
              <JobCard key={index} data={jobData} isSelected={false} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
