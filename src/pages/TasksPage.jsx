import { useSearchParams } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";


function PageTasks() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="w-screen h-screen bg-slate-500 p-6 space-y-4">
      <div className="flex justify-center relative">
      <button onClick={() => navigate(-1)} className="absolute left-0 top-0 bottom-0 text-slate-100">
        <ChevronLeftIcon />
      </button>
      <Title>Detalhes da Tarefa</Title>
      </div>

      <div className="bg-slate-200 p-4 rounded-md">
      <h2 className="text-xl font-bold text-slate-600">{title}</h2>
      <p className=" text-slate-600">{description}</p>
      </div>
    </div>
  );
}

export default PageTasks;