'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import './style.css';

export default function HomeIcon() {



    const pathname = usePathname();

    const isHomePage = pathname.endsWith("/");


    return (

        <>


            {!isHomePage && (
                <div className="">
                    <Link aria-label="Home" title="Home" href="/"
                        className="fixed pulse-button right-3 lg:right-10 bottom-14 z-50 text-white rounded-full p-4 text-2xl bg-blue-200 dark:bg-blue-100"

                    >

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute left-[23%] top-[20%]"
                            width="25"
                            height="25"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24">
                            <path d="M3 9L12 2l9 7v11a2 2 0 0 1-2 2h-5v-7H10v7H5a2 2 0 0 1-2-2z" />
                        </svg>
                    </Link>
                </div>
            )}


        </>


    );
}