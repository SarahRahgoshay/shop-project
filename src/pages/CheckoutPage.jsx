import ShoppingCard from "../components/ShoppingCard";
import { useCart } from "../context/CartContext";

const CheckoutPage = () => {

    const [state , dispatch] = useCart();

    const clickHandler = (type , payload) => {
        dispatch({type , payload})
    }

    return (
        <div>
            <div>
                {state.selectedItems.map((item) => (
                    <ShoppingCard  key= {item.id} data= {item} clickHandler={clickHandler} />
                ))}
            </div>
        </div>
    );
};

export default CheckoutPage;