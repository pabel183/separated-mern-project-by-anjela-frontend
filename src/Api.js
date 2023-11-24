import react from "react";
import axios from "axios";
//const url=process.env.REACT_APP_URL;

async function FetchData(){
    
    //console.log("url value of .env "+url);
    try{
        const data=(await axios.get(process.env.REACT_APP_URL+"/fetchdata")).data;
        return data;
    }catch(error){
        console.error(error);
    }
}
 async function Sendrequest(props){
    try{
       await axios.post(process.env.REACT_APP_URL+"/data", props );
       //const data=(await axios.post("http://localhost:5000/data", props )).data;
       //console.log(data)
    //    return data;
    }catch(error){
        console.error(error);
    }
}
async function Deleterequest(props){
    try{
     await   axios.post(process.env.REACT_APP_URL+"/delete", {id:props}) 
        // const data= (await axios.post("http://localhost:5000/delete", {id:props}) ).data;
        // return data;
    }catch(error){
        console.log(error);
    }
}
export {FetchData,Sendrequest,Deleterequest};