import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks,readingTime}) => {
    
    
    return (
       
        <div className="md:w-1/3 bg-gray-300 rounded-md p-3 space-y-3">
           
            <div>
            <h2 className="text-xl font-semibold border-2 border-blue-400 p-2 rounded-md bg-[#6047EC1A]">Spent time on read: {readingTime} </h2>
            </div>

            <h2 className="font-bold">Bookmarked Blogs: {bookmarks.length}  </h2>
            {
                bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes ={
    bookmarks:PropTypes.array.isRequired,
    readingTime:PropTypes.number.isRequired
}
export default Bookmarks;