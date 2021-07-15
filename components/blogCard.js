import Link from "next/link"
import Image from "next/image"
import slugMaker from "@/lib/slugMaker"

export default function BlogCard({ ...pageProps }) {
    return (
        <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Link href={`/blogs/${pageProps.data.slug}`}>
                    <a>
                    <Image
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={pageProps.data.image.value.full_path}
                        alt="Logo"
                        width={500}
                        height={299}
                    />
                    </a>
                </Link>
                <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{pageProps.data.title.value}</h1>
                    <p className="leading-relaxed mb-3">{pageProps.data.excerpts.value}</p>
                    <div className="flex items-center flex-wrap ">
                        <Link href={`/blogs/${pageProps.data.slug}`}>
                        <a className="text-purple-500 inline-flex items-center md:mb-2 lg:mb-0">Read More
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}