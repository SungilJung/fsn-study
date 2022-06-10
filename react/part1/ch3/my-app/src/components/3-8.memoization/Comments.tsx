import React, { useCallback } from "react";
import CommentItem from "./CommentItem";
import { Comment } from "./Memo";

interface Props {
  commentList: Array<Comment>;
}
export default function Comments(props: Props) {
  const onClickHandler = useCallback(() => console.log("Comment hi"), []);
  return (
    <div>
      {props.commentList.map((comment: Comment) => (
        <CommentItem
          key={comment.title}
          title={comment.title}
          content={comment.content}
          likes={comment.likes}
          onClickHandler={onClickHandler}
        />
      ))}
    </div>
  );
}
