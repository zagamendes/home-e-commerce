import { MDBIcon } from "mdb-react-ui-kit";
import React from "react";

// import { Container } from './styles';
import "./smallCard.css";
interface SmallCardProps {
  strong: string;
  small: string;
  icon: string;
}
const SmallCard: React.FC<SmallCardProps> = ({ strong, small, icon }) => {
  return (
    <div className="d-flex pl-3 align-items-center smallCard">
      <MDBIcon fas icon={icon} size="2x" />

      <div className="d-flex flex-column">
        <p className="m-0">
          <strong>{strong}</strong>
        </p>
        <p className="m-0">
          <small>{small}</small>
        </p>
      </div>
    </div>
  );
};

export default SmallCard;
