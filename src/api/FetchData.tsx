import React from 'react';
import axios from 'axios';
import {useMediaStore} from "../store/MediaStore";


export const useFetchHomeMedia = () => {
    const setMediaHomePageList = useMediaStore(state => state.mediaHomePageList)
    const mediaHomePageList = useMediaStore(state => state.mediaHomePageList)
    const categories = {
        movie: ['popular', 'now_playing', 'top_rated', 'upcoming'],
        tv: ['popular', 'top_rated', 'on_the_air', 'airing_today'
        ]
    }
    const data = {}

};
