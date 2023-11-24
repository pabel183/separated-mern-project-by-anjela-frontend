import {React,useState,useEffect} from "react";
import "../Component/Content.css";

function Footer(){
    const [isScroll,setScroll]=useState(false);
    const handleClick=()=>{
        if(window.scrollY>0){
            setScroll(true);
        }
        else{
            setScroll(false);
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",handleClick);
        return ()=>{
            window.removeEventListener("scroll",handleClick);
        }
    });

    return(
        <div className={isScroll?"footerRelative":"footerAbsolute"}>
            <div>
            <p>Copyright &copy; 2023</p>
            </div>
        </div>
    );
}

export default Footer;