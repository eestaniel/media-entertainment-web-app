import React from 'react';
import {Link} from 'react-router-dom';
import './styles/MediaCard.scss'

interface MediaCardProps {
    mediaType: string;
    item: any;
    key: number;
    logo_size: string;
    backdrop_size: string;
    base_url: string;
}

const MediaCard = ({mediaType, item, logo_size, backdrop_size, base_url}: MediaCardProps) => {

    const ifMulti = item.media_type ? item.media_type : mediaType;

    return (
        <Link
            to={{pathname: `/${ifMulti}/${item.id}`, state: {itemData: {item}}}}
            className={'media__item__link'}
            style={{textDecoration: 'none',}}
        >
            <div className={'card'}>
                {/*if has backdrop_path not null use it, else use item.poster_path*/}
                {item.backdrop_path ? (
                    <img src={`${base_url}${backdrop_size}${item.backdrop_path}`} alt={item.title}/>
                ) : (
                    <img src={`${base_url}${logo_size}${item.poster_path}`} alt={item.title}/>
                )}

                {/* Item Group */}
                <div
                    className="item__group"

                >
                    <p className="small">
                        {item.release_date ? item.release_date.substring(0, 4) : item.first_air_date? item.first_air_date.substring(0, 4): ''}
                    </p>
                    <div className="media-list__item-icon" datatype={`${mediaType}-icon`}></div>
                    <p className="small">{mediaType}</p>
                </div>
                {/* Item Title*/}
                <h3>{item.title ? item.title : item.name}</h3>
            </div>
        </Link>
    );
};

export default MediaCard;
