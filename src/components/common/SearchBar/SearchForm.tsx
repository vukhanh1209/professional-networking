"use client"
import { useRef } from "react";
import Image from "next/legacy/image";
import CloseIcon from "@/images/close.svg";

import SearchIcon from '@/images/search.svg'
import useSearch from "@/hook/useSearch";
import CityOption from "./CityOption";


const SearchForm = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const {
    value,
    handleSubmit,
    onSubmit,
    focus,
    register,
    onBlurInput,
    onFocusInput,
    onInputChange,
    onRemoveSearchText,
  } = useSearch();

  const handlePressEnter = (event: any) => {
    if(event.code == "Enter") {
      onBlurInput();
      onRemoveSearchText();
      if(inputRef) inputRef?.current?.blur();
    }
  }
 
  return (
    <div className=" relative w-full h-fit ">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:flex-row gap-3">
        <CityOption/>
        <div
          className={`flex md:gap-3 w-full h-14 rounded-lg `}
        >
          <div
            className={` ${
              focus ? " border-dark-red" : "border-transparent" 
            } border-[3px] relative w-full h-full transition-all duration-300 flex items-center rounded-l-lg md:rounded-r-lg px-4 bg-white`}
          >
            {/* <div className="flex items-center w-5 h-5 ml-3 my-[14px]">
              <Image src={SearchIcon} alt="search icon" />
            </div> */}
            <input
              className={`grow text-base outline-none placeholder:text-[#8C8C8C] bg-transparent text-primary-black`}
              {...register("search")}
              placeholder="Nhập từ khóa theo kỹ năng, chức vụ, công ty..."
              ref={inputRef}
              onFocus={onFocusInput}
              value={value}
              onChange={onInputChange}
              onKeyUp={(e) => handlePressEnter(e)}
              id="search"
              onBlur={onBlurInput}
              autoComplete="off"
            />
            <button
                disabled={value == ""}
                type="button"
                className={`${value == "" && "invisible"} ml-4 flex items-center`}
                onClick={(e) => {
                  e.preventDefault();
                  onRemoveSearchText()
                }}
              >
                <Image src={CloseIcon} alt="close" className="w-5 h-auto" />
            </button>
          </div>
          <button 
              type="submit"
              className="hover:bg-[#c2222] md:min-w-[240px] flex items-center justify-center py-3 px-6 w-fit md:rounded-l-lg rounded-r-lg bg-[#ed1b2f] transition-all duration-100 ">
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
