import Image from "next/image";
import Link from "next/link";
import Logo from "public/images/header/logo.png";
import Banner from "public/images/footer/banner.svg"
const aboutUs = {
    title: "Về chúng tôi",
    itemList: [
        "Trang Chủ",
        "Về ITviec.com",
        "Dịch vụ gợi ý ứng viên",
        "Liên Hệ",
        "Việc Làm IT",
        "Câu hỏi thường gặp"
    ]
}

const campaign = {
    title: "Chương trình",
    itemList: [
        "Trang Chủ",
        "Về ITviec.com",
        "Dịch vụ gợi ý ứng viên",
        "Liên Hệ",
        "Việc Làm IT",
        "Câu hỏi thường gặp"
    ]
}

const termAndPolicy = {
    title: "Điều khoản chung",
    itemList: [
        "Quy định bảo mật",
        "Quy chế hoạt động",
        "Giải quyết khiếu nại",
        "Thoả thuận sử dụng",
        "Thông cáo báo chí"
    ]
}

const contact = {
    title: "Liên hệ để đăng tin tuyển dụng tại:",
    itemList: [
        "Hồ Chí Minh: (+84) 977 460 519",
        "Hà Nội: (+84) 983 131 351",
        "Email: love@itviec.com",
        "Gửi thông tin liên hệ",
    ]
}


const Footer = () => {
    return (
        <footer className="relative w-full primary-gradient py-12">
            <div className="absolute bottom-0 right-0 w-fit h-fit">
                <Image src={Banner} width={0} height={0} alt="logo" className="w-[763px] h-[407px]"/>
            </div>
            <div className="flex flex-col lg:flex-row w-full max-w-[1320px] mx-auto">
                <div className="flex flex-col flex-1">
                    <div>
                        <div className="flex shrink-0">
                            <Image src={Logo} width={0} height={0} alt="logo" className="w-[132.5px] h-[50px]"/>
                        </div>
                        <p className="text-base text-white">Ít nhưng mà chất</p>
                    </div>
                </div>

                <FooterColumn data={aboutUs} className={"w-full max-w-[220px]"}/>
                <FooterColumn data={campaign} className={"w-full max-w-[220px]"}/>
                <FooterColumn data={termAndPolicy} className={"w-full max-w-[220px]"}/>
                <FooterColumn data={contact} className={"w-fit"}/>
            </div>  
        </footer>
    )
}

interface FooterColumnProps {
    data: any;
    className: string;
}

const FooterColumn = ({data, className} : FooterColumnProps) => {
    return (
        <div className={`flex flex-col ${className}`}>
            <h5 className="py-4 pr-4 text-white font-semibold text-base w-full">{data.title}</h5>
            <ul className="w-full z-10">
                {data.itemList.map((item : any, index : number) => (
                    <li key={index} className="text-sm pb-3 text-[#A6A6A6] w-full cursor-pointer">
                        <Link href="/" className="">{item}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Footer;