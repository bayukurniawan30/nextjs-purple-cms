import React from 'react'
import Image from "next/image"
import PortfolioCard from "@/components/portfolioCard"

export default class Portfolios extends React.Component {
    constructor({...pageProps}) {
        super()
        this.pageProps = pageProps
    }

    render() {
        return (
            <section className="text-gray-600 body-font mt-10 mb-10">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">{this.pageProps.data.title}</h1>
                            <div className="h-1 w-20 bg-purple-500 rounded"></div>
                        </div>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">{this.pageProps.data.description}</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {this.pageProps.list.portfolios.map((portfolio) => (
                            <PortfolioCard data={portfolio} key={portfolio.title.value.replace(/\s/g, '')}></PortfolioCard>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}