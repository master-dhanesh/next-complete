import React, { useState } from "react";
import Create from "@/components/Create";
import Show from "@/components/Show";
const index = () => {
    const [tasks, setTasks] = useState([]);

    return (
        <div className="container mt-5 p-5 bg-light">
            <Create tasks={tasks} setTasks={setTasks} />
            <hr />
            <Show tasks={tasks} setTasks={setTasks} />
        </div>
    );
};

export default index;
