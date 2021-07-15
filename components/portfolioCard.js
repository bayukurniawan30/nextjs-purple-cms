import Link from "next/link"
import Image from "next/image"

export default function PortfolioCard({ ...pageProps }) {
    return (
        <div className="xl:w-1/4 md:w-1/2 p-4">
            <a href={pageProps.data["website-url"].value.url} target={pageProps.data["website-url"].value.target}>
                <div className="bg-gray-100 p-6 rounded-lg transition duration-500 ease-in-out hover:shadow-md">
                    <Image
                        className="h-40 rounded w-full object-cover object-center mb-6"
                        src={pageProps.data.image.value.full_path}
                        alt="Logo"
                        width={302}
                        height={171}
                    />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{pageProps.data.subtitle.value}</h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{pageProps.data.title.value}</h2>
                    <p className="leading-relaxed text-base">{pageProps.data.description.value}</p>
                </div>
            </a>
        </div>
    )
}