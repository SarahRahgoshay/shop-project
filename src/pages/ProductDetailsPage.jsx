import { Link, useParams } from "react-router-dom";
import { useProductDetails } from "../context/ProductContext";
import Loader from "../components/Loader";
import { GiPriceTag } from "react-icons/gi";
import { SiOpenproject } from "react-icons/si";
import { MdArrowBack } from "react-icons/md";
import styles from "../styles/ProductDetailsPage.module.css"

const ProductDetailsPage = () => {
    const {id} = useParams();

    const productDetails = useProductDetails(+id)

    if (!productDetails) return <Loader />

    const {image , title , description , price , category} = productDetails;


    return (
        <div className= {styles.container}>
            <img src= {image} alt= {title} />
            <div className= {styles.information}>
                <h3 className= {styles.title}> {title} </h3>
                <p className= {styles.description}> {description} </p>
                <p className= {styles.category}> 
                    <SiOpenproject />
                    {category} 
                </p>
                <div>
                    <span className= {styles.price}> 
                        <GiPriceTag />
                        {price} $ 
                    </span>
                    <Link to="/products"> 
                        <MdArrowBack />
                        Back to Shop
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;