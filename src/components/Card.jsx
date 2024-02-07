import styles from "../styles/Card.module.css"
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { IoBagAddOutline } from "react-icons/io5";
import { shortenText } from "../helpers/helper";

const Card = ({data}) => {
    
    const {id , title, price , image} = data;

    return (
        <div className={styles.card}>
            <img src={image} alt={title} />
            <h3> {shortenText(title)} </h3>
            <p> {price} </p>
            <div className={styles.icons}>
                <Link to={`/products/${id}`}> 
                    <TbListDetails /> 
                </Link>
                <div>
                    <button>
                        <IoBagAddOutline />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;