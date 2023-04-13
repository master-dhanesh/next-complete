import { useState } from "react";

const index = () => {
    const [a, setA] = useState(45);
    const changea = () => {
        setA(23);
    };
    return (
        <div className="container mt-5 p-5 bg-light">
            {a}
            <button onClick={changea}>Change</button>
        </div>
    );
};

export default index;
