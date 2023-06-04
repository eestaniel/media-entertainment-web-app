import {create} from 'zustand'
import {produce} from 'immer'

type MediaHomePageItem = {
    movie: {
        [category: string]: object;
    };
    tv: {
        [category: string]: object;
    };
};

type MediaStore = {
    mediaHomePageList: MediaHomePageItem[];
    updateMediaHomePageList: (mediaType: string, category: string, data: object) => void;
};


export const useMediaStore = create<MediaStore>((set) => ({
    mediaHomePageList: [{
        movie: {
            trending: {},
            popular: {},
            top_rated: {},
            now_playing: {},
            upcoming: {},
        },
        tv: {
            trending: {},
            popular: {},
            top_rated: {},
            airing_today: {},
            on_the_air: {},
        },
    }],

    /* update list */
    updateMediaHomePageList: (mediaType, category, data) =>
        set(
            produce((state) => {
                    state.mediaHomePageList[0][mediaType][category] = data;
                }
            )
        ),

}));


