import Link from "next/link";
import { LuFilm } from "react-icons/lu";

export default function Header() {
    return (
        <header className="sticky top-0 z-40 w-full
    bg-[#1d2839]/95 backdrop-blur-sm border-b border-[#e5e7eb]">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <LuFilm className="text-[30px] text-[#6d28d9]" />
                    <Link href={"/"} className="text-xl font-bold text-[#f8fafc">
                        FLY<span className="text-[#6d26d9]">FLIX</span>

                    </Link>

                </div>
                <nav className="flex items-center gap-6">
                    <Link href={"/"} className="text-[#f9fafc] transition-colors">
                        HOME

                    </Link>

                </nav>

            </div>
        </header>
    )
}