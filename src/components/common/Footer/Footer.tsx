import Image from "next/image";
import Logo from "public/images/header/logo.png";
import Banner from "public/images/footer/banner.svg"
import FooterColumn from "./FooterColumn";

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
        <footer className="flex justify-center relative w-full primary-gradient py-12 px-5 lg:px-[1.875rem]">
            <div className="absolute bottom-0 right-0 w-fit h-fit">
                <Image src={Banner} width={0} height={0} alt="logo" className="w-[763px] h-[407px]"/>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between w-full max-w-[1320px] mx-auto">
                <div className="flex flex-col flex-1 items-start mb-4 lg:mb-0 max-w-[330px] w-full mr-10">
                    <div className="flex flex-col">
                        <div className="flex shrink-0">
                            <Image src={Logo} width={0} height={0} alt="logo" className="w-[132.5px] h-[50px]"/>
                        </div>
                        <p className="text-base text-white whitespace-nowrap">Ít nhưng mà chất</p>
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

export default Footer;