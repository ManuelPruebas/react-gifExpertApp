import React, { Fragment, useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const App = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon ball'];

    const [categories, setCategories] = useState(['One Punch']);

    /* const handleAdd = () => {
        // setCategories([...categories,'Lucky Luke']); // -operador spread

        setCategories( cats => [...cats,'Lucky Luke']); // -- con un callback añadido
    } */

    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <hr />
            <AddCategory setCategories = {setCategories}/>
            {/* <button onClick={handleAdd}>Agregar</button> */}
            
                {
                    categories.map(category =>
                        <GifGrid 
                            key = {category}
                            category={ category} 
                        />
                    )
                }
            
        </Fragment>
    )
}

export default App;