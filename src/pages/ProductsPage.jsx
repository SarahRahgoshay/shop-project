import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProductContext";
import { filterProducts, getQuery, searchProducts } from "../helpers/helper";
import styles from "../styles/ProductsPage.module.css";
import Search from "../components/Search";
import SideBar from "../components/SideBar";



const ProductsPage = () => {

    const products = useProducts();
    
    const [displayed , setDisplayed] = useState([])
    const [search , setSearch] = useState("");
    const [query , setQuery] = useState({});

    const [searchParams , setSearchParams] = useSearchParams();
   

    useEffect (() => {
        setDisplayed(products);
        setQuery(getQuery(searchParams))
    }, [products])

    useEffect(() => {
        setSearchParams(query);
        setSearch(query.search || "")
        let finalProducts = searchProducts(products , query.search);
        finalProducts = filterProducts(finalProducts , query.category)
        setDisplayed(finalProducts);
    }, [query])

    return (
        <>
            <Search search={search} setSearch={setSearch} setQuery={setQuery} />
            <div className={styles.container}>
                <div className={styles.products}> 
                {!displayed.length && <Loader /> }
                    {displayed.map((product) => (
                        <Card key={product.id} data={product} />
                        ))}
                </div>
            <SideBar setQuery={setQuery} />
            </div>
        </>
    );
};

export default ProductsPage;