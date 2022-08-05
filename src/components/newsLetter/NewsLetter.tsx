import { MDBBtn, MDBInputGroup } from "mdb-react-ui-kit";
import React from "react";

// import { Container } from './styles';

const NewsLetter: React.FC = () => {
  return (
    <div className="d-flex align-items-center justify-content-between">
      <div>
        <p className="m-0">
          <strong>Receba nossa NewsLetter</strong>
        </p>
      </div>
      <div className="w-75">
        <MDBInputGroup>
          <input className="form-control" />
          <MDBBtn color="warning">Buscar</MDBBtn>
        </MDBInputGroup>
      </div>
    </div>
  );
};

export default NewsLetter;
