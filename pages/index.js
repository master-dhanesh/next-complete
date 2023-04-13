import React, { useState } from "react";
import { nanoid } from "nanoid";
const index = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const [tasks, setTasks] = useState([]);

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

    const DeleteHandler = (id) => {
        const ft = tasks.filter((t) => t.id !== id);
        setTasks(ft);
    };

    let rendertasks = <h1 className="text-center fw-light fs-1">Loading...</h1>;

    if (tasks.length > 0) {
        rendertasks = tasks.map((t) => (
            <li
                key={t.id}
                className="d-flex justify-content-between list-group-item"
            >
                <span>{t.title}</span>
                <span onClick={() => DeleteHandler(t.id)}>❌</span>
            </li>
        ));
    }

    return (
        <div className="container mt-5 p-5 bg-light">
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
            <hr />
            <ul className=" w-50 list-group">{rendertasks}</ul>
        </div>
    );
};

export default index;
