import React from "react";
import './Main.css';

function Main(){

    return(
        <>
        <header class="zindex">
      <div class="logosize">
        <h1>Seongsutagram</h1>
      </div>
      <input type="text" placeholder="검색" />
      <ul id="searchBar" class="displaynone"></ul>
      <ul id="itembox">
        <li className="homeIcon"></li>
        <li className="dmIcon"></li>
        <li className="addIcon"></li>
        <li className="compassIcon"></li>
        <li className="heartIcon"></li>
        <ul className="menu">
          <li>
            <a id="menuIcon" href="#" class="userIcon"></a>
            <ul id="dropMenu" className="displaynone">
              <li><span className="profileIcon"></span><a href="#">프로필</a></li>
              <li><span className="scrapIcon"></span><a href="#">저장됨</a></li>
              <li><span className="settingIcon"></span><a href="#">설정</a></li>
              <li><a href="./login.html">로그아웃</a></li>
            </ul>
          </li>
        </ul>
      </ul>
    </header>
    <div className="mainAndAside">
      <main>
        <ul className="storybox box">
          <li className="story">
            <div className="user1">
              <span className="storyIcon"></span>
              <span className="bigUserIcon"></span>
            </div>
            <span>tjdtnxkrmfoa</span>
          </li>
          <li className="story">
            <div className="user1">
              <span className="storyIcon"></span>
              <span className="bigUserIcon"></span>
            </div>
            <span>tjdtnxkrmfoa</span>
          </li>
          <li className="story">
            <div className="user1">
              <span className="storyIcon"></span>
              <span className="bigUserIcon"></span>
            </div>
            <span>tjdtnxkrmfoa</span>
          </li>
          <li className="story">
            <div className="user1">
              <span className="storyIcon"></span>
              <span className="bigUserIcon"></span>
            </div>
            <span>tjdtnxkrmfoa</span>
          </li>
          <li className="story">
            <div className="user1">
              <span className="storyIcon"></span>
              <span className="bigUserIcon"></span>
            </div>
            <span>tjdtnxkrmfoa</span>
          </li>
        </ul>
        <div className="articlebox box">
          <div id="articlename">
            <span className="userIcon"></span>
            <span className="name">tjdtnxkrmfoa</span>
            <span className="moreIcon"></span>
          </div>
          <div className="photo"></div>
          <div className="toolbox">
            <div class="likebox">
              <span className="heartIcon"></span>
              <span className="commentsIcon"></span>
              <span className="dmIcon"></span>
            </div>
            <div className="moreIcon position"></div>
            <div className="scrapIcon"></div>
          </div>
          <div className="commentbox">
            <div>
              <span className="boldWeight">tjdtnxkrmfoas</span>
              <span>님 여러 명이 좋아합니다</span>
            </div>
            <div>
              <span className="boldWeight">tjdtnxkrmfoas</span>
              <span>게시글 #어쩌고 #저쩌고</span>
            </div>
            <div>
              <ul id="commentlist"></ul>
            </div>
          </div>
          <form className="commentstool">
            <span className="smileIcon"></span>
            <input id="commentInput" placeholder="댓글 달기..." />
            <button id="commentbtn" class="bluefont">게시</button>
          </form>
        </div>
      </main>
      <aside>
        <div className="recommenduser">
          <span className="bigUserIcon"></span>
          <div>
            <span className="boldWeight">tjdtnxkrmfoa</span>
            <span className="greyFont">박성수</span>
          </div>
          <span className="bluefont">전환</span>
        </div>
        <div className="recommendbox">
          <div id="recommndMunu">
            <span className="greyFont boldWeight">회원님을 위한 추천</span>
            <span className="fontSmall">모두보기</span>
          </div>
          <ul>
            <li className="recommenduser">
              <span className="userIcon"></span>
              <div>
                <span className="boldWeight">tjdtnxkrmfoa</span>
                <span className="greyFont">박성수</span>
              </div>
              <span className="bluefont">팔로우</span>
            </li>
            <li className="recommenduser">
              <span className="userIcon"></span>
              <div>
                <span className="boldWeight">tjdtnxkrmfoa</span>
                <span className="greyFont">박성수</span>
              </div>
              <span className="bluefont">팔로우</span>
            </li>
            <li className="recommenduser">
              <span className="userIcon"></span>
              <div>
                <span className="boldWeight">tjdtnxkrmfoa</span>
                <span className="greyFont">박성수</span>
              </div>
              <span className="bluefont">팔로우</span>
            </li>
          </ul>
        </div>
      </aside>
    </div>
    </>
    )
}

export default Main;