import React from "react";
import "../Component/Content.css"

function Content({Deletion,id,title,content}){
   function ClickHandaler(){
    Deletion(id);
   }
    return(
        <div className="Content">
            <h1>{title}</h1>
            <p>{content}</p>
            <button onClick={ClickHandaler}>Delete</button>
        </div>
    );
}

export default Content;