import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported
import "bootstrap/dist/js/bootstrap.bundle.min"; // Ensure Bootstrap JS is imported
import "./style.css";
import video from "./Ch32 20240311110610.mp4";
import Modal from "./Modal";

function Home({ cardCount }) {
  const [modalShow, setModalShow] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");

  const handleCardClick = (videoSrc) => {
    setSelectedVideo(videoSrc);
    setModalShow(true);
  };

  const renderCards = () => {
    const cards = [];
    for (let i = 0; i < cardCount; i++) {
      cards.push(
        <div className="col-md-6 mb-4" key={i}>
          <div className="card" style={{ width: "30rem", height: "20rem" }}>
            <video
              className="card-video"
              src={video}
              controls
              onClick={() => handleCardClick(video)}
            ></video>
          </div>
        </div>
      );
    }
    return cards;
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">{renderCards()}</div>
      <Modal
        show={modalShow}
        onClose={() => setModalShow(false)}
        videoSrc={selectedVideo}
      />
    </div>
  );
}

export default Home;
