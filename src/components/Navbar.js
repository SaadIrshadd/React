import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

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
          <Link className="navbar-brand" to="/">
            {title}
          </Link>
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
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {about}
                </Link>
              </li>
            </ul>
          
            <div className={`form-check form-switch text-${mode==="light"?"dark":"light"}`}>
              <input className="form-check-input" onClick={switchMode} type="checkbox" role="switch" id="switchCheckDefault"/>
              <label className="form-check-label" htmlFor="switchCheckDefault">{`${mode==="light"?"Enable":"Disable"} Dark Mode`}</label>
            </div>

            {/* <div className={`form-check form-switch text-${mode==="light"?"dark":"light"}`}>
              <input className="form-check-input" onClick={secondSwitch} type="checkbox" role="switch" id="switchCheckDefault"/>
              <label className="form-check-label" htmlFor="switchCheckDefault">{`Enable ${mode==="light"?"Blue":"Light"} Mode`}</label>
            </div> */}
          
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
// Navbar.defaultProps = {
//   title: "Default Title",
//   about: "Default About Text",
// };
