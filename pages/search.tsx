import { useRouter } from 'next/router'
import { Fragment } from 'react';
import Header from '../components/Header';
import data from '../data/searchEngine.json';

interface ISearchEngine {
    name: string,
    icon: string,
    url: string
}

export default function Search({ query }) {
    return (
        <Fragment>
            {data.map((se: ISearchEngine, i: number) => {
                return (
                    <div className="portion" key={i}>
                        <a href={se.url + query} className="ff-button bg-blue text-white" key={`a_href_${i}`} target="_blank">
                            <img
                                src={"./assets/icons/" + se.icon}
                                alt={se.name}
                                key={`img_${i}`}
                                style={{ width: "15px", height: "15px" }}
                            />
                            &nbsp;{se.name}
                        </a>
                    </div>
                )
            })}
        </Fragment>
    )
}
