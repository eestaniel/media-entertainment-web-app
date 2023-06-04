import React from 'react';
import {useMediaStore} from "../../store/MediaStore.tsx";
import './styles/MediaCardList.scss'

interface MediaCardListProps {
    mediaType: string;
    category: string;
}

const MediaCardList = ({mediaType, category}: MediaCardListProps) => {
    const {mediaHomePageList} = useMediaStore();

    const base_url = "https://image.tmdb.org/t/p/";
    const logo_size = "w500";
    const backdrop_size = "w300";

    return (
        <div className={'media-list'}>
            {/* map mediaHomePageList and display media item.result.title */}
            {mediaHomePageList[0][mediaType][category].results.map((item: any) => (
                <div
                    className={'media-list__item'}
                    key={item.id}>
                    <img src={`${base_url}${backdrop_size}${item.backdrop_path}`} alt={item.title}/>
                    <h3>{item.title}</h3>

                </div>
            ))}
        </div>
    );
};

export default MediaCardList;
