import {useState} from "react";

function NewTodoForm({addTodo}) {

    let [assigned, setAssigned] = useState("");
    let [description, setDescription] = useState("");


    function addClick() {
        addTodo({assigned, description});
        setDescription("");
        setAssigned("");
    }

    return (
        <>
            <div className="mt-5">
                <form>
                    <div className="mb-3">
                        <label className="form-label">Assigned</label>
                        <input value={assigned} onChange={(evnt) => setAssigned(evnt.target.value)} type="text"
                               className="form-control"
                               required/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea value={description} onChange={(evnt) => setDescription(evnt.target.value)} type="text"
                                  className="form-control" rows={3} required/>
                    </div>
                    <button onClick={() => addClick()} type="button"
                            className="btn btn-primary mt-3">Add Todo
                    </button>
                </form>
            </div>
        </>
    )
}

export default NewTodoForm;