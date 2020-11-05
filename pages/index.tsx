import Head from 'next/head'
import { useRouter } from 'next/router'
import { Fragment, useReducer } from 'react'
import Header from '../components/Header';
import Search from './search';

interface IState {
    isTypedQuery: boolean,
    query: string
}

const initialState = {
    isTypedQuery: false,
    query: ""
}

const reducer = (state: IState, { type, payload }) => {
    switch (type) {
        case 'TYPED_QUERY':
            return {
                ...state,
                query: payload,
                isTypedQuery: true
            }
        default:
            return state
    }
}

export default function Home() {
    const router = useRouter()
    const [state, dispatch] = useReducer(reducer, initialState)
    if (Object.keys(router.query).length > 0) {
        const { query } = router.query
        state.query = query
        state.isTypedQuery = true
    }

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
                    </div>
                </div>
                <div className="row">
                    <div className="portion whole">
                        <div className="ff-form-inline-group retain-layouts">
                            <div className="ff-form-unit">
                                <input
                                    className="size-huge ff-input"
                                    id="searchQuery"
                                    placeholder="Search..."
                                    onChange={(e) => {
                                        dispatch({
                                            type: 'TYPED_QUERY',
                                            payload: e.currentTarget.value
                                        })
                                    }}
                                    defaultValue={state.query}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {state.isTypedQuery ?
                    <div className="row">
                        <div className="portion whole">
                            <Search query={state.query} />
                        </div>
                    </div> : null
                }
                {/* <div className="row">
                    <div className="portion whole">
                        <Link href={`/search?query=${query}`}>
                            <button className="bg-blue text-white size-large">Search</button>
                        </Link>
                    </div>
                </div> */}
            </section>
        </Fragment>
    )
}