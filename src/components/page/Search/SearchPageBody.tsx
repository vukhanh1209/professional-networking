import Pagination from "@/components/common/Pagination/Pagination";
import JobDetailCard from "./JobDetailCard";
import JobList from "@/components/page/Search/JobList";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { selectSearchJobsData } from "@/redux/reducers/jobSlice";
import { searchByKeyword } from "@/redux/actions";
import { selectSearchFilter } from "@/redux/reducers/searchSlice";
import { cityData } from "@/components/common/SearchBar/CityOption";
import { useSearchParams } from "next/navigation";

export default function SearchPageBody() {
  const seachJobsData = useAppSelector(selectSearchJobsData);
  const dispatch = useAppDispatch();
  const searchFilter = useAppSelector(selectSearchFilter);
  const searchParams = useSearchParams();

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
      page: value - 1,
    };
    dispatch(searchByKeyword(searchParam));
  };
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="grid grid-cols-12 mt-6 w-full">
        <JobList />
        <JobDetailCard />
      </div>
      {seachJobsData.totalPage > 1 ? (
        <Pagination
          total={seachJobsData.totalPage}
          currentPage={seachJobsData.currentPage + 1}
          onChange={onChangePage}
        />
      ) : null}
    </div>
  );
}
