import { useRef, useEffect } from "react";
import Hls from "hls.js";

function HLSPlayer({ url }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(url);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = url;
    }
  }, [url]);

  return <video className="video-player-component" ref={videoRef} controls />;
}

export default HLSPlayer;
