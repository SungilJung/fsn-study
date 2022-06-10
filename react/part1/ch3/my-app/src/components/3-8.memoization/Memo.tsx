import React from "react";
import { useState, useEffect } from "react";
import Comments from "./Comments";

export interface Comment {
  title: string;
  content: string;
  likes: number;
}
const commnetList: Array<Comment> = [
  {
    title: "c1",
    content: "m1",
    likes: 1,
  },
  {
    title: "c2",
    content: "m2",
    likes: 2,
  },
  {
    title: "c3",
    content: "m3",
    likes: 3,
  },
];
export default function Memo() {
  const [comments, setComments] = useState(commnetList);

  useEffect(() => {
    const interval = setInterval(() => {
      setComments((pre) => [
        ...pre,
        {
          title: `comment${pre.length + 1}`,
          content: `message${pre.length + 1}`,
          likes: 1,
        },
      ]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return <Comments commentList={comments} />;
}
