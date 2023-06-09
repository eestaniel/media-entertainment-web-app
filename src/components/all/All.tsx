import {Outlet, Route, Routes} from 'react-router-dom';
import BrowseMedia from "../media/BrowseMedia.tsx";

const All = () => {
    return (
        <div>

            <Routes>
                <Route path="/search/:movieName" element={<BrowseMedia />}/>
            </Routes>
            <Outlet/>
        </div>
    );
};

export default All;
