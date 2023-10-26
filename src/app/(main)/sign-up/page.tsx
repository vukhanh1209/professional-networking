import Image from "next/image";
import Logo from "public/images/sign-in/logo.png"
import GoogleIcon from "public/images/sign-in/google.svg"
import Link from "next/link";
import Robot from "public/images/sign-up/robot.png"
import SignUpForm from "@/components/page/SignUp/SignUpForm";

export default function SignUp() {
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
                    <section className="flex flex-col max-w-[536px] ">
                        <h1 className="text-primary-black text-3xl font-bold">Đăng ký tài khoản</h1>
                        <div className="py-4">
                            <input type="checkbox" name="term" id="google-term" className="inline-block w-5 h-5 mr-2"/>
                            <label htmlFor="google-term" className="text-[#414042] text-base text-medium mb-6 inline">
                                Bằng việc đăng nhập, bạn đồng ý với các 
                                <a href="" target="_blank" className="text-[#0e2eed]"> Điều khoản dịch vụ </a>
                                và 
                                <a href="" target="_blank" className="text-[#0e2eed]"> Chính sách và quyền riêng tư </a>
                                của ITviec liên quan đến thông tin riêng tư của bạn.
                            </label>
                        </div>
                        <button className="flex items-center justify-center py-2 px-6 w-full rounded-lg border border-[#ed1b2f] bg-transparent hover:bg-[#fff5f5] transition-all duration-100">
                            <div className="flex shrink-0">
                                <Image src={GoogleIcon} width={0} height={0} alt="logo" className="w-[1.875rem] h-[1.875rem]" />
                            </div>
                            <p className="pl-2 text-base font-semibold text-[#ed1b2f]">Đăng ký bằng Google</p>
                        </button>
                        <div className="flex items-center py-4">
                            <div className="w-full h-[1px] bg-[#dedede]"></div>
                            <p className="text-[#121212] text-sm px-2">hoặc</p>
                            <div className="w-full h-[1px] bg-[#dedede]"></div>
                        </div>
                        <SignUpForm/>
                        <div className="text-center text-[#121212] mb-4 lg:mb-0">
                            Bạn đã có tài khoản?
                            <Link href="/sign-in" target="_blank" className="text-[#0e2eed]"> Đăng nhập ngay</Link>
                        </div>
                    </section>

                    <section className="max-w-[670px] hidden lg:flex justify-center items-center w-full">
                        <Image src={Robot} width={320} height={310} className="shrink-0" alt="robot"/>xx
                    </section>

                </div>
            </div>
        </div>
    )
}

