import React from "react";

// import { Container } from './styles';
import "./textSidePic.css";
interface TextSidePicProps {
  title: string;
  text: string;
  img: string;
}
const TextSidePic: React.FC<TextSidePicProps> = ({ title, text, img }) => {
  return (
    <div className="d-flex align-items-center justify-content-between p-0 main-ctn-text-side">
      <div className="ctn-text">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
      <div className="ctn-text-side-img">
        <img src={img} className="img-fluid" />
      </div>
    </div>
  );
};

export default TextSidePic;
