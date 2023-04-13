import React, { useEffect, useState } from "react";
const Gallery = () => {
    const [images, setImages] = useState([]);
    const [pagecount, setpagecount] = useState(1);
    const GetImages = async () => {
        const strimages = await fetch(
            `https://picsum.photos/v2/list?page=${pagecount}&limit=10`
        );
        const json = await strimages.json();
        setImages(json);
    };

    useEffect(() => {
        GetImages();
    }, [pagecount]);

    return (
        <>
            <ul className="list-group">
                {images.length > 0
                    ? images.map((i) => (
                          <li key={i.id} className="list-group-item">
                              <img src={i.download_url} height={100} />
                              <span className="ms-3">{i.author}</span>
                          </li>
                      ))
                    : "Loading..."}
            </ul>
            <div className="mt-5 text-center">
                <button
                    onClick={() => setpagecount(pagecount - 1)}
                    className="btn btn-dark"
                >
                    Prev
                </button>
                &nbsp;
                <button
                    onClick={() => setpagecount(pagecount + 1)}
                    className="btn btn-dark"
                >
                    Next
                </button>
            </div>
        </>
    );
};

export default Gallery;
