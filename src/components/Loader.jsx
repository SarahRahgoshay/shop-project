import { RotatingLines } from "react-loader-spinner";
import styles from "../styles/Loader.module.css";

const Loader = () => {
    return (
        <div className={styles.loader}>
            <RotatingLines width="200px" height="200px" strokeColor="#fe5d42" strokeWidth="2" />
        </div>
    );
};

export default Loader;520000000000000