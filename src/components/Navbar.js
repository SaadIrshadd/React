import React from "react";
import PropTypes from "prop-types";

//It is another method of passing props you can also set default values to the props
//It is called destructuring method
export default function Navbar({
  title = "Title text here",
  about = "About text here",
  mode,
  switchMode,
  secondSwitch
}) 
{
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {about}
                </a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form> */}

            <div className={`form-check form-switch text-${mode==="light"?"dark":"light"}`}>
              <input className="form-check-input" onClick={switchMode} type="checkbox" role="switch" id="switchCheckDefault"/>
              <label className="form-check-label" htmlFor="switchCheckDefault">{`Enable ${mode==="light"?"Dark":"Light"} Mode`}</label>
            </div>
            <div className={`mx-2 form-check form-switch text-${mode==="light"?"dark":"light"}`}>
              <input className="form-check-input" onClick={secondSwitch} type="checkbox" role="switch" id="switchCheckDefault"/>
              <label className="form-check-label" htmlFor="switchCheckDefault">{`Enable ${mode==="blue"?"Blue":"Light"} Mode`}</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

// This is how you can set prop-types
Navbar.propTypes = {
  //title: PropTypes.string.isRequired,
  title: PropTypes.string,
  about: PropTypes.string,
};

// This is how you can set default props (works only if you dont destructure)
Navbar.defaultProps = {
  title: "Default Title",
  about: "Default About Text",
};
