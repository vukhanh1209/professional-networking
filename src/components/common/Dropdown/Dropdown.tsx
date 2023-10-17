
const Dropdown = ({itemList, currentItem, handleClickDropdownItem} : any) => {
    
    return (
        <>
            <div className="h-2 w-full absolute top-[100%] left-0 bg-transparent z-50 "></div>
            <div className={`group-hover:flex w-full md:right-0 hidden absolute border border-dropdown-border mt-2 left-0 top-[100%] flex-col bg-white rounded-lg p-[0.625rem] z-50`}>
                {Array.from(itemList.values()).map((item : any, index : number) => (
                        <div 
                            key={index}
                            onClick={() => {
                                handleClickDropdownItem(Array.from(itemList.keys())[index])
                            }}
                            className={`${itemList.get(currentItem) == item && 'bg-white-red'} hover:bg-white-red text-left px-3 py-[0.625rem] rounded-lg text-primary-black text-base whitespace-nowrap`}
                            >
                            <div className="min-w-[106px]">{item}</div>
                        </div>
                    ))}
            </div>
        </>
    )
}

export default Dropdown;