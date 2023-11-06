"use client"
import { useAppSelector } from "@/redux/hook";
import { selectEmployeeInfo } from "@/redux/reducers/employeeSlice";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/images/header/logo.png";
import Avatar from "public/images/header/avatar.png";

const Header = () => {
    const employeeInfo = useAppSelector(selectEmployeeInfo)
    console.log("Log ~ file: Header.tsx:11 ~ Header ~ employeeInfo:", employeeInfo)
    return (
        <header className="fixed top-0 w-full flex items-center justify-between px-5 lg:px-[1.875rem] h-[5.5rem] primary-gradient border-b border-neutral-800 z-50">
            <div className="flex shrink-0">
                <Link href="/">
                    <Image src={Logo} width={0} height={0} alt="logo" className="h-[1.875rem] w-[79.4px] lg:w-[6.75rem] lg:h-10"/>
                </Link>
            </div>
            <div className="flex gap-6">
                <button className="bg-transparent text-white text-sm text-center lg:text-base font-medium">Nhà tuyển dụng</button>
                {employeeInfo?.username ? 
                (
                    <div className="flex items-center gap-3">
                        <Image src={Avatar} width={32} height={32} alt="avatar" className="rounded-full border border-white"/>
                        <span className="first-letter:uppercase font-medium text-base text-white">{employeeInfo?.username}</span>
                    </div >
                )
                : (
                    <div className="bg-transparent text-white text-sm text-center lg:text-base font-medium">
                        <Link href="/sign-in">Đăng nhập</Link>
                        <Link href="/sign-up" className="hidden md:inline">/Đăng ký</Link>
                    </div >
                )}
                
            </div>
        </header>
    )
}

export default Header;