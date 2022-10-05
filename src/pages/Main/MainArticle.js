import React from "react";
import { useState } from "react";

const storyData = [
  {
    img: "https://miro.medium.com/max/720/0*LqBi2dONH28oTKVX.png",
    id: "github",
  },
  {
    img: "https://pbs.twimg.com/profile_images/1228368893321736193/Ov0og7E8_400x400.jpg",
    id: "velog",
  },
  {
    img: "https://play-lh.googleusercontent.com/6769rVaf-epw55Cm-ElyVT0zXFOjj-aW2CUVzYK16AR6nXKegZevfEye6Tzq5bw7HGw=w600-h300-pc0xffffff-pd",
    id: "notion",
  },
  {
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    id: "HolyWater",
  },
  {
    img: "https://images.pexels.com/photos/13569929/pexels-photo-13569929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    id: "asdvvqQ",
  },
];

function MainArticle() {
  const [commentsValue, setCommentsValue] = useState("");
  const [commentsArr, setCommentsArr] = useState([]);

  let comments = [...commentsArr];

  function onChange(event) {
    setCommentsValue(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    setCommentsValue(event.target.value);
    comments = comments.concat([
      {
        id: `${Date.now()}`,
        text: `${commentsValue}`,
        like: false,
      },
    ]);
    setCommentsArr(comments);
    console.log(comments);
    setCommentsValue("");
  }
//dataset 고차함수
  function clickDelete(event) {
    console.log(event.target.id);
    comments = comments.filter(item => item.id != event.target.id);
    console.log(comments)
    setCommentsArr(comments);
  }

  function clickLike(event){
  }

return (
  <div className="mainAndAside">
    <main>
      <ul className="storybox box">
        {storyData.map((item, index) => (
          <li className="story " key={index}>
            <div>
              <span className="storyIcon"></span>
              <img src={item.img} className="bigUserIcon"></img>
            </div>
            <span>{item.id}</span>
          </li>
        ))}
      </ul>
      <div className="articlebox box">
        <div id="articlename">
          <span className="userIcon"></span>
          <span className="name">tjdtnxkrmfoa</span>
          <span className="moreIcon"></span>
        </div>
        <div className="photo"></div>
        <div className="toolbox">
          <div className="likebox">
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
            <ul id="commentlist">
              {comments.map((el) => (
                <li key={el.id}>
                  <div>
                    <span className="boldWeight">tjdtnxkrmfoa </span>
                    <span> {el.text}</span>
                  </div>
                  <div>
                    <span onClick={clickLike} className="emptyHeart"></span>
                    <span
                      id={el.id}
                      onClick={clickDelete}
                      className={`removeBtn`}
                    ></span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <form onSubmit={onSubmit} className="commentstool">
          <span className="smileIcon"></span>
          <input
            onChange={onChange}
            value={commentsValue}
            id="commentInput"
            placeholder="댓글 달기..."
          />
          <button id="commentbtn" className="bluefont">
            게시
          </button>
        </form>
      </div>
    </main>
  </div>
);
              }
export default MainArticle;
