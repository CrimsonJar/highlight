import WithPopularOrNew from "./WithPopularOrNew";
import Video from "./Video"; // предположим, что у вас есть файл Video.js

const VideoWithPopularOrNew = WithPopularOrNew(Video, "video");

export default VideoWithPopularOrNew;
