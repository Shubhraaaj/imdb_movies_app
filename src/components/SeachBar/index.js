import * as React from 'react';
import PropTypes from 'prop-types';

SearchBar.propTypes = {
    searchTerm: PropTypes.string
};

export default function SearchBar( { searchTerm } ){
    return(
        <div>
            <input 
                id="search" 
                type="text" 
                placeholder="Search by title..." 
                style={{ 
                    width: "80%", 
                    padding: 12, 
                    borderRadius: 18, 
                    border :"solid #a6a6a6 2px", 
                    margin: "0 8%" }} 
                onChange={(e)=>{
                    searchTerm(e.target.value);
                }}
                />
        </div>
    );
}