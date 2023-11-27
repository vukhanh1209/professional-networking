import SignInForm from "@/components/page/ForRecruiter/SignInForm";
import Link from "next/link";


export default function ForRecruiterSignIn() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-[1340px]">
                <div className="flex flex-col w-full pt-[0.875rem] pb-[6.25rem] px-5">
                    <div className="flex items-center w-full my-6">
                        <h1 className="text-primary-black text-2xl font-bold">Chào mừng bạn đến với HeyDevs</h1>
                    
                    </div>
                    <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start">
                        <section className="flex flex-col max-w-[536px] mb-6 md:mb-0  mr-5 w-full">
                            <SignInForm/>
                            <Link href="/for-recruiter" className="text-[#0e2eed] text-center mb-2"> Quên mật khẩu?</Link>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

