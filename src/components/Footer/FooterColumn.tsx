
import Link from "next/link";

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
                    <li key={index} className="text-sm pb-3 text-[#A6A6A6] w-full cursor-pointer whitespace-nowrap">
                        <Link href="/" className="">{item}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FooterColumn;