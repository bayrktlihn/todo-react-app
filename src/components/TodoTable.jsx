import TodoRowItem from "./TodoRowItem.jsx";

function TodoTable({todos, removeTodo}) {
    return (
        <>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Assigned</th>
                </tr>
                </thead>
                <tbody>
                {todos.map((item, index) => <TodoRowItem removeTodo={removeTodo}  {...item}
                                                         key={item.number}></TodoRowItem>)}
                </tbody>
            </table>
        </>
    )
}

export default TodoTable;