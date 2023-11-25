"use client"
import Image from "next/image";
import Link from "next/link";
import Logo from "@/images/header/logo-2.svg";

import { useEffect, useState } from "react";
import { LocalStorage } from "@/utils/LocalStorage";
import { usePathname } from "next/navigation";
import EmployeeNavigation from "./EmployeeNavigation";



const Header = () => {
    const [profile, setProfile] = useState<any>()
    const pathName = usePathname()

    useEffect(() => {
        const profileInStorage = LocalStorage.getProfile()
        setProfile(profileInStorage)
    }, [pathName])


    return (
        <header className="fixed top-0 w-full flex items-center justify-between px-5 lg:px-[1.875rem] h-[5.5rem] primary-gradient border-b border-neutral-800 z-50">
            <div className="flex shrink-0">
                <Link href="/">
                    <Image src={Logo} width={0} height={0} alt="logo" className=" w-[120px] lg:w-[152px] "/>
                </Link>
            </div>
            <div className="flex gap-6">
                <button className="bg-transparent text-white text-sm text-center lg:text-base font-medium hidden lg:inline">Nhà tuyển dụng</button>
                {profile?.username ? 
                (
                    <EmployeeNavigation profile={profile} setProfile={setProfile}/>
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