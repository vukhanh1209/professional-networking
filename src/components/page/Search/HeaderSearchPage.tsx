"use client";
import BellIcon from "@/images/search/bell.svg";
import FilterIcon from "@/images/search/filter.svg";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  selectSearchingStatus,
  selectTotalJob,
} from "@/redux/reducers/jobSlice";
import {
  closeFilterModal,
  openFilterModal,
} from "@/redux/reducers/searchSlice";
import Image from "next/legacy/image";

const HeaderSearchPage = () => {
  const totalJob = useAppSelector(selectTotalJob);
  const isSearching = useAppSelector(selectSearchingStatus);

  const dispatch = useAppDispatch();
  const onOpenFilterModal = () => {
    dispatch(openFilterModal());
  };

  const onCloseFilterModal = () => {
    dispatch(closeFilterModal());
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between lg:items-center w-full gap-y-8">
      <h1 className="text-2xl md:text-3xl font-bold text-left">
        {/* {totalJob} việc làm <span className="text-primary-red">{keyword}</span> */}
        {isSearching ? (
          <span className="animate-pulse">Đang tìm kiếm...</span>
        ) : (
          `${totalJob} việc làm được tìm thấy`
        )}
      </h1>
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3 gap-y-5">
        {/* <button className="flex items-center justify-center gap-2 border border-primary-red rounded-lg py-2 px-5 hover:bg-white-red transition-all duration-100 ">
          <div className="flex items-center shrink-0">
            <Image src={BellIcon} alt="notification" className="w-5 h-5" />
          </div>
          <span className="text-base font-medium text-primary-red">
            Nhận thông báo
          </span>
        </button> */}

        <button
          onClick={onOpenFilterModal}
          className="flex items-center justify-center gap-2 border border-primary-red rounded-lg py-2 px-5 hover:bg-white-red transition-all duration-100 "
        >
          <div className="flex items-center shrink-0">
            <Image src={FilterIcon} alt="notification" className="w-5 h-5" />
          </div>
          <span className="text-base font-medium text-primary-red">Bộ lọc</span>
        </button>
      </div>
    </div>
  );
};

export default HeaderSearchPage;
