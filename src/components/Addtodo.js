import Button from "./Button";
import styled from "styled-components";
import { useState } from "react";

const Add_Todo_wrapper=styled.div`
margin:40px;
width: 60%;
height: 83px;
display:flex;
flex-direction:column;
justify-content:space-evenly;
background:#D9D9D9;
border-radius:40px;

.Input{
    background:#D9D9D9;
    padding:8px;
    border-radius:40px;
    position:relative;
    left:18px;
    width:68%;
    height:70%;
    color:black;
    border:0px solid #D9D9D9 ;
    font-size:25px;
}
    .Button{
        position:relative;
        left:25px;
        
    }
    .form{
        position:relative;
        // width:50%;
        border-radius:20px;
        background:#D9D9D9;
    }
`
export default function Addtodo(props){
    const[input,setInput]=useState("");

    // const[submit,setsubmit]=useState("pending");
    const inputHandeler=(event)=>{
        setInput(event.target.value);
    }
    const submitHandeler=(event)=>{
        event.preventDefault();
        input!=""&&props.onEnterData({Todo:input});
        setInput("");
    }
    // const submitHandeler2=()=>{
    //     setsubmit("sumbmit");
    //     submitHandeler();
    // }
    return(
        <Add_Todo_wrapper>
            <form className="form" onSubmit={submitHandeler} >
                <input type="text" className="Input" value={input} onChange={inputHandeler} placeholder="Enter TODO"/>
            <Button func="Add TODO" type='submit' ></Button>
           </form>
        </Add_Todo_wrapper>
    );
}