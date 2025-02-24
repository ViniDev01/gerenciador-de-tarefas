import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks(props) {
    const navigate = useNavigate();
    

    

    function onSeeDetailsClick(task) {
        const query = new URLSearchParams();
        query.set("title", task.title);
        query.set("description", task.description);
        navigate(`/tasks?${query.toString()}`);
    }
    return(
        <div>
            <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
                {props.tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                <button onClick={() => props.onclickTask(task.id)} className={`bg-slate-400 text-white p-2 rounded-md w-full text-left flex items-center gap- ${task.isCompleted && "line-through"}`}>
                {task.isCompleted && <CheckIcon />}
                {task.title}
                </button>
                <Button onClick={() => onSeeDetailsClick(task)} ><ChevronRightIcon /></Button>
                <Button onClick={() => props.onDeleteTask(task.id)}><TrashIcon /></Button>
                </li>
                    
            ))}
            </ul>
        </div>
    )
}

export default Tasks; 