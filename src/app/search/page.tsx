import {SearchForm} from "@/components/Search";
import Image from "next/legacy/image";

import BellIcon from "@/images/search/bell.svg"
import FilterIcon from "@/images/search/filter.svg"
import JobCard from "@/components/JobCard";
import JobDetailCard from "@/components/JobDetailCard";


export default function SearchPage() {
    return (
        <div className="">
            <section className="w-full pt-6 pb-24 px-5 lg:px-[1.875rem] primary-gradient">
                <div className="max-w-[1220px] mx-auto ">
                    <SearchForm/> 
                </div>
            </section>
            <section className="flex flex-col items-center w-full px-5 lg:px-[1.875rem] py-20 text-primary-black">
                <div className="max-w-[1340px] w-full">
                    <div className="flex justify-between items-center w-full">
                        <h1 className="text-3xl font-bold text-left">
                            62 việc làm <span className="text-primary-red">{`reactjs`}</span> tại Hồ Chí Minh
                        </h1>
                        <div className="flex items-center gap-3">
                            <button className="flex items-center justify-center gap-2 border border-primary-red rounded-lg py-2 px-5 hover:bg-white-red transition-all duration-100 ">
                                <div className="flex items-center shrink-0">
                                    <Image src={BellIcon} alt="notification" className="w-5 h-5"/>
                                </div>
                                <span className="text-base font-medium text-primary-red">Nhận thông báo</span>
                            </button>

                            <button className="flex items-center justify-center gap-2 border border-primary-red rounded-lg py-2 px-5 hover:bg-white-red transition-all duration-100 ">
                                <div className="flex items-center shrink-0">
                                    <Image src={FilterIcon} alt="notification" className="w-5 h-5"/>
                                </div>
                                <span className="text-base font-medium text-primary-red">Bộ lọc</span>
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 mt-6 w-full">
                        <div className="col-span-full lg:col-span-5 lg:pr-6">
                            <JobCard isSelected={true}/>
                            <JobCard isSelected={false}/>
                            <JobCard isSelected={false}/>
                            <JobCard isSelected={false}/>
                            <JobCard isSelected={false}/>
                            <JobCard isSelected={false}/>
                            <JobCard isSelected={false}/>
                            <JobCard isSelected={false}/>
                            <JobCard isSelected={false}/>
                            <JobCard isSelected={false}/>
                            <JobCard isSelected={false}/>
                            <JobCard isSelected={false}/>
                            <JobCard isSelected={false}/>
                            <JobCard isSelected={false}/>

                        </div>

                        <div className="hidden lg:flex lg:col-span-7">
                            <JobDetailCard/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}