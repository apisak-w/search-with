import { Fragment } from 'react';
import SearchEngine from './SearchEngine'
import data from '../data/searchEngine.json'

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
                    <SearchEngine url={se.url + query} icon={"./assets/icons/" + se.icon} name={se.name} />
                )
            })}
        </Fragment>
    )
}
