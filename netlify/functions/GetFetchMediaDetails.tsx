import axios from "axios";

/* use for useFetchMediaDetails */

exports.handler = async function (event, context) {
    const {mediaType, mediaID} = event.queryStringParameters;
    console.log('mediaType', mediaType)
    const url = `https://api.themoviedb.org/3/${mediaType}/${mediaID}?language=en-US`
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
