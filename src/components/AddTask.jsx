import { useState } from "react";
import Input from "./Input";

function AddTask({  onSubmitTask }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return(
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        
            <Input type="text" 
            placeholder="Digite o titulo da tarefa" 
            value={title} 
            onChange={(event) => setTitle(event.target.value)}
            />

            <Input type="text" 
            placeholder="Digite a descriçao da tarefa" 
            value={description} 
            onChange={(event) => setDescription(event.target.value)}
            />

            <button 
            className="bg-slate-400 text-white p-2 rounded-md w-full" 
            onClick={() => {
                // Limpar os campos de input
                if (!title.trim() || !description.trim()) {
                    alert("Por favor, preencha todos os campos");
                    return;
                }
                onSubmitTask(title, description);
                setTitle("");
                setDescription("");
            }}>
            Adicionar
            </button>
        </div>
    )
}


export default AddTask;