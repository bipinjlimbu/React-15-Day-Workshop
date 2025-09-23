import { useEffect, useState } from "react";

const TodoList=()=>{
const [data, setData] = useState([]);
    const getData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
        const parsedResponse = await response.json();
        setData(parsedResponse);
        console.log(parsedResponse);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
          <div>
            <h1>Todo List</h1>
            <div>
                {
                  data.map((item,index)=><TodoCard key={index} data={item}/>)
                }
            </div>
          </div>         
    )
}

const TodoCard = ({ data }) => {
    return (
        <div style={{
            backgroundColor:"gray"
        }}>
            <h2>ID:{data.id}</h2>
            <h2>Title:{data.title}</h2>
            <h2>Completed:{data.completed ? "Yes" : "No"}</h2>
        </div>
    )
}
export default TodoList;