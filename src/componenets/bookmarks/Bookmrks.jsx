import PropTypes from "prop-types";
import Bookmark from "../bookmark/Bookmark";


const Bookmrks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-100">
            <div className="p-5 border rounded-2xl border-b-blue-500">
                <h2>Reading Time : {readingTime}</h2>
            </div>
            <h2 className="text-center pt-4">bookmarks : {bookmarks.length}</h2>

            {
                bookmarks.map((bookmark, index) => <Bookmark key={index} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmrks.propTypes ={
    bookmarks : PropTypes.array
}
export default Bookmrks;