import React from "react";

const nav = () => {
  return (
    <>
      <input
        type={`checkbox`}
        id={`nav-toggle`}
        name={`nav-toggle`}
        value={`show`}
      ></input>
      <header>
        <div className={`container`}>
          <a href={`/`} className={`current-page`}></a>
          <label for={`nav-toggle`}>
            <span></span>
          </label>
        </div>
        <nav className={`container`}></nav>
      </header>
    </>
  );
};

export default nav;
