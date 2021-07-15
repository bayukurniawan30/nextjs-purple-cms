import React from 'react';
import Head from 'next/head'
import Image from "next/image"
import Navbar from "@/components/navbar";
import Footer from "@/components/footer"
import { getSingletonData, getCollectionData } from "@/lib/api";
import markdownToHtml from '@/lib/markdownToHtml'

export async function getStaticProps() {
	const websiteInformation = (await getSingletonData('website-information'))
	const about = (await getSingletonData('about'))
	const data = {
		siteName: websiteInformation.data["sitename"].value,
		description: websiteInformation.data["description"].value,
		logo: websiteInformation.data["logo"].value.full_path
	}
	const aboutData = {
		title: about.data["title"].value,
		content: await markdownToHtml(about.data["content"].value),
		photo: about.data["photo"].value.full_path,
		youtube: about.data["youtube"].value.url,
		github: about.data["github"].value.url
	} 

	return {
		props: { data, aboutData },
	}
}

export default class About extends React.Component {
    constructor({...pageProps}) {
        super()
        this.pageProps   = pageProps
        this.siteName    = this.pageProps.data.siteName
        this.description = this.pageProps.data.description

        this.aboutData = this.pageProps.aboutData
    }

    render() {
        return (
			<div>
				<Head>
					<title>About - {this.siteName} - {this.description}</title>
					<meta property="og:title" content={`${this.siteName} - ${this.description}`} />
				</Head>

				<div className="relative bg-white">
					<div className="max-w-7xl mx-auto">
						<Navbar menuPosition="right" active="about" logo={this.pageProps.data.logo}></Navbar>	
					</div>
				</div>

				<div className="mt-10 mb-10 py-6 bg-white">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="lg:text-center">
							<h3 className="text-4xl font-semibold">ABOUT</h3>
						</div>
					</div>
				</div>

				<section className="text-gray-600 body-font">
					<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
						<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 flex justify-center">
							<Image
								className="object-center rounded"
								src={this.aboutData.photo}
								alt="Bayu Kurniawan"
								width={271}
								height={400}
							/>
						</div>
						<div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
							<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{this.aboutData.title}
							</h1>
							<div className="mb-8 leading-relaxed" dangerouslySetInnerHTML={{ __html: this.aboutData.content }} ></div>
							<div className="flex justify-center">
								<a className="inline-flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-lg" href={this.aboutData.youtube} target="_blank">Youtube</a>
								<a className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg" href={this.aboutData.github} target="_blank">Github</a>
							</div>
						</div>
					</div>
				</section>

				<Footer></Footer>
			</div>
		);
	}
}