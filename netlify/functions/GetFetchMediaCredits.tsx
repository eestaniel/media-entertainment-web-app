import axios from "axios";

/* use for GetFetchMediaCredits */
exports.handler = async function (event, context) {
    const {mediaType, mediaID} = event.queryStringParameters;
    const url = `https://api.themoviedb.org/3/${mediaType}/${mediaID}/credits?language=en-US`
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
