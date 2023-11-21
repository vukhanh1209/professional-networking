"use client"
import BellIcon from "@/images/search/bell.svg"
import FilterIcon from "@/images/search/filter.svg"
import { useAppSelector } from "@/redux/hook"
import { selectTotalJob } from "@/redux/reducers/jobSlice"
import Image from "next/legacy/image"

type HeaderSearchPageProp = {
    keyword: string
}
const HeaderSearchPage = ({keyword} : HeaderSearchPageProp) => {
    const totalJob = useAppSelector(selectTotalJob)

    return (
        <div className="flex justify-between items-center w-full">
            <h1 className="text-3xl font-bold text-left">
                {totalJob} việc làm <span className="text-primary-red">{keyword}</span>
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
    )
}

export default HeaderSearchPage;