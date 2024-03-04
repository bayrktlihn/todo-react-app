import './App.css'
import TodoTable from "./components/TodoTable.jsx";
import {useState} from "react";
import NewTodoForm from "./components/NewTodoForm.jsx";

function App() {

    let [showAddForm, setShowAddForm] = useState(false);

    let [todos, setTodos] = useState([
        {number: 1, description: 'Feed puppy', assigned: 'User One'},
        {number: 2, description: 'Water plants', assigned: 'User Two'},
        {number: 3, description: 'Make dinner', assigned: 'User One'},
        {number: 4, description: 'Charge phone battery', assigned: 'User One'}
    ]);


    const newTodo = function (evnt) {

        setShowAddForm(showForm => !showForm);
    }


    const removeTodo = function (number) {


        setTodos(currentTodos => {
            let tmp = [...currentTodos];
            let toBeRemovedTodoIndex = tmp.findIndex(item => item.number === number);
            tmp.splice(toBeRemovedTodoIndex, 1);
            return tmp;
        })
    }


    function createTodo(createdTodo) {
        setTodos(currentTodos => {

            let number = 0;
            for (let i = 0; i < currentTodos.length; i++) {
                let currentTodo = currentTodos[i];
                if (number < currentTodo.number) {
                    number = currentTodo.number;
                }
            }

            return [...currentTodos, {number: number + 1, ...createdTodo}]
        })

        setShowAddForm(false);
    }

    return (
        <>
            <div className='mt-5 container'>
                <div className='card'>
                    <div className='card-header'>Your Todo's</div>
                    <div className='card-body'>
                        <TodoTable removeTodo={removeTodo} todos={todos}></TodoTable>
                        <button className="btn btn-primary" onClick={newTodo}>{showAddForm ? 'Close New Todo' : 'New Todo'}</button>
                        {showAddForm && <NewTodoForm addTodo={createTodo}></NewTodoForm>}

                    </div>
                </div>

            </div>
        </>
    )
}

export default App
