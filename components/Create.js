import { useState, useRef } from "react";
import { nanoid } from "nanoid";

const Create = (props) => {
    const { tasks, setTasks } = props;
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [isError, setIsError] = useState(false);
    const titleName = useRef(null);

    const validateTitle = (e) => {
        if (titleName.current.value.length === 0) {
            setIsError(false);
            setTitle(e.target.value);
            return;
        }

        //
        if (titleName.current.value.length > 4) {
            setIsError(false);
        } else {
            setIsError(true);
        }
        setTitle(e.target.value);
    };

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
                onChange={validateTitle}
                value={title}
                ref={titleName}
            />
            <small className="text-danger">
                {isError && "Title not valid"}
            </small>
            <input
                className="form-control my-3"
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
