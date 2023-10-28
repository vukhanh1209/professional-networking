import RecuiterHeader from "@/components/page/Recuiter/RecruiterHeader";
import RecruiterBody from "@/components/page/Recuiter/RecuiterBody";


export default function RecruiterPage() {
    return (
        <>
            <section className="w-full px-5 lg:px-[1.875rem] primary-gradient">
                <div className="max-w-[1340px] mx-auto">
                    <RecuiterHeader/> 
                </div>
            </section>
            <section className="flex flex-col items-center w-full lg:px-[1.875rem] lg:py-8 text-primary-black">
                <div className="max-w-[1340px] w-full">
                    <RecruiterBody/>
                </div>
            </section>
        </>
    )
}