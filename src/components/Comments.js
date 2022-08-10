import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { commentCreate, commentsLoad } from "../redux/actions";
import uniqid from "uniqid";
import SingleComment from "./SingleComment";

function Comments(props) {
  const [textComment, setTextComment] = useState("");
  const mainInputRef = useRef();
  const comments = useSelector((state) => {
    const { commentsReducer } = state;
    return commentsReducer.comments;
  });

  const dispatch = useDispatch();

  const handleInput = (e) => {
    setTextComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (textComment) {
      const id = uniqid();
      dispatch(commentCreate(textComment, id));
      setTextComment("");
    }
    mainInputRef.current.blur();
  };

  useEffect(() => {
    dispatch(commentsLoad());
  }, []);

  return (
    <div className="card-comments">
      <form onSubmit={handleSubmit} className="comments-item-create">
        <input
          type="text"
          value={textComment}
          onChange={handleInput}
          ref={mainInputRef}
        />
        <input type="submit" hidden />
      </form>
      {!!comments.length &&
        comments.map((res) => {
          return <SingleComment key={res.id} data={res} />;
        })}
    </div>
  );
}

export default Comments;
