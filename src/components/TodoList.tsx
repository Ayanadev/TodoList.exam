import { useState } from "react";
import scss from "./TodoList.module.scss";
import { useForm } from "react-hook-form";

interface TodoDataType {
  _id: number;
  title: string;
  img: string;
}

const TodoList = () => {
  const [todoData, setTodoData] = useState<TodoDataType[]>([]);
  const { register, handleSubmit } = useForm<TodoDataType>();

  return (
    <div className={scss.TodoList}>
      <h1>TodoList</h1>
      <input type="text" {...register("title", { required: true })} />
      <input type="file" {...register("img", { required: true })} />
      <button>Create</button>
      <div className={scss.content}>
        <div className={scss.todo}>
          <h1>{}</h1>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
