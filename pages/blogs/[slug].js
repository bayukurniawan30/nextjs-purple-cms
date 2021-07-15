import React from 'react';
import Head from 'next/head'
import Image from "next/image"
import Navbar from "@/components/navbar";
import Footer from "@/components/footer"
import { getSingletonData, getCollectionData, getCollectionDataDetails } from "@/lib/api";
import markdownToHtml from '@/lib/markdownToHtml'

export async function getStaticPaths() {
	const blogs = (await getCollectionData('blogs'))

    const paths = blogs.data.map((blog) => ({
      params: { slug: blog.slug },
    }))
  
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
	const websiteInformation = (await getSingletonData('website-information'))
	const blog = (await getCollectionDataDetails(`blogs/${params.slug}`))
	const data = {
		siteName: websiteInformation.data["sitename"].value,
		description: websiteInformation.data["description"].value,
		logo: websiteInformation.data["logo"].value.full_path
	}
	const blogData = {
		blog: blog.data,
        blogContent: await markdownToHtml(blog.data.content.value)
	}

	return {
		props: { data, blogData },
	}
}

export default class BlogDetails extends React.Component {
    constructor({...pageProps}) {
        super()
        this.pageProps   = pageProps
        this.siteName    = this.pageProps.data.siteName
        this.description = this.pageProps.data.description

        this.blogData = this.pageProps.blogData
    }

    render() {
        return (
			<div>
				<Head>
					<title>{this.blogData.blog.title.value} - {this.siteName} - {this.description}</title>
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
							<h3 className="text-4xl font-semibold">{this.blogData.blog.title.value}</h3>
						</div>
					</div>
				</div>

				<section className="text-gray-600 body-font">
                    <div className="container max-w-7xl py-12 px-4 sm:px-6 lg:px-8 mx-auto flex flex-col">
                        <div className="w-full">
                            <div className="rounded-lg h-auto overflow-hidden">
                                <Image
                                    className="object-cover object-center h-full w-full"
                                    src={this.blogData.blog.image.value.full_path}
                                    alt="Logo"
                                    width={1200}
                                    height={600}
                                />
                            </div>
                            <div className="flex flex-col sm:flex-row mt-6">
                                <div className="sm:w-full sm:pl-8 sm:py-8 border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0">
                                    <div className="leading-relaxed text-lg mb-4 blog-content" dangerouslySetInnerHTML={{ __html: this.blogData.blogContent }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

				<Footer></Footer>
			</div>
		);
	}
}