import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FiShoppingCart } from "react-icons/fi";
import styles from "../styles/Layout.module.css"


const Layout = ({children}) => {
    const [state] = useCart()
    return (
        <>
            <header className={styles.header}>
                    <Link to= '/products'> SarooShop </Link>
                    <Link to= "/checkout">
                        <div>
                            <FiShoppingCart />
                            { !!state.itemsCounter && <span> {state.itemsCounter} </span>}
                        </div>
                    </Link>
            </header>
                {children}
            <footer className={styles.footer}>
                <p>Development By Sarah Rahgoshay</p>
            </footer>
        </>
    );
};

export default Layout;