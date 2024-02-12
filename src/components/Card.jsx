import styles from "../styles/Card.module.css"
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { IoBagAddOutline } from "react-icons/io5";
import { BsTrash } from "react-icons/bs";
import { productQuantity, shortenText } from "../helpers/helper";
import { useCart } from "../context/CartContext";

const Card = ({data}) => {
    
    const {id , title, price , image} = data;

    const [state , dispatch]  = useCart();

    const quantity = productQuantity(state , id)

    const clickHandler = (type) => {
        dispatch({type , payload: data})
    }


    return (
        <div className={styles.card}>
            <img src={image} alt={title} />
            <h3> {shortenText(title)} </h3>
            <p> {price} $</p>
            <div className={styles.icons}>
                <Link to={`/products/${id}`}> 
                    <TbListDetails /> 
                </Link>
                <div>
                    {quantity == 1 &&
                        <button onClick={() => clickHandler("REMOVE_ITEM")}>
                            <BsTrash />
                        </button>
                    }

                    {quantity > 1 &&
                        <button onClick={() => clickHandler("DECREASE")}>
                            -
                        </button>
                    }
                  
                    {!!quantity && <span> {quantity} </span>}

                    {quantity == 0 ?  
                        <button onClick={() => clickHandler("ADD_ITEM")}>
                            <IoBagAddOutline />
                        </button>
                        :
                        <button onClick={() => clickHandler("INCREASE")}>
                             +
                        </button>
                    }


                </div>
            </div>
        </div>
    );
};

export default Card;