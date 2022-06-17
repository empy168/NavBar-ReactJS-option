import React from "react";
import "./NavBar.css";

function NavBar(props) {
  const {
    page1,
    spanText1,
    spanText2,
    rectangle9,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    overlapGroup,
    rectangle8,
    spanText10,
    spanText11,
  } = props;

  return (
    <div className="nav-bar">
      <div className="logo-website-01">
        <img className="page-1" src={page1} />
        <h1 className="place proximanova-semi-bold-fuscous-gray-28px">
          <span className="proximanova-semi-bold-fuscous-gray-28px">{spanText1}</span>
        </h1>
      </div>
      <div className="active">
        <div className="place-1 proximanova-regular-normal-black-16px">
          <span className="proximanova-regular-normal-black-16px">{spanText2}</span>
        </div>
        <img className="rectangle-9" src={rectangle9} />
      </div>
      <div className="buy proximanova-regular-normal-fuscous-gray-16px">
        <span className="proximanova-regular-normal-fuscous-gray-16px">{spanText3}</span>
      </div>
      <div className="sell proximanova-regular-normal-fuscous-gray-16px">
        <span className="proximanova-regular-normal-fuscous-gray-16px">{spanText4}</span>
      </div>
      <div className="rent proximanova-regular-normal-fuscous-gray-16px">
        <span className="proximanova-regular-normal-fuscous-gray-16px">{spanText5}</span>
      </div>
      <div className="project proximanova-regular-normal-fuscous-gray-16px">
        <span className="proximanova-regular-normal-fuscous-gray-16px">{spanText6}</span>
      </div>
      <div className="agenct proximanova-regular-normal-fuscous-gray-16px">
        <span className="proximanova-regular-normal-fuscous-gray-16px">{spanText7}</span>
      </div>
      <div className="loan proximanova-regular-normal-fuscous-gray-16px">
        <span className="proximanova-regular-normal-fuscous-gray-16px">{spanText8}</span>
      </div>
      <div className="login proximanova-regular-normal-fuscous-gray-16px">
        <span className="proximanova-regular-normal-fuscous-gray-16px">{spanText9}</span>
      </div>
      <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup})` }}>
        <img className="rectangle-8" src={rectangle8} />
        <p className="post-property-free proximanova-regular-normal-white-16px">
          <span className="proximanova-regular-normal-white-16px">{spanText10}</span>
          <span className="span1">{spanText11}</span>
        </p>
      </div>
    </div>
  );
}

export default NavBar;
