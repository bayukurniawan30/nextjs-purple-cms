import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

export default function Navbar({ ...pageProps }) {
    const navMenu = [
        { title: "Home", route: "/", slug: 'home' },
        { title: "About", route: "/about", slug: 'about' },
        { title: "Blogs", route: "/blogs", slug: 'blogs' },
    ];

    const [active, setActive] = useState(false);

	const handleClick = () => {
		setActive(!active);
    };
    
    return (
        <div>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                {/* lg:justify-start for left menu */}
                {/* lg:justify-between for right menu */}
                <nav className={`relative flex items-center justify-between sm:h-10 ${pageProps.menuPosition == 'right' ? 'lg:justify-between' : 'lg:justify-start'}`} aria-label="Global">
                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                        <div className="flex items-center justify-between w-full md:w-auto">
                            <Link href="/">
                                <a>
                                    <span className="sr-only">Workflow</span>
                                    <Image
                                        className="h-8 w-auto sm:h-10"
                                        src={pageProps.logo}
                                        alt="Logo"
                                        width={234}
                                        height={50}
                                    />
                                </a>
                            </Link>
                            <div className="-mr-2 flex items-center md:hidden">
                                <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" id="main-menu" aria-haspopup="true" onClick={handleClick}>
                                    <span className="sr-only">Open main menu</span>
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                        {navMenu.map(({ route, title, slug }) => (
                            <Link href={route} key={title}>
                                <a className={`font-medium ${pageProps.active == slug ? 'text-purple-500' : 'text-gray-500'} hover:text-gray-900`}>{title.toUpperCase()}</a>
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>
            
            <div className={`absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden ${
                active ? 'duration-100 ease-in opacity-100 scale-100' : 'duration-150 ease-out opacity-0 scale-95'
                }`}>
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="px-5 pt-4 flex items-center justify-between">
                        <div>
                            <Image
                                className="h-8 w-auto"
                                src={pageProps.logo}
                                alt="Logo"
                                width={234}
                                height={50}
                            />
                        </div>
                        <div className="-mr-2">
                        <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" onClick={handleClick}>
                            <span className="sr-only">Close main menu</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        </div>
                    </div>
                    <div role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
                        <div className="px-2 pt-2 pb-3 space-y-1" role="none">
                            {navMenu.map(({ route, title, slug }) => (
                                <Link href={route} key={title}>
                                    <a className={`block px-3 py-2 rounded-md text-base font-medium ${pageProps.active == slug ? 'text-purple-500' : 'text-gray-500'} hover:text-gray-900 hover:bg-gray-50`}>{title.toUpperCase()}</a>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}