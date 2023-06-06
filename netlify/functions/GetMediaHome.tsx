import axios from "axios";

/* use for useFetchMediaHome */

exports.handler = async function (event, context) {
    const {mediaType, category} = event.queryStringParameters;
    let url;

    if (category === 'trending') {
        url = `https://api.themoviedb.org/3/${category}/${mediaType}/day?language=en-US`;
    } else {
        url = `https://api.themoviedb.org/3/${mediaType}/${category}?language=en-US&page=1`;
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
            body: JSON.stringify(response.data),
        };
    } catch (error) {
        console.error(error);
    }
}
