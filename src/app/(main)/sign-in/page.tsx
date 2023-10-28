import Image from "next/image";
import Logo from "@/images/sign-in/logo.png"
import GoogleIcon from "public/images/sign-in/google.svg"
import CheckIcon from "public/images/sign-in/check.svg"
import SignInForm from "@/components/page/SignIn/SignInForm";
import Link from "next/link";
const specialFeatures = [
    "Xem trước mức lương để có thể lợi thế khi thoả thuận lương",
    "Tìm hiểu về phúc lợi, con người, văn hóa công ty qua các đánh giá chân thật",
    "Dễ dàng ứng tuyển chỉ với một thao tác",
    "Quản lý hồ sơ và quyền riêng tư của bạn"
]

export default function SignIn() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-[1340px]">
                <div className="flex flex-col w-full pt-[0.875rem] pb-[6.25rem] px-5">
                    <div className="flex items-center w-full my-6">
                        <h1 className="text-primary-black text-xl font-bold">Chào mừng bạn đến với</h1>
                        <div className="flex shrink-0 px-1 lg:px-2">
                            <Image src={Logo} width={0} height={0} alt="logo" className="w-20 h-[1.875rem]"/>
                        </div>
                    </div>
                    <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start">
                        <section className="flex flex-col max-w-[536px] mb-6 md:mb-0  mr-5">
                            <div className="text-[#414042] text-sm text-medium mb-6">
                                Bằng việc đăng nhập, bạn đồng ý với các 
                                <a href="" target="_blank" className="text-[#0e2eed]"> Điều khoản dịch vụ </a>
                                và 
                                <a href="" target="_blank" className="text-[#0e2eed]"> Chính sách và quyền riêng tư </a>
                                của ITviec liên quan đến thông tin riêng tư của bạn.
                            </div>
                            <button className="flex items-center justify-center py-2 px-6 w-full rounded-lg border border-[#ed1b2f] bg-transparent hover:bg-[#fff5f5] transition-all duration-100">
                                <div className="flex shrink-0">
                                    <Image src={GoogleIcon} width={0} height={0} alt="logo" className="w-[1.875rem] h-[1.875rem]" />
                                </div>
                                <p className="pl-2 text-base font-semibold text-[#ed1b2f]">Đăng nhập bằng Google</p>
                            </button>
                            <div className="flex items-center py-4">
                                <div className="w-full h-[1px] bg-[#dedede]"></div>
                                <p className="text-[#121212] text-sm px-2">hoặc</p>
                                <div className="w-full h-[1px] bg-[#dedede]"></div>

                            </div>

                            
                            <SignInForm/>
                            <Link href="/account" className="text-[#0e2eed] text-center mb-2"> Quên mật khẩu?</Link>

                            <div className="text-center text-[#121212] mb-4 lg:mb-0">
                                Bạn chưa có tài khoản?
                                <Link href="/sign-up" className="text-[#0e2eed]"> Đăng ký ngay</Link>
                            </div>
                        </section>

                        <section className="flex flex-col max-w-[670px]">
                            <h1 className="text-[#121212] font-bold text-xl lg:text-2xl my-4 lg:mb-4">Đăng nhập để truy cập ngay vào hàng ngàn đánh giá và dữ liệu lương thị trường IT</h1>
                            <div className="flex flex-col gap-4">
                                {specialFeatures.map((feature, index) : any => (
                                    <div key={index} className="flex items-start text-[#121212] text-base">
                                        <Image src={CheckIcon} width={0} height={0} className="w-4 h-4 shrink-0 mt-[6px]" alt=""/>
                                        <p className="ml-2">{feature}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    )
}

