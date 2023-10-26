import ApplicationForm from "@/components/page/Appication/ApplicationForm";
import Image from "next/legacy/image";
import Link from "next/link";
import Logo from "public/images/application/logo.png";
import ArrowLeft from "public/images/arrow-left.svg"

export default function Application() {
    return (
        <div className="mx-auto max-w-[884px] ">
                <section className="relative flex items-center justify-center w-full h-20">
                    <button className="flex items-center gap-1 absolute left-0 text-base text-white bg-transparent px-2 py-3">
                        <Image src={ArrowLeft} alt="arrow" width={16} height={16}/>
                        <span className="hidden md:inline">Quay lại</span>
                    </button>
                    <Image src={Logo} width={81} height={32} alt="logo" className="h-[1.875rem] w-[79.4px]"/>
                </section>
                <section className="bg-white drop-shadow-md w-full h-fit p-8 rounded-xl ">
                    <h2 className="text-2xl mb-6 text-primary-black font-bold">[Remote] - Shopify App Dev (ReactJS, Laravel,Hidrogen) at Yet Company</h2>
                    <ApplicationForm/>
                </section>
        </div>
    )
}

