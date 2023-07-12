// import "./styleComp.css";
import styled, { css } from "styled-components";
import { useState } from "react";
const StyleButton = styled.button`
  border-radius: 20px;
  width: 230px;
  height: 45px;
  font-size: 20px;
  
  ${(props) =>
   ( props.text==="Add TODO"&&
    css`
    background: #CA3838;
    colur : white;

`)||
( props.text==="Delete"&&
    css`
    background:#CA3838;
colur : white;

`)||
( props.text==="Done"&&
    css`
    background: #51D45E;
colur : white;

`)||
( props.text==="Do it"&&
    css`
    background: #E9912A;
colur : white;

`)

}
`;

export default function Button(props) {
    const [Buttons,setButtons]=useState(props.func);
    const ButtonHandeler=(func)=>{
       func==='Do it'&& setButtons('Done');
       func==='Done'&& setButtons('Delete');
      Buttons!=='Add TODO'&& props.onClickButton(Buttons)
    
    }
  return <StyleButton text={Buttons} className="Button" onClick={()=>ButtonHandeler(Buttons)}>{Buttons}  </StyleButton>;
}
