"use client"
import JobList from "@/components/page/Search/JobList";
import HeaderSearchPage from "@/components/page/Search/HeaderSearchPage";
import SearchForm from "@/components/common/SearchBar/SearchForm";
import JobDetailCard from "@/components/page/Search/JobDetailCard";
import { useSearchParams } from "next/navigation";
import { useAppDispatch } from "@/redux/hook";
import { useEffect, useState } from "react";
import { searchAllJobs, searchByKeyword } from "@/redux/actions";
import { cityData } from "@/components/common/SearchBar/CityOption";

type searchQueryType = {
    keyword?: string,
    location?: string
}

export default function SearchPage() {
    // const [searchQueries, setSearchQueries] = useState<searchQueryType>({})
    const searchParams = useSearchParams()
    const dispatch = useAppDispatch()


    useEffect(() => {
        const keyword = searchParams.get("key");
        let location = searchParams.get("location") || ""
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
    },[])

    // useEffect(() => {
    //     const params = {
    //         keyword: searchQueries.keyword
    //     }

    //     if(keyword) dispatch(searchByKeyword(params))
        
    // }, [searchQueries])

    return (
        <>
            <section className="w-full pt-6 pb-24 px-5 lg:px-[1.875rem] primary-gradient">
                <div className="max-w-[1220px] mx-auto">
                    <SearchForm/> 
                </div>
            </section>
            <section className="flex flex-col items-center w-full px-5 lg:px-[1.875rem] py-20 text-primary-black">
                <div className="max-w-[1340px] w-full">
              
                    <HeaderSearchPage/>
                    <div className="grid grid-cols-12 mt-6 w-full">
                        <JobList/>
                        <JobDetailCard/>
                    </div>
                </div>
            </section>
        </>
    )
}