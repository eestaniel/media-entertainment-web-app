import axios from "axios";

/* use for useBroseMedia */
exports.handler = async function (event, context) {
    const {mediaType, browseType, selectedBrowseType, page} = event.queryStringParameters;
    let url!: string;
    if (browseType === 'category') {
        url = `https://api.themoviedb.org/3/${mediaType}/${selectedBrowseType}?language=en-US&page=${page}`;
    } else if (browseType === 'genre') {
        url = `https://api.themoviedb.org/3/discover/${mediaType}?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${selectedBrowseType}`;
    } else if (browseType === 'search' && mediaType === 'all') {
        url = `https://api.themoviedb.org/3/search/multi?language=en-US&query=${selectedBrowseType}&page=${page}&include_adult=false`;
    } else if (browseType === 'search') {
        url = `https://api.themoviedb.org/3/search/${mediaType}?language=en-US&query=${selectedBrowseType}&page=${page}&include_adult=false`;
    }

    try {
        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.VITE_TMDB_API_KEY}`,
            },
        });
        return {
            statusCode: 200,
            /*parse xml*/
            body: JSON.stringify(response.data),
        };
    } catch (error) {
        console.error(error);
    }
}
