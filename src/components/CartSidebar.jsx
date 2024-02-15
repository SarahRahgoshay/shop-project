import { BsCurrencyDollar } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";
import { BsPatchCheck } from "react-icons/bs";
import styles from "../styles/CartSidebar.module.css"


const CartSidebar = ({state , clickHandler}) => {
    return (
        <div className= {styles.sidebar}>
            <div>
                <BsCurrencyDollar />
                <p>total:</p>
                <span> {state.total} $ </span> 
            </div>
            <div>           
                <FaHashtag />
                <p>quantity:</p>
                <span> {state.itemsCounter} </span>
            </div>
            <div>    
                <BsPatchCheck />
                <p> status:</p>
                <span> {!state.checkout && "Pending..."} </span>
            </div>

            <button onClick={() => clickHandler("CHECKOUT")}> Checkout </button>
        </div>
    );
};

export default CartSidebar;