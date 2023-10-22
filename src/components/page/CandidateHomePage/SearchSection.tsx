import SearchForm from '../../common/SearchBar/SearchForm'

const suggestionKeys = ["Java", "ReactJS", ".NET", "Tester", "PHP", "Business Analyst", "NodeJS", "Mangager"]

const SearchSection = () => {
    return (
        <section className="flex justify-center w-full primary-gradient px-5">
            <div className="max-w-[1220px] py-16 w-full">
                <h1 className="text-white font-bold text-2xl md:text-3xl pb-8">790 Việc làm IT cho Developer "Chất"</h1>
                <SearchForm/>
                <div className="mt-7 flex flex-col md:flex-row items-start md:items-center gap-4">
                    <p className="text-base text-silver-grey ">Gợi ý cho bạn:</p>
                    <div className="flex flex-wrap items-center gap-3"> 
                    {suggestionKeys.map((key : string, index : number) => (
                        <button 
                        key={index} 
                        className="py-[6px] px-3 border border-rich-grey rounded-full bg-primary-black text-silver-grey"
                        >
                            {key}
                        </button>
                    ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SearchSection;