import { useState } from "react";
import Navbar from "./components/Navbar";
import TodoList from "./components/todoList";
import Counter from "./components/counter";
import Agepredict from "./components/Agepredict";
import Excuses from "./components/Excuses";
function App() {
  return (
    <div>
      <Navbar />
      <Counter />
      <TodoList />
      <Agepredict />
      // <Excuses/>
    </div>
  );
}
export default App;
