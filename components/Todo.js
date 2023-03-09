import Button from "./Button";
import styled from "styled-components";
import { useState } from "react";

const Todo_wrapper=styled.div`

width:70vw;
display:flex;
flex-direction:row;
justify-content:space-between;
border-radius:40px;
margin:30px;
 padding:18px;
    background:${props=>props.todoColor||'green'};
    .Todo{
    width:70%;
    word-wrap:break-word;
    color:black;
    font-size:25px;
    background:${props=>props.todoColor||'green'};
}
    .Button{
        position:relative;
        top:15px;
        }
`
export default function Todo(props){

            const [bgcolor,setbgcolor]=useState(props.color);
        const TodoClickHandeler=(Button)=>{
          Button==='Delete'&&props.onDelete(props.id);
          Button==='Done'&&setbgcolor("#51D45E")
          Button==='Do it'&&setbgcolor("#E9912A")
          console.log(bgcolor);
          console.log(Button);
        }

    return(
        <Todo_wrapper todoColor={bgcolor}>
           <p className="Todo">{props.Todo}
           </p>
           <Button func={bgcolor==="#E9912A"?"Done":(bgcolor==="#51D45E"?"Delete":"Do it")} onClickButton={TodoClickHandeler}></Button>
        </Todo_wrapper>
    );
}