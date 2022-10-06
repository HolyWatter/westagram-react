import React from "react";

function Comments({id, text, dispatch, like}){
    function deleteClick(){
        dispatch({type : "clickDelete" , payload : {id}})
    }
    function likeClick(event){
        dispatch({type : "clickLike", payload : {id}})
    }
    return(
        <li key={id}>
                    <div>
                      <span className="boldWeight">tjdtnxkrmfoa </span>
                      <span> {text}</span>
                    </div>
                    <div>
                      <span onClick={likeClick} id={id} 
                      className={
                        like ? 'fullHeartSmall' : 'emptyHeart'
                      }></span>
                      <span
                        id={id}
                        onClick={deleteClick}
                        className={`removeBtn`}
                      ></span>
                    </div>
                  </li>
    )
}

export default Comments;