import React, { useState } from 'react';
const VideoPlayer2 = () => {
  const [isPlaying, setIsPlaying] = useState(false);
 
  return (
    <div className="video-player  ">
      <video
        src={"./video/video3.mp4"}
        controls
        autoPlay={isPlaying}
        onEnded={() => setIsPlaying(false)}
      />
       <button onClick={() => changeVideoSource(process.env.PUBLIC_URL + '/images/video/video3.mp4')}></button>
    </div>
  );
};

export default VideoPlayer2;
