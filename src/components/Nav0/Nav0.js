import React from "react";
import style from "./Nav0.module.css";
import data from "./Data";

const nav = () => {
  return (
    <header className={style.pagehead}>
      <div className={`container-fluid ${style.pagehead_con}`}>
        <a href={`/`} className={style.logolink}>
          <img src={data.image} />
        </a>
        <button className={style.menu}>
          <span></span>
        </button>
      </div>
      <nav className={`container`}></nav>
    </header>
  );
};

export default nav;
