import Gallery from "@/components/Gallery";
import React, { useState } from "react";

const index = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="container mt-5 p-5 bg-light">
            <button onClick={() => setShow(!show)} className="btn btn-dark">
                {show ? "Hide" : "Show"}
            </button>
            <hr />
            {show && <Gallery />}
        </div>
    );
};

export default index;
