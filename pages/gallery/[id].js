import { ImageContext } from "@/Context/Context";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

const galleryId = () => {
    const [images, setImages] = useContext(ImageContext);

    const router = useRouter();
    const { id } = router.query;
    const [image, setImage] = useState([]);

    const GetImage = async () => {
        const json = images.filter((i) => i.id === id)[0];
        setImage(json);
    };

    useEffect(() => {
        GetImage();
    }, []);

    return image ? (
        <div className="card" style={{ width: "18rem" }}>
            <img
                className="card-img-top"
                src={image.download_url}
                alt="Card image cap"
            />
            <div className="card-body">
                <h5 className="card-title">{image.author}</h5>
                <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </p>
                <button
                    onClick={() => router.back()}
                    className="btn btn-primary"
                >
                    Go Back
                </button>
            </div>
        </div>
    ) : (
        "loading..."
    );
};

export default galleryId;
