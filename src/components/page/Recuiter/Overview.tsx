import Image from "next/legacy/image"
import Link from "next/link"
import Globe from "@/images/globe.svg"
import Facebook from "@/images/facebook.svg"


const overview = {
    content: 
    [
        "The NAB Innovation Centre Vietnam is owned by NAB - Australia’s largest business bank.",
        "The NAB Innovation Centre Vietnam is part of National Australia Bank (NAB) Technology & Enterprise Operations division. The mission of the NICV is to connect the talents of Vietnam to NAB and together improve the lives of those in the Vietnam technology community.",
        "As Australia’s largest business bank, NAB is focused on delivering great experiences for customers. To do this it uses modern technologies, alongside great technology talent including leading software engineers, cloud experts and quality engineers.",
        "We’re working on interesting projects to help NAB’s 8 million customers: By joining us, local software engineers will have access to a wide variety of projects and opportunities, working closely with colleagues in Australia and with global partners such as AWS and Microsoft to take advantage of the latest modern technologies.",
        "We’re investing in you: We strive to create not only a great place to work, but also the best technology centre for tech engineers to thrive.",
        "It’s more than just a career!",
        "We believe in people with ideas and dreams, and we want you to achieve your aspirations. If you have an appetite to learn, grow and elevate others around you, this is the place for you!"
    ]
    ,
    url: [
        {
            type: "website",
            url: "https://careers-vietnam.nab.com.au/jobs/search"
        },
        {
            type: "facebook",
            url: "https://www.facebook.com/NABVietnam"
        }
    ]
}


export default function Overview() {
    const chooseURLIcon = (type : string) => {
        switch(type) {
            case "website":
                return Globe;
            case "facebook":
                return Facebook;
            default:
                break;
        }
    }

    const chooseURLTitle = (type : string) => {
        switch(type) {
            case "website":
                return "Website công ty";
            case "facebook":
                return "Fanpage Facebook";
            default:
                break;
        }
    }

    return (
        <div className="divide-y divide-dashed divide-silver-grey bg-white w-full rounded-lg drop-shadow-lg text-rich-grey px-6 pt-6 pb-8">
            <h1 className="text-xl lg:text-2xl text-primary-black pb-4 font-bold">Giới thiệu công ty</h1>
            <div className="w-full py-4 leading-7 text-primary-black">
                {renderContent(overview.content)}
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 pt-4">
                {
                    overview.url.map((item: any, index: number) => (
                        <Link target="_blank" key={index} href={item.url} className="flex gap-2 items-center text-hyperlink text-base">
                            <Image src={chooseURLIcon(item.type)} width={20} height={20} alt={item.type}/>
                            <span className="">{chooseURLTitle(item.type)}</span>
                        </Link>
                    ))
                }
                    
            </div>
        </div>
    )
}

const renderContent = (contentList : any) => {
    return (
        <>
            {contentList.map((data : any, index: number) => (
                <p key={index}>
                    {data}
                </p>
            ))}
        </>
    )
}