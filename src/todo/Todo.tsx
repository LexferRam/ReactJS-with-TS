import TodoList from './components/TodoList'
import {TodoProvider} from './context/TodoProvider'
import { useTodos } from './hooks/useTodos'

const Todo = () => {
    const {pendingTodos} = useTodos()
    return (
        <>
        <h1>Todo : {pendingTodos}</h1>
          <TodoList />
        </>
    )
}

export default Todo
