import Todo from "./Todo";
import styled from "styled-components";
const AllTodo_wrapper=styled.div`

`

export default function AllTodo(props){
  
    const Deletetodoid=(id)=>{
    props.onDelete(id);
    }
   
    return(
        <AllTodo_wrapper>        
        { props.allTodo.length===0&&<p>ALl done</p>}{
         props.allTodo.map((todo)=>(
                <Todo
                key={todo.id}
                Todo={todo.Todo} 
                id={todo.id}
                color={todo.color} onDelete={Deletetodoid}/>
           )
            )}
        </AllTodo_wrapper>
    );
}