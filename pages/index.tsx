import Head from 'next/head'
import Link from 'next/link'
import { Fragment } from 'react'
import Header from '../components/header';

export default function Home() {
    return (
        <Fragment>
            <Head>
                <title>Search with</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="padded-content">
                <div className="row">
                    <div className="portion whole">
                        <div className="border-thick margin-bottom-tiny"></div>
                        <Header text="Search with" />
                        {/* <h1 className="text-hue margin-bottom-fixed">
                            <strong>Search with</strong>
                        </h1> */}
                    </div>
                </div>
                <div className="row">
                    <div className="portion whole">
                        <div className="ff-form-inline-group retain-layouts">
                            <div className="ff-form-unit">
                                <input className="size-huge ff-input" id="searchQuery" placeholder="Search..." />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="portion whole">
                        <Link href="/search?query=test">
                            <button className="bg-blue text-white size-huge">Search</button>
                        </Link>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}