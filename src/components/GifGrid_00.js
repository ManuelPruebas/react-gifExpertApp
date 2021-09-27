import React, { useState, useEffect } from 'react'

export const GifGrid = ( { category } ) => {

    const [count, setCount] = useState(0);

    useEffect ( () => {
        getGifs();  

    }, [])  // El array vacío ([], lista de dependencias), impide que se ejecute el contenido más de una vez. 
            // Equivalente a componentdidmount, hace que el contenido se ejecute sólo cuando el componente se carga por primera vez

    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Frog&limit=10&api_key=fdgfBD4zcdcITZfoFaRdUOpU2D0HwNZj';
        const resp = await fetch(url);
        const {data}= await resp.json();

        const gifs = data.map( img =>{
            return{
                img : img.id,
                title: img.title,
                url: img.images?.downsized_medium.url 
            }
        })
        console.log(gifs);
    }

    return (
        <div>
            <h3> { category } </h3>
            <h3> { count } </h3>
            <button onClick={ ()=> setCount( count + 1 ) }> + </button>
        </div>
    )
}
