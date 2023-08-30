import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const LazyVideo = ({ src }) => {
  const [ref, inView] = useInView();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView && !isVisible) {
      setIsVisible(true);
    }
  }, [inView, isVisible]);

  return (
    <div ref={ref} className="video-container">
      {isVisible && (
        <iframe
          title="video"
          src={src}
          frameBorder="0"
          allow="autoplay; encrypted-media"
        />
      )}
    </div>
  );
};

export default LazyVideo;
