import Head from 'next/head'
import { useRouter } from 'next/router'
import { Fragment, useReducer } from 'react'
import Header from '../components/Header';
import Search from '../components/Search';

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
                query: payload,
                isTypedQuery: true
            }
        default:
            return state
    }
}

export default function Home() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const router = useRouter()

    if (Object.keys(router.query).includes('query') && !state.isTypedQuery) {
        const { query } = router.query
        state.query = query
        state.isTypedQuery = true
    }

    if (state.query.length <= 0) {
        state.isTypedQuery = false
    }

    return (
        <Fragment>
            <Head>
                <title>Search with</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="hero">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns">
                            <div className="column">
                                <Header text="Search with" />
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column">
                                <div className="field">
                                    <div className="control">
                                        <input
                                            className="input is-large"
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
                            <div className="columns">
                                <div className="column">
                                    <div className="buttons">
                                        <Search query={state.query} />
                                    </div>
                                </div>
                            </div> : null
                        }
                    </div>
                </div>
            </section>
        </Fragment>
    )
}