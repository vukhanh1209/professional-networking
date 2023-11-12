"use client"
import JobList from "@/components/page/Search/JobList";
import HeaderSearchPage from "@/components/page/Search/HeaderSearchPage";
import SearchForm from "@/components/common/SearchBar/SearchForm";
import JobDetailCard from "@/components/page/Search/JobDetailCard";
import { useSearchParams } from "next/navigation";
import { useAppDispatch } from "@/redux/hook";
import { useEffect, useState } from "react";
import { searchByKeyword } from "@/redux/actions";


export default function SearchPage() {
    const [keyword, setKeyword] = useState("")
    const searchParams = useSearchParams()
    const dispatch = useAppDispatch()


    useEffect(() => {
        const key = searchParams.get("key");
        if(key) setKeyword(key)
    },[])

    useEffect(() => {
        const params = {
            keyword: keyword
        }

        if(keyword) dispatch(searchByKeyword(params))
        
    }, [keyword])

    return (
        <>
            <section className="w-full pt-6 pb-24 px-5 lg:px-[1.875rem] primary-gradient">
                <div className="max-w-[1220px] mx-auto">
                    <SearchForm/> 
                </div>
            </section>
            <section className="flex flex-col items-center w-full px-5 lg:px-[1.875rem] py-20 text-primary-black">
                <div className="max-w-[1340px] w-full">
              
                    <HeaderSearchPage keyword={keyword}/>
                    <div className="grid grid-cols-12 mt-6 w-full">
                        <JobList/>
                        <JobDetailCard/>
                    </div>
                </div>
            </section>
        </>
    )
}