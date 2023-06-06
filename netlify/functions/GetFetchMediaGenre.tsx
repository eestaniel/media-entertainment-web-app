import axios from "axios";

/* use for useFetchMedia Genre */
exports.handler = async function (event, context) {
    const {mediaType, genreID, page} = event.queryStringParameters;
    const url = `https://api.themoviedb.org/3/discover/${mediaType}?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreID}`;

    try {
        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.VITE_TMDB_API_KEY}`,
            }
        } );
        return {
            statusCode: 200,
            /*parse xml*/
            body: JSON.stringify(response.data),
        };
    } catch (error) {
        console.error(error);
    }
}
