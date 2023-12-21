"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Tab = {
  title: string;
  href: string;
};

type NavbarProps = {
  tabs: Tab[];
};

export default function Navbar({ tabs }: NavbarProps) {
  const pathName = usePathname();
  return (
    <nav className="w-full bg-white drop-shadow-md h-[55px]">
      <div className="flex justify-center md:justify-start items-end md:gap-4 w-full max-w-[1340px] mx-auto h-full text-primary-black font-semibold text-sm ">
        {tabs.map((tab: Tab, index: number) => (
          <Link
            key={index}
            href={tab.href}
            className={`${
              pathName === tab.href && "tab--active"
            } py-2 px-4 w-fit opacity-80 tab`}
          >
            {tab.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
