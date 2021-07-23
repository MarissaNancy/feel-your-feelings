import React, { useState, useEffect } from 'react'
import './MoodsPage.css';
import API from '../utils/API';



import { Button } from './Button';

function Moods({type}) {
    const [drinks, setDrinks] = useState([]);
    const [songs, setSongs] = useState([]);

    // useEffect (() => {
    //     api.getSongs
    //     api.getDrinks



    // },[])


    return (
        <section className="grid grid-cols-1 gap-8 mood-card">
                <article className="relative rounded-lg shadow-xl p-20">
                    <h3 className="text-white text-10xl mb-3">
                    </h3>
                    <div>
                        <h1>Playlist{type}</h1>
                    </div>
                </article>
                <article className="relative rounded-lg shadow-xl p-20">
                    <h3 className="text-white text-10xl mb-3">
                    </h3>
                    <div>
                        <h1>Drinks{type}</h1>
                    </div>
                </article>
                <div className="favorite-btn">
                <Button className="btns" buttonStyle="favorite--btn" buttonSize="btn--large">Add to Favorites</Button>
                </div>      
            </section>
            
    )
}

export default Moods
