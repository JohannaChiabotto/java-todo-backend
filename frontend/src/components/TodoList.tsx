import {TodoEle} from "../data/TodoEle";
import Todo from "./Todo";


type TodoListProps = {
    todos: TodoEle[]
}
export default function TodoList(props: TodoListProps) {
    const todoComponents = props.todos.map((todo: TodoEle) => {
    return <Todo todo={props.todos}/>
    })
    return (
        <div>
            {todoComponents}


        </div>);
}
