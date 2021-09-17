import './App.css';
import { TodoProvider } from './todo/context/TodoProvider';
import Todo from './todo/Todo';

function App() {
  return (
    <div className="App App-header">
      <TodoProvider>
         <Todo />
      </TodoProvider>
    </div>
  );
}

export default App;
