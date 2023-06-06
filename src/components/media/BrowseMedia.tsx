import React from 'react';
import {useLocation, Link} from 'react-router-dom';
import {useMediaStore} from '../../store/MediaStore.tsx';
import MediaCard from "./MediaCard.tsx";
import './styles/BrowseMedia.scss'
import {useBrowseMedia} from "../../hooks/MediaHooks.tsx";

const BrowseMedia = () => {
    const location = useLocation();
    const state = location.state;
    const {browseList, resetBrowseList} = useMediaStore();

    /* fetch data */
    /*useBrowseMedia(mediaType, category, currentPage)*/
    console.log(state.mediaType, state.browseType, state.selectedBrowseType, state.page)


    useBrowseMedia(state.mediaType, state.browseType, state.selectedBrowseType, state.page)


    const handleNextPage = () => {
        const container = document.querySelector('.main-container');
        container?.scrollTo(0, 0);
    }

    React.useEffect(() => {
        return () => {
            // reset browseList when component unmounts
            resetBrowseList();
            window.scrollTo(0, 0);
        }

    }, [location.pathname,]);

    return (
        <div className={'browse-container'}>
            {/* check if browseList is loaded, then check if category === 'category'*/}
            {Object.keys(browseList).length > 0 ? (
                <>
                    {state.browseType === 'category' ?
                        <h1>{state.selectedBrowseType} {state.mediaType === 'movie' ? 'Movies' : 'Shows'}</h1>
                        : state.browseType === 'genre' ?
                            <h1>{state.genreName}</h1>
                            : state.browseType === 'search' ?
                                <h1>{state.selectedBrowseType}</h1>
                                : ''
                    }
                    <div className={"browse__content"}>

                        {/* map browseList */}
                        {browseList.map((media, mediaIndex) => (
                            /* Map media.results */
                            media.results?.map((item, itemIndex) =>
                                (item.media_type !== 'person'
                                    && (item.backdrop_path !== null && item.poster__path !== null))
                                    ? (
                                        <div className={'browse__item'}
                                             key={itemIndex}>
                                            <MediaCard
                                                mediaType={state.mediaType}
                                                item={item}
                                                key={itemIndex}
                                                logo_size={'original'}
                                                backdrop_size={'original'}
                                                base_url={'https://image.tmdb.org/t/p/'}
                                                imgType={'backdrop'}
                                            />
                                        </div>
                                    ) : null
                            )
                        ))}

                    </div>
                </>
            ) : (<h1>Loading...</h1>)}

            {/* create navigation button, back and continue */}
            <div className={'browse__navigation'}>
                <Link
                    to={`/${state.mediaType}/${state.browseType}/${state.selectedBrowseType}?page=${parseInt(state.page) - 1}`}
                    state={{
                        mediaType: state.mediaType,
                        browseType: state.browseType,
                        selectedBrowseType: state.selectedBrowseType,
                        page: parseInt(state.page) - 1
                    }}
                    onClick={handleNextPage}
                >
                    <button
                        disabled={parseInt(state.page) <= 1}>Back
                    </button>
                </Link>
                {/* show div current page number / 500*/}
                {state.page} / {browseList[0]?.total_pages}

                <Link
                    to={`/${state.mediaType}/${state.browseType}/${state.selectedBrowseType}?page=${parseInt(state.page) + 1}`}
                    state={{
                        mediaType: state.mediaType,
                        browseType: state.browseType,
                        selectedBrowseType: state.selectedBrowseType,
                        page: parseInt(state.page) + 1
                    }}
                    onClick={handleNextPage}
                >
                    <button
                        disabled={parseInt(state.page) >= browseList[0].total_pages}>Continue
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default BrowseMedia;
