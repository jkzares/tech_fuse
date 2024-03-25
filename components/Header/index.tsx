"use client"
import Link from "next/link";
import Logo from "./Logo";
import { cx } from "@/lib/utils";
import { siteMetadata } from "@/lib/utils";
import { DribbbleIcon, GithubIcon, LinkedinIcon, MoonIcon, SunIcon, TwitterIcon } from "../shared/Icons";
import { useState } from "react";

const Header = () => {

    const [mode, setMode] = useState("dark")

    return (

        <header className="w-full p-4 px-10 flex items-center justify-between">

            {/*-- Tech logo --*/}
            <Logo />

            {/*-- Movile nav --*/}
            <nav className=" w-max py-3 px-6 sm:px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center flex  sm:hidden
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50
        transition-all ease duration-300" >
                <Link href="/" className="mr-2">Home</Link>
                <Link href="/about" className="mx-2">About</Link>
                <Link href="/contact" className="mx-2">Contact</Link>

                <button
                    className={cx("w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1")}
                    aria-label="theme-switcher"
                >
                    {
                        mode === "light" ? <MoonIcon className={"fill-dark"} /> : <SunIcon className={"fill-dark"} />
                    }

                </button>
            </nav>

            {/*-- Desktop nav --*/}
            <nav className=" w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center hidden sm:flex
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50">
                <Link href="/" className="mr-2">Home</Link>
                <Link href="/about" className="mx-2">About</Link>
                <Link href="/contact" className="mx-2">Contact</Link>
                <button
                    className={cx("w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1")}
                    aria-label="theme-switcher"
                >
                    {
                        mode === "light" ? <MoonIcon className={"fill-dark"} /> : <SunIcon className={"fill-dark"} />
                    }

                </button>
            </nav>

            <div className=" hidden sm:flex items-center">
                <a href={siteMetadata.linkedin} rel="noopener noreferrer" className="inline-block w-6 h-6 mr-4" aria-label="Reach out to me via LinkedIn" target="_blank"><LinkedinIcon className="hover:scale-125 transition-all ease duration-200" /></a>
                <a href={siteMetadata.twitter} rel="noopener noreferrer" className="inline-block w-6 h-6 mr-4" aria-label="Reach out to me via Twitter" target="_blank"><TwitterIcon className="hover:scale-125 transition-all ease duration-200" /></a>
                <a href={siteMetadata.github} rel="noopener noreferrer" className="inline-block w-6 h-6 mr-4" aria-label="Check my profile on Github" target="_blank"><GithubIcon className="  hover:scale-125 transition-all ease duration-200 dark:fill-light" /></a>
                <a href={siteMetadata.dribbble} rel="noopener noreferrer" className="inline-block w-6 h-6 mr-4" aria-label="Check my profile on Dribbble" target="_blank"><DribbbleIcon className="hover:scale-125 transition-all ease duration-200" /></a>
            </div>

        </header>
    )
};

export default Header