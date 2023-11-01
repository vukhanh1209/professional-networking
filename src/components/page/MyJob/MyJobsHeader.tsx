
"use client" 
import DropDown from "@/components/common/Dropdown";
import Image from "next/legacy/image";
import { useState } from "react";

import ArrowUp from '@/images/arrow-up.svg'


const sortItems = new Map([
    ["RECENT", "Xem gần nhất"],
    ["EXP", "Sắp hết hạn"],
    ["NEW", "Đăng mới nhất"],

  ]);

export default function MyJobsHeader() {
    const [currentKey, setCurrentKey] = useState(Array.from(sortItems.keys())[0])
    const onChangeSortOption = (key : string) => {
      setCurrentKey(key)
    }

    return (
        <section className="max-w-[1340px] w-full mx-auto my-8">
            <div className="flex flex-col items-start gap-6 md:flex-row md:justify-between w-full md:items-center ">
                <h1 className="font-bold text-xl md:text-2xl text-primary-black">Việc làm đã lưu</h1>
                <div className="flex items-center relative">
                    <span className="text-base mr-[10px] text-[#4e4c4d] whitespace-nowrap">Sắp xếp theo</span>
                    <div className="group relative h-14">
                        <div className="h-12 bg-white flex items-center md:justify-between gap-x-2 py-[6px] px-4 rounded-lg border border-dropdown-border group-hover:border-[#FF533A] min-w-[280px]">
                            <div className="flex items-center justify-between w-full">
                            <span className="text-primary-black text-left text-base whitespace-nowrap group-hover:text-primary-red">
                                {sortItems.get(currentKey)}
                            </span>
                            <div className="group-hover:rotate-180 transition-all hidden dark:flex items-center w-6 h-6 shrink-0">
                                <div className="flex item-center shrink-0">
                                <Image src={ArrowUp} alt="arrow"/>
                                </div>
                            </div>
                            </div>
                        </div>
                        <DropDown
                            itemList={sortItems}
                            currentItem={currentKey}
                            handleClickDropdownItem={onChangeSortOption}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

