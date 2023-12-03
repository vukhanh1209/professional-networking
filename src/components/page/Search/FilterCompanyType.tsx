
import SVGAdd from "@/components/common/SVGAdd/SVGAdd";
import SVGCheck from "@/components/common/SVGCheck/SVGCheck";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { selectCompanyTypeFilter, setCompanyTypeFilter } from "@/redux/reducers/searchSlice";

const companyType = ["Product", "Outsourcing"]

export default function FilterCompanyType() {
    const companyTypeFilter = useAppSelector(selectCompanyTypeFilter)
    const dispatch = useAppDispatch()
    const isSelected = (type : string) => {
        return companyTypeFilter.findIndex((item : string) => item === type) >= 0
    }

    const onClickFilter = (item : string) => {
        dispatch(setCompanyTypeFilter(item))
    }

    return (
        <div className="">
            <h5 className="font-bold text-primary-black mb-3">Loại công ty</h5>
            <div className="flex flex-wrap gap-2 text-base text-rich-grey">
                {companyType.map((type : any, index : number) => (
                    <button 
                    key={index} 
                    onClick={() => onClickFilter(type)}
                    className={`${isSelected(type) ? "border-primary-red text-primary-red bg-white-red" : "border-silver-grey hover:border-primary-black"} flex gap-2 items-center py-[6px] px-3 rounded-full border  transition-all duration-200`}>
                        {type}
                        {isSelected(type) ? 
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