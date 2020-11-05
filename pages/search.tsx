import { useRouter } from 'next/router'
import { Fragment } from 'react';
import Header from '../components/Header';
import data from '../data/searchEngine.json';

interface ISearchEngine {
    name: string,
    icon: string,
    url: string
}

export default function Search({ searchQuery }) {
    const router = useRouter();
    const { query } = router.query || searchQuery;
    return (
        <Fragment>
            <section className="padded-content">
                <div className="row">
                    <div className="portion whole">
                        <div className="border-thick margin-bottom-tiny"></div>
                        <Header text="Search result" />
                    </div>
                </div>
                <div className="row">
                    <div className="portion whole">
                        <p>Search: {query}</p>
                    </div>
                    <div className="row">
                        {data.map((se: ISearchEngine, i: number) => {
                            return (
                                <div className="portion">
                                    <a href={se.url + query} className="ff-button bg-blue text-white" key={i} target="_blank">
                                        <img src={"./assets/icons/" + se.icon} alt={se.name} style={{width: "15px", height: "15px"}}/>
                                        &nbsp;{se.name}
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
