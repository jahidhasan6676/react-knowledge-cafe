import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="bg-gray-200 p-2 rounded-md">
            
            <h2 className="font-semibold">Title: {title}</h2>
        </div>
    );
};


Bookmark.propTypes ={
    bookmark:PropTypes.object.isRequired
}
export default Bookmark;