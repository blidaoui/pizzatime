import { Login } from '@/app/Page/Registration/Login';
import React from 'react';
import { Carousel } from "antd";

function DropDownMenu(): React.JSX.Element {
  return (
    <nav className="navbar mt-4 mb-3 mx-5 position-absolute fixed-top">
      <div className="container-fluid">
        <div className="d-flex align-items-center"> {/* Ajout de d-flex et align-items-center pour aligner horizontalement */}
          <button
            className="navbar-toggler ml-3"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Ajout de l'icône de dropdownpanier */}
          
        </div>
        <div
          className="offcanvas offcanvas-end"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body"  >
            <Login/>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default DropDownMenu;
