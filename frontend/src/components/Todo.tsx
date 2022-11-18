import {TodoEle} from "../data/TodoEle";

type TodoProps = {todo: TodoEle }
export default function Todo(props: TodoProps) {

    return(
    <div>
        <h3>{props.todo.status}</h3>
        <h3>{props.todo.description}</h3>
        <h3>{props.todo.id}</h3>

    </div>)
}