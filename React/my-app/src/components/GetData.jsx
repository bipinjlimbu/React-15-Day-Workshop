import { useEffect, useState } from "react";
import tdl from "../style/TodoList.module.css"

const TodoList=()=>{
const [data, setData] = useState([]);
    const getData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
        const parsedResponse = await response.json();
        setData(parsedResponse);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
          <div className={tdl.container}>
            <h1 className={tdl.heading}>Todo List</h1>
            <div className={tdl.todoList}>
                {
                  data.map((item,index)=><TodoCard key={index} data={item}/>)
                }
            </div>
          </div>         
    )
}

const TodoCard = ({ data }) => {
    return (
        <div className={tdl.todoCard}>
            <h2>ID:{data.id}</h2>
            <h2>Title:{data.title}</h2>
            <h2>Completed:{data.completed ? "Yes" : "No"}</h2>
        </div>
    )
}
export default TodoList;