// import Addtodo from "./components/Addtodo";
// import AllTodo from "./components/All_Todo";
import styled from "styled-components";
// import { useState } from "react";
import Final from "./Final";


const FinalWrapper=styled.div`
background:#484156;
`

// const Head=styled.div`
// background:#484156;
// // height:100vh;
// // width:100%;
// `
// const Main_wrapper = styled.div`
//     display:flex;
//     flex-direction:column;
//     position:relative;
//     top:152px;
//     left:260px;
//     gap:70px;
//     // padding:0px;
//     // width:1000%;
    
// `
// const todos=[
//   {
//     id:"t1",
//     Todo:"solve 5 question A",
//     color:"#CA3838"
//   },
//   {
//     id:'t4',
//     Todo:"hello world",
//     color:'#CA3838'
//   },
//   {
//     id:"t2",
//     Todo:"solve 5 question B",
//     color:"#51D45E"
//   },
//   {
//     id:"t3",
//     Todo:"solve 5 question C" ,
//     color:"#E9912A"
//   }
// ]

function App() {
  // const [todoData,setTodoData]=useState(todos);

  // const addEnteredData=(inputdata)=>{
  //   const newTodo={
  //     id:Math.random().toString(),
  //     ...inputdata,
  //     color:'#CA3838'
  //   };
  //   setTodoData((prevtodos)=>{
  //     return [newTodo,...prevtodos]
  //   }
  //   );
  //   // console.log(todoData);
  // };

  // const DeleteTodoid=(id)=>{
  //   console.log(id);
  //    const newTodoList=todoData.filter((l)=>l.id!=id);
  //    setTodoData(newTodoList);
  // }

  // return (
  //   <Head>
  //   <Main_wrapper className="main">
  //     <Addtodo onEnterData={addEnteredData} />
  //     <AllTodo allTodo={todoData} onDelete={DeleteTodoid} ></AllTodo>
  //   </Main_wrapper>
  //   </Head>
  // );
  return(
    <FinalWrapper>
     <Final/>
    </FinalWrapper>
  );
}

export default App;
