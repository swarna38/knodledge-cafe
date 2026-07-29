import PropTypes from "prop-types";
import { MdBookmarks } from "react-icons/md";

const Blog = ({ blog, handelAddToBookMark, handelMarkAsRead }) => {
    const {id, title, cover, author, author_img, posted_date, reading_time, hashtags} = blog
    console.log(blog)
    return (
        <div className="mb-18">
            <img className="w-full mb-7" src={cover} alt={`cover picture of the title ${title}`} />
            <div className="flex justify-between mt-3.5">
                <div className="flex gap-6 mb-5">
                    <img className="w-14 rounded-full" src={author_img} alt={`author image ${author}`} />
                    <div>
                        <h3>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>

                <div className="items-center">
                    <span>{reading_time} min read</span>

                    <button 
                        onClick={() => handelAddToBookMark(blog)}
                        className="text-red-800 ml-3">
                        <MdBookmarks />
                    </button>

                </div>

            </div>
            <h2 className="text-4xl mb-4 font-bold">{title}</h2>
            <p>
                {
                    hashtags.map((hash, index) => <span key={index}><a href="">{hash}</a></span>)
                }
            </p>

            <button 
                 onClick={() => handelMarkAsRead( id, reading_time)}
                 className="text-blue-700 font-bold underline">
                 Mark As Read
            </button>
        </div>
    );
};

Blog.propTypes = {
    blog : PropTypes.object.isRequired,
    handelAddToBookMark: PropTypes.func,
    handelMarkAsRead: PropTypes.func,
}
export default Blog;