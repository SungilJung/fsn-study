import React, { memo, useMemo } from "react";
import { Comment } from "./Memo";
import "./CommentItem.css";

interface CommentItemProps extends Comment {
  onClickHandler: Function;
}

const CommentItem: React.FC<CommentItemProps> = ({
  title,
  content,
  likes,
  onClickHandler,
}) => {
  const handleClick = (event: any) => {
    alert(`${title} 눌림`);
    onClickHandler();
  };

  const rate = useMemo(() => {
    console.log("rate");
    return likes > 10 ? "good" : "bad";
  }, [likes]);

  return (
    <div className="CommentItem" onClick={handleClick}>
      <span>{title}</span>
      <br />
      <span>{content}</span>
      <span>{likes}</span>
      <br />
      <span>{rate}</span>
    </div>
  );
};

export default memo(CommentItem);
