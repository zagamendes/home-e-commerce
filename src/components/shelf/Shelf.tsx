import React from "react";

import "./shelf.css";

import { MDBBtn } from "mdb-react-ui-kit";
interface ShelfProps {
  modelo?: string;
}
const Shelf: React.FC<ShelfProps> = ({ modelo = "/img/modelo.png" }) => {
  return (
    <div className="ctn-shelf-image p-0">
      <div className="">
        <img src={modelo} className="img-fluid" />
      </div>
      <div className="d-flex">
        <div className="bg-warning ctn-color"></div>
        <div className="bg-primary ctn-color"></div>
        <div className="bg-danger ctn-color"></div>
        <div className="bg-success ctn-color"></div>
      </div>
      <div className="ctn-preco">
        <p className="m-0">
          <strong>R$ 500,00</strong>
        </p>
      </div>
      <div className="ctn-name">
        <p className="m-0">Faux Suede Mini Skirt</p>
      </div>
      <div className="ctn-description">
        <p className="m-0">
          A faux suede mini skirt featuring exposed button-front closures and
          panel seam construction.
        </p>
      </div>
      <div>
        <MDBBtn color="warning" className="btn-block">
          Adicionar
        </MDBBtn>
      </div>
    </div>
  );
};

export default Shelf;
