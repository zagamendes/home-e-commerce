import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBInputGroup,
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import "./header.css";
// import { Container } from './styles';

const Header: React.FC = () => {
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  return (
    <>
      <MDBNavbar expand="lg" className="myHeader">
        <MDBContainer className="d-flex justify-content-between">
          <MDBNavbarBrand href="#">
            <img src="/img/maeztra.png" />
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavColorSecond(!showNavColorSecond)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBInputGroup tag="form" className="d-flex ctn-input-desktop">
            <input
              className="form-control"
              placeholder="O que você busca?"
              aria-label="Search"
              type="Search"
            />
            <MDBBtn color="warning">Buscar</MDBBtn>
          </MDBInputGroup>
          <div className="d-flex flex-row justify-content-between align-items-center ctn-items-right-side">
            <div className="d-flex align-items-center icon-header">
              <MDBIcon fas className="mx-2" icon="user" />
              <p className="m-0">Minha Conta</p>
            </div>
            <div className="d-flex align-items-center icon-header">
              <MDBIcon fas className="mx-2" icon="heart" />
              <p className="m-0">Meus Favoritos</p>
            </div>
            <div className="d-flex align-items-center icon-header">
              <MDBBtn outline color="warning">
                <MDBIcon fas className="mx-2" icon="shopping-bag" />
                Meu Carrinho
              </MDBBtn>
            </div>
          </div>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default Header;
