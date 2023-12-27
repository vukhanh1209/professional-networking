"use client";
import FilterCandidateLevel from "./FilterCandidateLevel";
import FilterCompanyType from "./FilterCompanyType";
import FilterJobType from "./FilterJobType";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  closeFilterModal,
  deleteFilter,
  selectCandidateLevelFilter,
  selectCompanyTypeFilter,
  selectFilterCount,
  selectIsOpenFilterModal,
  selectJobTypeFilter,
  selectSalaryFilter,
} from "@/redux/reducers/searchSlice";
import CloseIcon from "@/images/close.svg";
import Image from "next/image";
import { searchByKeyword } from "@/redux/actions";
import { useRouter, useSearchParams } from "next/navigation";
import { cityData } from "@/components/common/SearchBar/CityOption";
import InputRange from "react-input-range";
import { useState } from "react";
import FilterSalary from "./FilterSalary";

export default function ModalFilter() {
  const jobTypeFilter = useAppSelector(selectJobTypeFilter);
  const candidateLevelFilter = useAppSelector(selectCandidateLevelFilter);
  const companyTypeFilter = useAppSelector(selectCompanyTypeFilter);
  const salaryFilter = useAppSelector(selectSalaryFilter);
  const isOpenFilterModal = useAppSelector(selectIsOpenFilterModal);
  const filterCount = useAppSelector(selectFilterCount);
  const searchParam = useSearchParams();

  const dispatch = useAppDispatch();
  const onDeleteAllFilter = () => {
    dispatch(deleteFilter());
  };

  const onCloseModal = () => {
    dispatch(closeFilterModal());
  };

  const onApplyFilter = () => {
    const keyword = searchParam.get("key") || "";
    let location = searchParam.get("location") || "";
    const params = new URLSearchParams(searchParam);
    params.delete("page");

    if (location) {
      const locationQuery = cityData.get(location) || "";
      location = location === "ALL" ? "" : locationQuery;
    }

    let searchParams = {
      keyword,
      location,
      companyType: companyTypeFilter,
      jobType: jobTypeFilter,
      candidateLevel: candidateLevelFilter,
      salaryMin: salaryFilter.minSalary,
      salaryMax: salaryFilter.maxSalary,
    };

    dispatch(searchByKeyword(searchParams));
    onCloseModal();
  };

  return (
    <>
      {isOpenFilterModal ? (
        <div className="fixed top-0 left-0 right-0 flex items-center justify-center w-full h-screen bg-blur-form z-[100] px-5 py-8 overflow-auto">
          <section className="h-fit w-full pb-5 md:max-w-[50%] bg-white rounded-lg mt-10 overflow-hidden">
            <div className="flex justify-between items-center border-b border-silver-grey py-4 px-8 ">
              <h1 className="font-bold text-xl text-primary-black ">Bộ lọc</h1>

              <button className="p-2 hover:bg-light-grey rounded-full transition-all">
                <Image
                  onClick={onCloseModal}
                  width={32}
                  height={32}
                  src={CloseIcon}
                  alt="close"
                />
              </button>
            </div>

            <div className="max-h-[400px] md:max-h-[500px] overflow-auto">
              <div className="flex flex-col gap-8 p-8">
                <FilterCandidateLevel />
                {/* <InputRange
                maxValue={10000}
                minValue={500}
                step={500}
                value={salary}
                onChange={(value) => setSalary({ value })}
              /> */}
                <FilterSalary />
                <FilterCompanyType />
                <FilterJobType />
              </div>

              <div className="flex items-center justify-between gap-2 py-4 px-8 border-t border-t-silver-grey">
                <button
                  type="button"
                  onClick={onDeleteAllFilter}
                  className="text-hyperlink text-base py-2 flex items-center"
                >
                  <span>Xóa bộ lọc &nbsp;</span>
                  <span>
                    {filterCount > 0 ? <span>({filterCount})</span> : null}
                  </span>
                </button>
                <button
                  onClick={onApplyFilter}
                  className="text-white bg-primary-red text-base py-3 px-4 md:px-6 rounded-lg hover:bg-dark-red max-w-[120px] md:max-w-[180px] w-full"
                >
                  Áp dụng
                </button>
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
