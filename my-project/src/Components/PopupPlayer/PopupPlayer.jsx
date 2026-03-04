import React from "react";
import { IoClose } from "react-icons/io5";

const PopupPlayer = ({ isPlay, togglePlay }) => {
  return (
    <>
      {isPlay && (
        <div 
          className="fixed z-[9999] top-0 left-0 w-full h-full bg-black/70 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
        >
          <div className="absolute w-full sm:max-w-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="bg-gray-900 p-5 m-3 rounded-lg shadow-2xl">
              {/* header section */}
              <div className="flex items-center justify-between pb-3">
                <h1 id="video-modal-title" className="text-2xl font-semibold text-white">
                  Demo Video
                </h1>
                <button
                  onClick={togglePlay}
                  className="text-4xl cursor-pointer hover:scale-110 duration-300 
                             focus:outline-none focus:ring-2 focus:ring-primary rounded"
                  aria-label="Close video player"
                >
                  <IoClose />
                </button>
              </div>

              {/* video player section */}
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/skz6VDfm03I?si=ZE0mBi5atyVsp_0C"
                  title="UTE NCKH Demo Video - AI System for Papaya Leaf Disease Detection"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupPlayer;