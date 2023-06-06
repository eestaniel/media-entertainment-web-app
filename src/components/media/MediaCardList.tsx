import {useMediaStore} from "../../store/MediaStore.tsx";
import './styles/MediaCardList.scss'
import MediaCard from "./MediaCard.tsx";

interface MediaCardListProps {
    mediaType: string;
    category: string;
    totalAmount: number;
    className: string;
}

const MediaCardList = ({mediaType, category, totalAmount, className}: MediaCardListProps) => {
    /* define media homepage list any*/
    const mediaHomePageList:any = useMediaStore((state) => state.mediaHomePageList);

    const base_url = "https://image.tmdb.org/t/p/";
    const logo_size = "original";
    const backdrop_size = "original";

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return (
        <div className={className}>
            {/* map mediaHomePageList and display media item.result.title */}
            {mediaHomePageList[0][mediaType][category].results.slice(0, totalAmount).map((item: any) => (
                <MediaCard
                    mediaType={mediaType}
                    item={item}
                    key={item.id}
                    backdrop_size={backdrop_size}
                    logo_size={logo_size}
                    base_url={base_url}
                />
            ))}
        </div>
    );
};

export default MediaCardList;
