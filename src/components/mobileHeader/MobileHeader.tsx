import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarBrand,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import "../header/header.css";
// import { Container } from './styles';

const MobileHeader: React.FC = () => {
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  return (
    <MDBNavbar expand="lg" className="myHeader-mobile">
      <MDBContainer className="d-flex justify-content-between">
        <div className="d-flex">
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
          <MDBNavbarBrand href="#">
            <img src="/img/maeztra.png" />
          </MDBNavbarBrand>
        </div>
        <MDBCollapse show={showNavColorSecond} navbar id="navbarColor02">
          <MDBNavbarNav className="me-auto mb-2 mb-lg-0">
            <MDBNavbarItem className="active">
              <MDBNavbarLink aria-current="page" href="#">
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#">Features</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#">Pricing</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#">About</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>

        <div className="d-flex flex-row justify-content-between align-items-center">
          <div className="d-flex align-items-center icon-header">
            <MDBIcon fas className="mx-2" icon="search" />
          </div>

          <div className="d-flex align-items-center icon-header">
            <MDBIcon fas className="mx-2" icon="shopping-bag" />
          </div>
        </div>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default MobileHeader;
