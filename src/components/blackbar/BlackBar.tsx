import { MDBIcon } from "mdb-react-ui-kit";
import React from "react";

// import { Container } from './styles';

import "./blackBar.css";
const BlackBar: React.FC = () => {
  return (
    <div className="blackBar d-flex justify-content-around">
      <div className="ctn-social-media">
        <MDBIcon
          color="white"
          className="mx-2"
          size="2x"
          fab
          icon="facebook-square"
        ></MDBIcon>
        <MDBIcon
          color="white"
          className="mx-2"
          size="2x"
          fab
          icon="linkedin"
        ></MDBIcon>
        <MDBIcon
          color="white"
          className="mx-2"
          size="2x"
          fab
          icon="instagram"
        ></MDBIcon>
        <MDBIcon
          color="white"
          className="mx-2"
          size="2x"
          fab
          icon="youtube"
        ></MDBIcon>
      </div>
      <div className="ctn-credit-card">
        <MDBIcon fab icon="cc-visa" className="mx-2" size="2x" color="white" />
        <MDBIcon fab icon="cc-visa" className="mx-2" size="2x" color="white" />
        <MDBIcon fab icon="cc-visa" className="mx-2" size="2x" color="white" />
        <MDBIcon fab icon="cc-visa" className="mx-2" size="2x" color="white" />
      </div>
      <div>
        <img src="img/maeztra.svg" />
      </div>
    </div>
  );
};

export default BlackBar;
