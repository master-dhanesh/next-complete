import { useState } from "react";
import { nanoid } from "nanoid";

const Create = (props) => {
    const { tasks, setTasks } = props;
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const SubmitHandler = (e) => {
        e.preventDefault();
        const task = {
            id: nanoid(),
            title,
            desc,
        };
        // let ct = [...tasks];
        // ct.push(task);
        // setTasks(ct);
        setTasks([...tasks, task]);
        setTitle("");
        setDesc("");
    };
    return (
        <form onSubmit={SubmitHandler} className="w-50">
            <input
                className="form-control mb-3"
                placeholder="Title"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <input
                className="form-control mb-3"
                placeholder="Description"
                type="text"
                onChange={(e) => setDesc(e.target.value)}
                value={desc}
            />
            <button className="btn btn-dark">Create Task</button>
        </form>
    );
};

export default Create;
