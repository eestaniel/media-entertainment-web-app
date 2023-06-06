import {create} from 'zustand'
import {produce} from 'immer'

type MediaHomePageItem = {
    /*make movie type */
    movie: {
        [category: string]: any;
    };
    tv: {
        [category: string]: any;
    };
};

type BrowseList = {
    [category: string]: any;
}


type MediaStore = {
    /* home page*/
    mediaHomePageList: MediaHomePageItem[];
    updateMediaHomePageList: (mediaType: string, category: string, data: any) => void;

    /* selected media TODO refactor to selectedMediaDetails*/
    selectedMediaList: any;
    updateSelectedMediaList: (data: any) => void;
    reset: () => void;

    /* selected media credits */
    selectedMediaCredits: any;
    updateSelectedMediaCredits: (data: any) => void;
    resetCredits: () => void;

    /* browse media */
    browseList: BrowseList[];
    updateBrowseList: (data: any) => void;
    resetBrowseList: () => void;
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

    /* browse media */
    browseList: [{}],

    /* update browse media */
    updateBrowseList: (data) =>
        set(
            produce((state) => {
                    state.browseList[0] = data;
                }
            )
        ),

    /* reset browseList */
    resetBrowseList: () =>
        set(
            produce((state) => {
                    state.browseList = [{}];
                }
            )
        ),
}));


