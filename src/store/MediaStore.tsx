import {create} from 'zustand'

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
  setMediaHomePageList: (mediaHomePageList: MediaHomePageItem[]) => void;
};


export const useMediaStore = create<MediaStore>((set) => ({
    /* For home page */
    mediaHomePageList: [{
        movie: {
            'trending': {},
            'popular': {},
            'top_rated': {},
            'now_playing': {},
            'upcoming': {}
        },
        tv: {
            'trending': {},
            'popular': {},
            'top_rated': {},
            'airing_today': {},
            'on_the_air': {}
        }
    }],
    setMediaHomePageList: (mediaHomePageList) => set({mediaHomePageList})
}))

