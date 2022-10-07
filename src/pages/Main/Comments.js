import React from "react";

function Comments({ id, text, dispatch, like }) {
  function deleteClick() {
    dispatch({ type: "clickDelete", payload: { id } });
  }
  function likeClick(event) {
    dispatch({ type: "clickLike", payload: { id } });
    console.log(event.target);
  }
  return (
    <li key={id} id={id}>
      <div>
        <span className="boldWeight">tjdtnxkrmfoa </span>
        <span> {text}</span>
      </div>
      <div>
        <span
          onClick={likeClick}
          id={id}
          value={like}
          className={like ? "fullHeartSmall" : "emptyHeart"}
        ></span>
        <span id={id} onClick={deleteClick} className={`removeBtn`}></span>
      </div>
    </li>
  );
}

export default Comments;
