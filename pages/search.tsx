import { useRouter } from 'next/router'
import { Fragment } from 'react';
import Header from '../components/Header';

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
                </div>
            </section>
        </Fragment>
    )
}
