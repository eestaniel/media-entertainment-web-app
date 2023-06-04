import React from 'react';
import {useParams, useNavigate, useLocation} from 'react-router-dom';
import {useMediaStore} from '../../store/MediaStore.tsx';
import {useBrowseMedia} from "../../hooks/MediaHooks.tsx";
import MediaCard from "./MediaCard.tsx";
import './styles/BrowseMedia.scss'

const BrowseMedia = () => {
    const {category} = useParams();
    /*get mediaType, category, and page number from url*/
    const location = useLocation();
    const mediaType = location.pathname.split('/')[1];
    const browseType = location.pathname.split('/')[2];
    const searchParams = new URLSearchParams(location.search);
    const currentPage = searchParams.get('page') || 1;
    console.log(mediaType, category, currentPage);
    const {browseList} = useMediaStore();

    /* fetch data */
    useBrowseMedia(mediaType, category, currentPage)
    console.log(mediaType, category, currentPage);

    const [mediaState, setMediaState] = React.useState({
        mediaList: [],
        totalPages: 0,
        totalResults: 0,
        isLoading: true,
        isError: false,
    });
    const navigate = useNavigate();

    const handleTest = () => {
        console.log(browseList)
        console.log(browseType)
    }

    React.useEffect(() => {
        // Scroll to top of the page on component mount or route change
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className={'browse-container'}>
            {/* check if browseList is loaded, then check if category === 'category'*/}
            {Object.keys(browseList).length > 0 && browseType === 'category' ? (
                <>
                    <h1>{category} {mediaType === 'movie' ? 'Movies' : 'Shows'}</h1>
                    <div className={"browse__content"}>

                        {/* map browseList */}
                        {browseList.map((media, index) => (
                            /*map media.results*/
                            media.results?.map((item, index) => (
                                <div key={index}>
                                    <MediaCard mediaType={mediaType}
                                               item={item}
                                               key={index}
                                               logo_size={'w300'}
                                               backdrop_size={'w500'}
                                               base_url={'https://image.tmdb.org/t/p/'}
                                    />
                                </div>
                            ))
                        ))}
                    </div>
                </>
            ) : (<h1>Loading...</h1>)}

            {/* create navigation button, back and continue */}
            <div className={'browse__navigation'}>
                <button onClick={() => navigate(`/${mediaType}/category/${category}?page=${parseInt(currentPage) - 1}`)}
                        disabled={parseInt(currentPage) <= 1}>Back
                </button>
                {/* show div current page number / 500*/}
                <div>{currentPage} / 500</div>
                <button onClick={() => navigate(`/${mediaType}/category/${category}?page=${parseInt(currentPage) + 1}`)}
                        disabled={parseInt(currentPage) >= 500}>Continue
                </button>
            </div>
            {/*create test button onclick handleTest*/}
            <button onClick={handleTest}>Test</button>
        </div>
    );
};

export default BrowseMedia;
