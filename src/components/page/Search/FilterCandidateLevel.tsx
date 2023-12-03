import SVGAdd from "@/components/common/SVGAdd/SVGAdd";
import SVGCheck from "@/components/common/SVGCheck/SVGCheck";
import Check from "@/images/sign-in/check.svg"
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { selectCandidateLevelFilter, setCandidateLevelFilter } from "@/redux/reducers/searchSlice";
import Image from "next/image";

const candidateLevel = ["Entry Level", "Junior Level", "Mid Level", "Senior Level", "Manager"]

export default function FilterCandidateLevel() {

    const candidateLevelFilter = useAppSelector(selectCandidateLevelFilter)
    const dispatch = useAppDispatch()
    const isSelected = (type : string) => {
        return candidateLevelFilter.findIndex((item : string) => item === type) >= 0
    }

    const onClickFilter = (item : string) => {
        dispatch(setCandidateLevelFilter(item))
    }

    return (
        <div className="">
            <h5 className="font-bold text-primary-black mb-3">Cấp bậc</h5>
            <div className="flex flex-wrap gap-2 text-base text-rich-grey">
                {candidateLevel.map((level : any, index : number) => (
                     <button 
                     key={index} 
                     onClick={() => onClickFilter(level)}
                     className={`${isSelected(level) ? "border-primary-red text-primary-red bg-white-red" : "border-silver-grey hover:border-primary-black"} flex gap-2 items-center py-[6px] px-3 rounded-full border  transition-all duration-200`}>
                         {level}
                         {isSelected(level) ? 
                             <SVGCheck fill={"#ed1b2f"} width={20} height={20}/>
                             : 
                             <SVGAdd fill={"#A6A6A6"} width={20} height={20}/>
                         }
                     </button>
                ))}
            </div>
        </div>
    )
}