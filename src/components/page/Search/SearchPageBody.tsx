import Pagination from "@/components/common/Pagination/Pagination";
import JobDetailCard from "./JobDetailCard";
import JobList from "@/components/page/Search/JobList";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  selectSearchJobsData,
  selectSearchingStatus,
} from "@/redux/reducers/jobSlice";
import { searchByKeyword } from "@/redux/actions";
import {
  selectCandidateLevelFilter,
  selectCompanyTypeFilter,
  selectJobTypeFilter,
  selectSearchFilter,
} from "@/redux/reducers/searchSlice";
import { cityData } from "@/components/common/SearchBar/CityOption";
import { useSearchParams } from "next/navigation";
import { ClipLoader } from "react-spinners";
import Image from "next/image";
import Empty from "@/images/my-job/empty.svg";
import { useEffect } from "react";

export default function SearchPageBody() {
  const seachJobsData = useAppSelector(selectSearchJobsData);
  const isSearching = useAppSelector(selectSearchingStatus);

  const dispatch = useAppDispatch();
  const searchFilter = useAppSelector(selectSearchFilter);
  const searchParams = useSearchParams();

  const jobTypeFilter = useAppSelector(selectJobTypeFilter);
  const candidateLevelFilter = useAppSelector(selectCandidateLevelFilter);
  const companyTypeFilter = useAppSelector(selectCompanyTypeFilter);

  const onChangePage = (value: any) => {
    let keyword = searchParams.get("key");
    let location = searchFilter?.location;

    if (location) {
      const locationQuery = cityData.get(location) || "";
      location = location === "ALL" ? "" : locationQuery;
    }

    const searchParam = {
      keyword,
      location,
      companyType: companyTypeFilter,
      jobType: jobTypeFilter,
      candidateLevel: candidateLevelFilter,
      page: value - 1,
    };
    dispatch(searchByKeyword(searchParam));
  };

  useEffect(() => {
    onChangePage(1);
  }, [searchParams]);
  return (
    <div className="flex flex-col gap-4 w-full">
      {isSearching ? (
        <div className="w-full mt-10 flex items-center justify-center">
          <ClipLoader color="#ed1b2f" size={50} />
        </div>
      ) : (
        <>
          {seachJobsData.totalJob > 0 ? (
            <div className="grid grid-cols-12 mt-6 w-full">
              <JobList />
              <JobDetailCard />
            </div>
          ) : (
            <div className="w-full h-full flex flex-col items-center gap-4 py-20 lg:pt-28 justify-center">
              <Image src={Empty} width={153} height={153} alt="empty" />
              <p className="text-rich-grey text-xl text-center">
                Không tìm thấy công việc phù hợp
              </p>
            </div>
          )}
          {seachJobsData.totalPage > 1 ? (
            <Pagination
              total={seachJobsData.totalPage}
              currentPage={seachJobsData.currentPage + 1}
              onChange={onChangePage}
            />
          ) : null}
        </>
      )}
    </div>
  );
}
