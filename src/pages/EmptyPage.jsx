import { Link } from 'react-router-dom';
import { FaBasketShopping } from "react-icons/fa6";
import styles from "../styles/EmptyPage.module.css";

const EmptyPage = () => {
    return (
        <div className= {styles.container}>
            <div className= {styles.empty}>
                <p> Your shopping cart is empty, if you want you can go to the products page and buy what you want.</p>
                <Link to= "/products">
                    Buy Now
                    <FaBasketShopping />
                </Link>
            </div>
        </div>
    );
};

export default EmptyPage;