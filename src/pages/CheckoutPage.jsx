import CartSidebar from "../components/CartSidebar";
import ShoppingCard from "../components/ShoppingCard";
import { useCart } from "../context/CartContext";
import EmptyPage from "./EmptyPage";
import styles from "../styles/CheckoutPage.module.css"

const CheckoutPage = () => {

    const [state , dispatch] = useCart();

    const clickHandler = (type , payload) => {
        dispatch({type , payload})
    }
    
    if(!state.itemsCounter) {
        return <EmptyPage />
    }
    
    return (
        <div className= {styles.container}>
            <CartSidebar state={state} clickHandler={clickHandler} />
            <div className= {styles.products}>
                {state.selectedItems.map((item) => (
                    <ShoppingCard  key= {item.id} data= {item} clickHandler={clickHandler} />
                ))}
            </div>
        </div>
    );
};

export default CheckoutPage;