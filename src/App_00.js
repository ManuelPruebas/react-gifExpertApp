import React, { Fragment, useState } from 'react';
import { AddCategory } from './components/AddCategory';

const App = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon ball'];

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon ball']);

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
            <ol>
                {
                    categories.map(category =>
                        <li key={category}>{category}</li>
                    )
                }
            </ol>
        </Fragment>
    )
}

export default App;