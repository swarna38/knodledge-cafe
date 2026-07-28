import PropTypes from "prop-types";
import Bookmark from "../bookmark/Bookmark";


const Bookmrks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 bg-gray-100">
            <h2 className="text-center pt-4">bookmarks : {bookmarks.length}</h2>

            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmrks.propTypes ={
    bookmarks : PropTypes.array
}
export default Bookmrks;