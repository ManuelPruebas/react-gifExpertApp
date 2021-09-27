import React, { useState, useEffect, Fragment } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs( category )
            .then( setImages); 
            // .then( imgs => setImages( imgs)); ---------- SON EQUIVALENTES, REMEMBER

    //}, [])  // El array vacío ([], lista de dependencias), impide que se ejecute el contenido más de una vez. 
    // Equivalente a componentdidmount, hace que el contenido se ejecute sólo cuando el componente se carga por primera vez
    }, [ category ])  // --- le meto la categoría como control: esto hace que, si cambia la categoría, se ejecute el contenido
   

    return (
        <Fragment>
            <h3> {category} </h3>
            <div className="card-grid">

                {/* <ol> 
                { 
                images.map( ({id, title }) =>   // Desestructurado: saco directamente los campos id y title de cada subarray
                    <li key = {id}>
                        {title} 
                    </li>
                )
                }
            
            </ol> */}
                {
                    images.map((img) =>
                        <GifGridItem
                            key={img.id}
                            {...img}  // operador spread otra vez
                        />
                    )
                }

            </div>
       </Fragment>
    )
}
