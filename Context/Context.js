import { createContext, useState } from "react";

export const ImageContext = createContext(null);

const Context = (props) => {
    const [images, setImages] = useState([]);
    return (
        <ImageContext.Provider value={[images, setImages]}>
            {props.children}
        </ImageContext.Provider>
    );
};

export default Context;
