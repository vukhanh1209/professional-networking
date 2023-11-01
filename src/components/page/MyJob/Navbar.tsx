"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathName = usePathname()
    return (
        <nav className="w-full bg-white drop-shadow-md h-[55px]">
            <div className="flex items-end gap-4 w-full max-w-[1340px] mx-auto h-full text-primary-black font-semibold ">
                <Link href="/my-jobs" className={`${pathName === "/my-jobs" && "tab--active"} py-2 px-4 w-fit opacity-80 tab`}>
                    Đã lưu
                </Link>
                <Link href="/my-jobs/recent-viewed" className={`${pathName === "/my-jobs/recent-viewed" && "tab--active"} py-2 px-4 w-fit opacity-80 tab`}>
                    Đã xem gần đây
                </Link>
                <Link href="/my-jobs/applied" className={`${pathName === "/my-jobs/applied" && "tab--active"} py-2 px-4 w-fit opacity-80 tab`}>
                    Đã ứng tuyển
                </Link>
            </div>
        </nav>
    )
}