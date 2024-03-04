function TodoRowItem({number, description, assigned, removeTodo}) {
    return (
        <>
            <tr onClick={() => removeTodo(number)}>
                <th scope='row'>{number}</th>
                <td>{description}</td>
                <td>{assigned}</td>
            </tr>
        </>
    )
}

export default TodoRowItem;