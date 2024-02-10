import { IoList } from "react-icons/io5";
import { createQueryObject } from "../helpers/helper";
import { categories } from "../constances/list";
import styles from "../styles/SideBar.module.css"

const SideBar = ({query , setQuery}) => {

    const categoryHandler = (e) => {
        const {tagName} = e.target;
        const category = e.target.innerText.toLowerCase();      

        if (tagName !== "LI") return;
        
        setQuery((query) => createQueryObject(query , {category}))
    }

    return (
        <div className={styles.sidebar}>
            <div>
                <IoList />
                <p>Categories</p>
            </div>
            <ul onClick={categoryHandler}>
                {categories.map((item) => (
                    <li key={item.id} className={item.type.toLowerCase() == query.category ? styles.selected : null}> {item.type} </li>
                ))}
            </ul>
        </div>
    );
};

export default SideBar;