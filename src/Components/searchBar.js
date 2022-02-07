import React, {useState} from "react";
import "./searchBar.css";

import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';


const SearchBar = ({ placeholder, data }) => {

    const [filteredData, setFilteredData] = useState([])
    const [searchInput, setSearchInput] = useState("")

    const handleFilter = (e) => {
        setSearchInput(e.target.value)
        const newFilter = data.filter((value) => {
            return value.fullName.toLowerCase().includes(searchInput.toLowerCase())
        })

        if(searchInput === "") {
            setFilteredData([])
        } else {
        setFilteredData(newFilter)
    }
    }

    const clearInput = (params) => {
        setFilteredData([])
        setSearchInput("")
    }

    return (
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder={placeholder} value={searchInput} onChange={handleFilter} />
                <div className="searchIcon">
                {filteredData.length !== 0 ? <CloseIcon id="clearBtn" onClick={clearInput} /> : <SearchIcon />}
                </div>
            </div>
            {filteredData.length !== 0 && (<div className="dataResult">

{filteredData.slice(0, 15).map( element => (<a className="dataItem" href="#"><p>{element.fullName}</p></a>)
    
)}

            </div>)}
        </div>
    );
};

export default SearchBar;
