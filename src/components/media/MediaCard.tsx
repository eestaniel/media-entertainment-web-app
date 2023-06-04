import React from 'react';
import {useMediaStore} from "../../store/MediaStore.tsx";

interface MediaCardProps {
    mediaType: string;
    item: any;
    key: number;
    logo_size: string;
    backdrop_size: string;
    base_url: string;
}

const MediaCard = ({mediaType, item,logo_size, backdrop_size, base_url}: MediaCardProps) => {
    return (
        <div className={'card'}>
            {/*if has backdrop_path not null use it, else use item.poster_path*/}
            {item.backdrop_path ? (
                <img src={`${base_url}${backdrop_size}${item.backdrop_path}`} alt={item.title}/>
            ) : (
                <img src={`${base_url}${logo_size}${item.poster_path}`} alt={item.title}/>
            )}

            <h3>{item.title}</h3>
            <div className="item__group">
                <p className="small">{item.release_date.substring(0, 4)}</p>
                <div className="media-list__item-icon" datatype={`${mediaType}-icon`}></div>
                <p className="small">{mediaType}</p>
            </div>

        </div>
    );
};

export default MediaCard;
