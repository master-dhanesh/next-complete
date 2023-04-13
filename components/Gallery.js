import React, { useEffect, useState } from "react";
const Gallery = () => {
    const [images, setImages] = useState([]);
    const [username, setUsername] = useState("John");
    const [password, setPassword] = useState("123456");

    const GetImages = async () => {
        const strimages = await fetch(
            `https://picsum.photos/v2/list?page=2&limit=10`
        );
        const json = await strimages.json();
        setImages(json);
    };

    useEffect(() => {
        console.log("Gallery Component Created");
        return () => {
            console.log("Gallery Component Destroyed");
        };
    }, [password]);

    return (
        <ul className="list-group">
            <button onClick={GetImages}>Get Images</button>
            {images.length > 0
                ? images.map((i) => (
                      <li key={i.id} className="list-group-item">
                          <img src={i.download_url} height={100} />
                          <span className="ms-3">{i.author}</span>
                      </li>
                  ))
                : "Loading..."}
            <hr />
            <h2>Username {username}</h2>
            <button onClick={() => setUsername("Joh Wik")}>
                Change Username
            </button>
            <h2>Password {password}</h2>
            <button onClick={() => setPassword("Hellowww")}>
                Change Password
            </button>
        </ul>
    );
};

export default Gallery;
