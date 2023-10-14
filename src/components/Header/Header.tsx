import Image from "next/image";
import Logo from "public/images/header/logo.png";

const Header = () => {
    return (
        <header className="fixed top-0 w-full flex items-center justify-between px-[1.875rem] h-[5.5rem] primary-gradient border-b border-neutral-800 z-50">
            <div className="flex shrink-0">
                <Image src={Logo} width={0} height={0} alt="logo" className="w-[6.75rem] h-10"/>
            </div>
            <div className="flex gap-6">
                <button className="bg-transparent text-white text-base font-medium">Nhà tuyển dụng</button>
                <button className="bg-transparent text-white text-base font-medium">Đăng nhập/Đăng ký</button>
            </div>
        </header>
    )
}

export default Header;