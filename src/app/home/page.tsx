import SearchForm from "@/components/Search";

export default function HomePage() {
    return (
        <div className="px-40 max-w-[1340px] mx-auto">
            <section className=" w-full">
                <div className="max-w-[1220px] w-full py-16 ">
                    <h1 className="text-white font-bold text-3xl pb-8">790 Việc làm IT cho Developer "Chất"</h1>
                    <div className="flex gap-3">
                        <SearchForm/>
                        
                    </div>

                </div>

            </section>
        </div>
    )
}