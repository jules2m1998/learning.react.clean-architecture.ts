import { useState } from "react";
import TodoAPIDataSourceImpl from "../../../Data/DataSource/API/TodoAPIDataSourceImpl";
import { TodoRepositoryImpl } from "../../../Data/Repository/TodoRepositoryImpl";
import { Todo } from "../../../Domain/Model/Todo";
import { GetTodos } from "../../../Domain/UseCases/Todo/GetTodos";

export default function TodoListViewModel() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const UseCase = new GetTodos(
    new TodoRepositoryImpl(new TodoAPIDataSourceImpl())
  );

  async function getTodos() {
    setTodos(await UseCase.invoke());
  }

  return {
    getTodos,
    todos,
  };
}
