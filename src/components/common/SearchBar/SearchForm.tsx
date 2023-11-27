"use client"
import { useRef, useState } from "react";
import Image from "next/legacy/image";
import CloseIcon from "@/images/close.svg";

import SearchIcon from '@/images/search.svg'
import CityOption, { cityData } from "./CityOption";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { selectSearchFilter } from "@/redux/reducers/searchSlice";
import { searchAllJobs, searchByKeyword } from "@/redux/actions";

const schema = yup.object().shape({
  keyword: yup.string()
});

const SearchForm = () => {
  const searchParam = useSearchParams()

  const {
    register,
    handleSubmit,
    watch,
    setValue
  } = useForm({ resolver: yupResolver(schema) });

  const searchFilter = useAppSelector(selectSearchFilter)
  
  const router = useRouter();
  const pathName = usePathname()
  const dispatch = useAppDispatch()
  
  const onSearchJob = (data : any) => {
    let keyword = data?.keyword;
    const keywordQuery = `key=${keyword}`
    let location = searchFilter?.location;
    const locationQuery = `location=${location}`

    if(keyword || location) router.push(`/search?${keywordQuery}&${locationQuery}`);
    else router.push("/search")

    if(location) {
        const locationQuery = cityData.get(location) || ""
        location = location === "ALL" ? "" : locationQuery;
    }
    
    const searchParam = {
        keyword,
        location
    }
    if(!keyword && !location) {
        dispatch(searchAllJobs({}))
    }
    else {
        dispatch(searchByKeyword(searchParam))
    }
  };


 
  return (
    <div className=" relative w-full h-fit ">
      <form onSubmit={handleSubmit(onSearchJob)} className="flex flex-col md:flex-row gap-3">
        <CityOption/>
        <div
          className={`flex md:gap-3 w-full h-14 rounded-lg `}
        >
          <div
            className={`
              focus:border-dark-red border-transparent
            border-[3px] relative w-full h-full transition-all duration-300 flex items-center rounded-l-lg md:rounded-r-lg px-4 bg-white`}
          >
            <input
              className={`grow text-base outline-none placeholder:text-[#8C8C8C] bg-transparent text-primary-black`}
              {...register("keyword")}
              type="text"
              placeholder="Nhập từ khóa theo kỹ năng, chức vụ, công ty..."
              defaultValue={searchParam.get("key") || watch("keyword")}
              autoComplete="off"
            />
            <button
                disabled={watch("keyword") == ""}
                type="button"
                className={`${!watch("keyword") && "invisible"} ml-4 flex items-center`}
                onClick={(e) => {
                  e.preventDefault();
                  setValue("keyword", "")
                }}
              >
                <Image src={CloseIcon} alt="close" className="w-5 h-auto" />
            </button>
          </div>
          <button 
              type="submit"
              className="hover:bg-[#c22222] md:min-w-[240px] flex items-center justify-center py-3 px-6 w-fit md:rounded-l-lg rounded-r-lg bg-[#ed1b2f] transition-all duration-200 ">
              <div className="inline w-5 h-5 shrink-0 md:mr-2">
                <Image src={SearchIcon} alt="search" className="w-5 h-5"/>
              </div>
              <span className="hidden md:inline text-lg font-medium text-white whitespace-nowrap">Tìm kiếm</span>
          </button>
        </div>
      </form>
      {/* {<ModalSearch value={value.toLowerCase()} isFocusingOnSearchBar={focus} removeInputText={onRemoveSearchText}/>} */}
    </div>
  );
};
export default SearchForm;
