import React from "react";
import Popular from "./PopularSubj";
import New from "./NewSubj";
const WithPopularOrNew = (Component, type) => {
  return function (props) {
    return type === "video" ? (
      <Popular>{<Component {...props} />}</Popular>
    ) : (
      <New>{<Component {...props} />}</New>
    );
  };
};

// const VideoWithPopularOrNew = withPopularOrNew(Video, "video");
// const ArticleWithPopularOrNew = withPopularOrNew(Article, "article");

export default WithPopularOrNew;
