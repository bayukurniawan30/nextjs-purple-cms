import React from 'react';
import Head from 'next/head'
import Image from "next/image"
import Navbar from "@/components/navbar";
import BlogCard from "@/components/blogCard";
import Footer from "@/components/footer"
import { getSingletonData, getCollectionData } from "@/lib/api";
import markdownToHtml from '@/lib/markdownToHtml'

export async function getStaticProps() {
	const websiteInformation = (await getSingletonData('website-information'))
	const blogs = (await getCollectionData('blogs'))
	const data = {
		siteName: websiteInformation.data["sitename"].value,
		description: websiteInformation.data["description"].value,
		logo: websiteInformation.data["logo"].value.full_path
	}
	const blogsData = {
		blogs: blogs.data
	}

	return {
		props: { data, blogsData },
	}
}

export default class Blogs extends React.Component {
    constructor({...pageProps}) {
        super()
        this.pageProps   = pageProps
        this.siteName    = this.pageProps.data.siteName
        this.description = this.pageProps.data.description

        this.blogsData = this.pageProps.blogsData
    }

    render() {
        return (
			<div>
				<Head>
					<title>BLOGS - {this.siteName} - {this.description}</title>
					<meta property="og:title" content={`${this.siteName} - ${this.description}`} />
				</Head>

				<div className="relative bg-white">
					<div className="max-w-7xl mx-auto">
						<Navbar menuPosition="right" active="blogs" logo={this.pageProps.data.logo}></Navbar>	
					</div>
				</div>

				<div className="mt-10 mb-10 py-6 bg-white">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="lg:text-center">
							<h3 className="text-4xl font-semibold">BLOGS</h3>
						</div>
					</div>
				</div>

				<section className="text-gray-600 body-font">
					<div className="container px-5 py-24 mx-auto">
						<div className="flex flex-wrap -m-4">
							{this.blogsData.blogs.map((blog) => (
								<BlogCard data={blog} key={blog.slug}></BlogCard>
							))}
						</div>
					</div>
				</section>

				<Footer></Footer>
			</div>
		);
	}
}