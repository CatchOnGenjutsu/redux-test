import {useState, useEffect, useRef} from "react";
import { useDispatch } from "react-redux";
import {commentUpdate, commentDelete} from "../redux/actions"


function SingleComment({data}) {
  const [commentText, setCommentText] = useState("")
  const { text, id} = data;
  const inputRef = useRef();
  const dispatch = useDispatch();

  useEffect(()=>{
    if(text){
      setCommentText(text)
    }
  }, [text])

  const handleInput = (e) => {
    setCommentText(e.target.value)
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(commentUpdate(commentText, id));
    inputRef.current.blur(); 
  }

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(commentDelete(id));
  }

  return (
    
      <form onSubmit={handleUpdate} className="comments-item">
        <div onClick={handleDelete} className="comments-item-delete">&times;</div>
        <input type="text" value={commentText} onChange={handleInput} ref={inputRef}/>
        <input type="submit" hidden/>
      </form>
    
  )
}

export default SingleComment;