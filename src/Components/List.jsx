/* eslint-disable array-callback-return */
import React from "react";
import VideoWithPopularOrNew from "./VideoWithPopularOrNew";
import ArticleWithPopularOrNew from "./ArticleWithPopularOrNew";

const List = (props) => {
  return props.list.map((item) => {
    // eslint-disable-next-line default-case
    switch (item.type) {
      case "video":
        return <VideoWithPopularOrNew {...item} />;

      case "article":
        return <ArticleWithPopularOrNew {...item} />;
    }
  });
};
export default List;
