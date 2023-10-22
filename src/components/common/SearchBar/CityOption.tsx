"use client"
import Image from "next/legacy/image";
import DropDown from "../Dropdown";
import ArrowUp from 'public/images/arrow-up.svg'
import { useState } from "react";
import LocationPin from 'public/images/location-pin.svg'


const cityItems = new Map([
    ["ALL", "Tất cả thành phố"],
    ["HCM", "Hồ Chí Minh"],
    ["HN", "Hà Nội"],
    ["DN", "Đà Nẵng"],
    ["OTHERS", "Các thành phố khác"],

  ]);

const CityOption = () => {
    const [currentKey, setCurrentKey] = useState(Array.from(cityItems.keys())[0])
    const onChangeCityOption = (key : string) => {
      setCurrentKey(key)
    }
    return (
        <div className="group relative h-14">
              <div className="h-full bg-white flex items-center md:justify-between gap-x-2 py-[6px] px-4 rounded-lg border border-dropdown-border group-hover:border-[#FF533A] min-w-[280px]">
                <div className="flex item-center shrink-0">
                  <Image src={LocationPin} width={18} height={18} className=""/>
                </div>
                <div className="flex items-center justify-between w-full">
                  <span className="text-primary-black text-left text-lg whitespace-nowrap group-hover:text-primary-red">
                    {cityItems.get(currentKey)}
                  </span>
                  <div className="group-hover:rotate-180 transition-all hidden dark:flex items-center w-6 h-6 shrink-0">
                    <div className="flex item-center shrink-0">
                      <Image src={ArrowUp} />
                    </div>
                  </div>
                </div>
              </div>
              <DropDown
                itemList={cityItems}
                currentItem={currentKey}
                handleClickDropdownItem={onChangeCityOption}
              />
            </div>
    )
}

export default CityOption;