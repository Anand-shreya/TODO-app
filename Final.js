import Addtodo from "./components/Addtodo";
import AllTodo from "./components/All_Todo";
import styled from "styled-components";
import { useState } from "react";



const Main_wrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    gap:70px;
`
const todos=[
  // {
  //   id:"t1",
  //   Todo:"solve 5 question A",
  //   color:"#CA3838"
  // },
  // {
  //   id:'t4',
  //   Todo:"hello world",
  //   color:'#CA3838'
  // },
  // {
  //   id:"t2",
  //   Todo:"solve 5 question B",
  //   color:"#51D45E"
  // },
  // {
  //   id:"t3",
  //   Todo:"solve 5 question C" ,
  //   color:"#E9912A"
  // }
]

function Final() {
  const [todoData,setTodoData]=useState(todos);

  const addEnteredData=(inputdata)=>{
    const newTodo={
      id:Math.random().toString(),
      ...inputdata,
      color:'#CA3838'
    };
    setTodoData((prevtodos)=>{
      return [newTodo,...prevtodos]
    }
    );
    // console.log(todoData);
  };

  const DeleteTodoid=(id)=>{
    console.log(id);
     const newTodoList=todoData.filter((l)=>l.id!==id);
     setTodoData(newTodoList);
  }

  return (
    <Main_wrapper className="main">
      <Addtodo onEnterData={addEnteredData} />
      <AllTodo allTodo={todoData} onDelete={DeleteTodoid} ></AllTodo>
    </Main_wrapper>
  );
}

export default Final;
