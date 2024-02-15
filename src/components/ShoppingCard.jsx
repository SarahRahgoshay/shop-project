import { shortenText } from "../helpers/helper";
import { BsTrash } from "react-icons/bs";
import styles from "../styles/ShoppingCard.module.css"

const ShoppingCard = ({data , clickHandler}) => {

    const { image , title , quantity , price} = data;

    return (
        <div className= {styles.card}>
            <img src={image} alt={title} />
            <p> {shortenText(title)} </p>
            <p> {price} $ </p>
            <div className={styles.actions}>
                {quantity == 1 && (<button onClick={() => clickHandler("REMOVE_ITEM" , data)}> <BsTrash /> </button>)}
                {quantity > 1 && (<button onClick={() => clickHandler("DECREASE" , data)}> - </button>)}
                <span> { quantity }</span>
                <button onClick={() => clickHandler("INCREASE" , data)}> + </button>
            </div>
        </div>
    );
};

export default ShoppingCard;