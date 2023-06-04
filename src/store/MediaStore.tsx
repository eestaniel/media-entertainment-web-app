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
    /* home page*/
    mediaHomePageList: MediaHomePageItem[];
    updateMediaHomePageList: (mediaType: string, category: string, data: object) => void;

    /* selected media */
    selectedMediaList: object;
    updateSelectedMediaList: (data: object) => void;
    reset: () => void;

    /* selected media credits */
    selectedMediaCredits: object;
    updateSelectedMediaCredits: (data: object) => void;
    resetCredits: () => void;
};


export const useMediaStore = create<MediaStore>((set) => ({
    /* home page list */
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

    /* selected media list*/
    selectedMediaList: {},

    /* update selected media list */
    updateSelectedMediaList: (data) =>
        set(
            produce((state) => {
                    state.selectedMediaList = data;
                },
            )
        ),
    /* reset selected media */
    reset: () =>
        set(
            produce((state) => {
                    state.selectedMediaList = {};
                }
            )
        ),

    /* selected media credits */
    selectedMediaCredits: {},
    /* update selected media credits */
    updateSelectedMediaCredits: (data) =>
        set(
            produce((state) => {
                    state.selectedMediaCredits = data;
                }
            )
        ),
    /* reset selected media credits */
    resetCredits: () =>
        set(
            produce((state) => {
                    state.selectedMediaCredits = {};
                }
            )
        ),
}));


