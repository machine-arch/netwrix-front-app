import "./header.stylesheet.scss";
import { Fragment } from "react";
import Search from "../search/Search.component";

const Header = () => {
  return (
    <Fragment>
      <div className="netwrix_header_top">
        <img src="assets/img/Netwrix_logo.svg" alt="header_top"></img>
      </div>
      <div className="netwrix_header_conteiner">
        <div className="netwrix_header_description_conteiner">
          <div className="netwrix_header_title_conteiner">
            <h1 className="netwrix_header_title">Netwrix Partner Locator</h1>
          </div>
          <div className="netwrix_header_description">
            <span>
              Hundreds of Netwrix partners around the world are standing by to
              help you. With our Partner Locator you can easily find the list of
              authorized partners in your area.
            </span>
          </div>
        </div>
        <div className="netwrix_header_search">
          <Search />
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
