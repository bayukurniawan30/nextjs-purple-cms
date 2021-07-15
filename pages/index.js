import React from 'react';
import Head from 'next/head'
import Image from "next/image";
import MainSection from "@/components/mainSection";
import Portfolios from "@/components/portfolios";
import Footer from "@/components/footer"
import { getSingletonData, getCollectionData } from "@/lib/api";

export async function getStaticProps() {
	const websiteInformation = (await getSingletonData('website-information'))
	const mainSection        = (await getSingletonData('main-section'))
	const portfolioSection   = (await getSingletonData('portfolio-section'))
	const portfolios   		 = (await getCollectionData('portfolios'))
	const data = {
		siteName: websiteInformation.data["sitename"].value,
		description: websiteInformation.data["description"].value,
		logo: websiteInformation.data["logo"].value.full_path
	}
	const mainSectionData = {
		logo: websiteInformation.data["logo"].value.full_path,
		titleOne: mainSection.data["title-1"].value,
		titleTwo: mainSection.data["title-2"].value,
		description: mainSection.data["description"].value,
		background: mainSection.data["background"].value.full_path
	}
	const portfolioSectionData = {
		title: portfolioSection.data["section-title"].value,
		description: portfolioSection.data["description"].value
	}
	const portfoliosData = {
		portfolios: portfolios.data
	}

	return {
		props: { data, mainSectionData, portfolioSectionData, portfoliosData },
	}
}

export default class IndexPage extends React.Component {
    constructor({...pageProps}) {
        super()
        this.pageProps   = pageProps
        this.siteName    = this.pageProps.data.siteName
        this.description = this.pageProps.data.description

        this.mainSectionData      = this.pageProps.mainSectionData
        this.portfolioSectionData = this.pageProps.portfolioSectionData

        this.portfoliosData    = this.pageProps.portfoliosData
    }

    render() {
        return (
			<div>
				<Head>
					<title>Home - {this.siteName} - {this.description}</title>
					<meta
						name="Description"
						content={this.description}
					/>
					<meta property="og:title" content={`${this.siteName} - ${this.description}`} />
				</Head>

				<MainSection data={this.mainSectionData}></MainSection>

				<Portfolios data={this.portfolioSectionData} list={this.portfoliosData}></Portfolios>
				
				<Footer></Footer>
			</div>
		);
	}
}
