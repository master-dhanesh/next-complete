import React from "react";

const Show = (props) => {
    const { tasks, setTasks } = props;

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

    return <ul className=" w-50 list-group">{rendertasks}</ul>;
};

export default Show;
