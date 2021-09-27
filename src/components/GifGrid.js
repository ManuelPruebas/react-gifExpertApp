import React, { Fragment } from 'react';
import { useFecthGifs } from '../hooks/useFecthGifs';
import { GifGridItem } from './GifGridItem';

// --- EN ESTA VERSIÓN DE GIFGRID ESTOY USANDO MI PROPIO HOOK useFecthGifs EN VEZ DEL USEEFFECT Y USESTATE DE LA ANTERIOR

export const GifGrid = ({ category }) => {

    const {data:images, loading} = useFecthGifs( category );

    return (
        <Fragment>

            <h3> {category} </h3>

            {loading && <p>Loading</p>}

            <div className="card-grid">

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
