import React, { useState } from 'react';
//import PropTypes from 'prop-types';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertapp = () => {

    //hook para las categorías
    const [ categories, setCategories ] = useState(['One punch']);

    return (
        <>
        <h2>GifExpertapp</h2>
        <AddCategory setCategories={ setCategories }/>
        <hr/>
        
        <ol>
            {
                categories.map( category => (
                    <GifGrid
                        key={ category }  
                        category={ category }
                    />
                ))
            }
        </ol>
        </>
    )
}

GifExpertapp.propTypes = {

}

export default GifExpertapp
