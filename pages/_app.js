import Context from "@/Context/Context";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {
    return (
        <Context>
            <Component {...pageProps} />
        </Context>
    );
}
