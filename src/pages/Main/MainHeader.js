import React from "react";
import { useState } from "react";
import userData from "./userData";
// import './MainHearder.scss';

function MainHeader() {
  const [dropBar, setDropBar] = useState(false);
  
  function dropClick() {
    setDropBar(!dropBar);
  }
  const [searchValue, setSearchValue] = useState("");

  function search(event) {
    setSearchValue(event.target.value);
  }

  return (
    <header className="zindex">
      <div className="logosize">
        <h1>Seongsutagram</h1>
      </div>
      <input
        onChange={search}
        value={searchValue}
        type="text"
        placeholder="검색"
      />
      <ul id="searchBar">
        {userData
          .filter((x) => {
            if (searchValue == "") {
              return false;
            } else if (x.includes(searchValue)) {
              return x;
            }
          })
          .map((x, i) => (
            <li key={i}>
              <div>
                <span className="userImg"></span>
                <span>{x}</span>
              </div>
            </li>
          ))}
      </ul>

      <ul id="itembox">
        <li className="homeIcon"></li>
        <li className="dmIcon"></li>
        <li className="addIcon"></li>
        <li className="compassIcon"></li>
        <li className="heartIcon"></li>
        <ul className="menu">
          <li>
            <a
              onClick={dropClick}
              id="menuIcon"
              href="#"
              className="userIcon"
            ></a>
            {dropBar ? (
              <ul id="dropMenu">
                <li>
                  <span className="profileIcon"></span>
                  <a href="#">프로필</a>
                </li>
                <li>
                  <span className="scrapIcon"></span>
                  <a href="#">저장됨</a>
                </li>
                <li>
                  <span className="settingIcon"></span>
                  <a href="#">설정</a>
                </li>
                <li>
                  <a href="./login.html">로그아웃</a>
                </li>
              </ul>
            ) : null}
          </li>
        </ul>
      </ul>
    </header>
  );
}

export default MainHeader;
