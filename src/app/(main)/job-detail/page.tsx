import Image from "next/image";
import Logo from "public/images/sign-in/logo.png"
import Robot from "public/images/sign-up/robot.png"
import FPForm from "@/components/page/ForgotPassword/FPForm";

export default function ForgotPassword() {
    return (
        <div className="mx-auto max-w-[1340px]">
            <div className="flex flex-col w-full pt-[0.875rem] pb-[6.25rem]">
                <div className="flex items-center w-full my-6">
                    <h1 className="text-primary-black text-xl font-bold">Chào mừng bạn đến với</h1>
                    <div className="flex shrink-0 px-1 lg:px-2">
                        <Image src={Logo} width={0} height={0} alt="logo" className="w-20 h-[1.875rem]"/>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between ">
                    <section className="flex flex-col max-w-[536px] w-full">
                        <h1 className="text-primary-black text-3xl font-bold pb-4 lg:pb-6">Quên mật khẩu</h1>
                        <FPForm/>
                    </section>

                    <section className="max-w-[670px] hidden lg:flex justify-center items-center w-full">
                        <Image src={Robot} width={320} height={310} className="shrink-0" alt="robot"/>xx
                    </section>

                </div>
            </div>
        </div>
    )
}

