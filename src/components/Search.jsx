import { FcSearch } from "react-icons/fc";
import { createQueryObject } from "../helpers/helper";

const Search = ({search , setSearch , setQuery}) => {
   
    const searchHandler = () => {
        setQuery((query) => createQueryObject(query , {search}))
    }

    return (
        <div>
            <input type="text" name="search" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}/>
            <button onClick={searchHandler}>
                <FcSearch />
            </button>
        </div>
    );
};

export default Search;