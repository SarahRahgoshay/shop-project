import { FcSearch } from "react-icons/fc";
import { createQueryObject } from "../helpers/helper";
import styles from "../styles/Search.module.css"

const Search = ({search , setSearch , setQuery}) => {
   
    const searchHandler = () => {
        setQuery((query) => createQueryObject(query , {search}))
    }

    return (
        <div className={styles.search}>
            <input type="text" name="search" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}/>
            <button onClick={searchHandler}>
                <FcSearch />
            </button>
        </div>
    );
};

export default Search;