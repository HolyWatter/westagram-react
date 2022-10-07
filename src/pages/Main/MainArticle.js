import React from "react";
import { useState, useReducer } from "react";
import storyData from "./storyData";
import Comments from "./Comments";


const initialState = { comments : [] };

function reducer(state, action) {
  switch (action.type) {
    case "writeComment":
      const commentsValue = action.payload.commentsValue;
      const comment = {
        id: Date.now(),
        text: commentsValue,
        like: false,
      };

      return {
        comments: [...state.comments, comment],
      };
      case "clickDelete" :
        return {
          comments : state.comments.filter(item => item.id !== action.payload.id)
        };
      case "clickLike" : 
        return{
          comments : state.comments.map((item)=>{
            if(item.id === action.payload.id){
              return {...item, like : !item.like};
            }
            return item
          }),
        };
    default:
      return state;
  }
}

function MainArticle() {

  const [commentsInfo, dispatch] = useReducer( reducer , initialState);
  const [commentsValue, setCommentsValue] = useState("");

  function onChange(event) {
    setCommentsValue(event.target.value);
  }
  function onSubmit(event) {
    event.preventDefault();
    dispatch({ type: "writeComment", payload: { commentsValue } });
    console.log(commentsInfo);
    setCommentsValue("");
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
                {commentsInfo.comments.map((el) => (
                  <Comments id={el.id} text={el.text} dispatch={dispatch} like={el.like}/>
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
