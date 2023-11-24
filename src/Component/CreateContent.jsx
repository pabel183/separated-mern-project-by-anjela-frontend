import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Content from "./Content";
import {Sendrequest,Deleterequest,FetchData} from "../Api";
import "../Component/Content.css";

function CreateContent() {

    const [Contents, setContents] = useState([]);
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [submitCheck, setSubmitCheck] = useState(false);

    useEffect(
        ()=>{
           async function fetch(){
            const data= await FetchData();
            if(data.length>0){
            setSubmitCheck(true);
            setContents(data);
         }
        }
        fetch();
        }
        ,[]
    );

    function Deletion(id){ 
        
        const value=Contents.filter((value)=>id!==value.key);
        setContents(value);
        Deleterequest(id);
        // const data=await Deleterequest(id);
        // console.log(data);
        // console.log("ok I have got it");    
    }
    function ContentsMaping() {
        return (
            Contents.map((value) => {
                return (
                    <Content
                        key={value.key}
                        id={value.key}
                        title={value.title}
                        content={value.content}
                        Deletion={Deletion}
                    />
                );
            }
            )
        );
    }

   async function SubmitHandelar(event) {
        event.preventDefault();
        let tempContents;
       await function Send({tempContents}){
            console.log(tempContents);
        }
        if (title && content) {
            const id = uuidv4();
            // tempContents=[...Contents, { key: id, title: title, content: content }];
            // setContents(tempContents);
            tempContents= { key: id, title: title, content: content };
           setContents([...Contents,tempContents]); 
            //setContents(tempContents);
            setSubmitCheck(true);
        }
        else {
            alert("Please fill up the form.");
        }

        Sendrequest(tempContents);
        //console.log(title);
        // console.log(tempContents);
        //   const returndata=await Sendrequest(tempContents);//(tempContents);
        //  console.log(returndata);
    }

    function ChangeHandelar(event) {
        
        const value = event.target.value;
        if (event.target.name === "title") {
            setTitle(value);
        } else if (event.target.name === "content") {
            setContent(value);
        }
    }

    return (
        <div >
            <form className="form" onSubmit={SubmitHandelar}>
                <input className="titleField" onChange={ChangeHandelar} type="text" name="title" placeholder={title || "Title on here..."} />
                <div className="contentPosition">
                <textarea className="contentField" onChange={ChangeHandelar} type="text" name="content" placeholder={content || "Write your mindblowing message on here..."} />
                <button className="submitButton" type="submit">Submit</button>
                </div>
            </form>
            {submitCheck && <ContentsMaping />}
        </div>
    );
}

export default CreateContent;
