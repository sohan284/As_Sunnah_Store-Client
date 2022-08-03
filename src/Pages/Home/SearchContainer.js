import React from 'react';
import Products from './Products/Products';

const SearchContainer = ({value}) => {
    console.log(value);
    return (
        <div>
            <Products></Products>
        </div>
    );
};

export default SearchContainer;