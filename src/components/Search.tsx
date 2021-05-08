import { BiSearch, BiCaretDown } from "react-icons/bi";
import { useState } from "react";
import DropDown from "./DropDown";
interface SearchProps {
    query: string,
    sortBy: string,
    orderBy: string,
    onSortByChange: (mySort:string) => void,
    onOrderByChange: (mySort:string) => void,
    onQueryChange: (mySort:string) => void,
}

const Search = ({ query, onQueryChange, sortBy, onSortByChange, orderBy, onOrderByChange }:SearchProps) => {
    let [toggleSort, setToggleSort] = useState(false);
    return (
        <div className="py-5">
            <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <BiSearch />
                    <label htmlFor="query" className="sr-only" />
                </div>
                <input type="text" name="query" id="query" value={query} maxLength={50}
                    autoComplete="off"
                    onChange={(event) => { onQueryChange(event.target.value) }}
                    className="pl-8 py-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm  border-gray-300" placeholder="Search" />
                <div className="absolute inset-y-0 right-0 flex items-center">
                    <div>
                        <button type="button" onClick={() => setToggleSort(!toggleSort)}
                            className="justify-center px-4 py-2 bg-sku-darker border-2 border-sku-dark text-sm text-sku-light hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center" id="options-menu" aria-haspopup="true" aria-expanded="true">
                            Sort By <BiCaretDown className="ml-2" />
                        </button>
                        <DropDown toggle={toggleSort}
                            sortBy={sortBy}
                            onSortByChange={mySort => onSortByChange(mySort)}
                            orderBy={orderBy}
                            onOrderByChange={mySort => onOrderByChange(mySort)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;