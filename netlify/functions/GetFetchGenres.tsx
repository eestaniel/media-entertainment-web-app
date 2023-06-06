import axios from "axios";

/* use for useFetchGenres */
exports.handler = async function (event, context) {
    const {mediaType} = event.queryStringParameters;
    const url = `https://api.themoviedb.org/3/genre/${mediaType}/list?api_key=${process.env.VITE_TMDB_API_KEY}&language=en-US`;

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
