import React, { useState, useEffect } from 'react'
import '../MoodsPage/style.css';
import { Link } from 'react-router-dom';
<<<<<<< HEAD:client/src/components/MoodsPage.js
import API from '../utils/API';
// import DrinksData from "../../seeders/drinkseed";
// import SongData from "../../seeders/songseed";
=======
import API from '../../utils/API';
import { SongsCard } from '../SongsCard/SongsCard.js';

>>>>>>> main:client/src/components/MoodsPage/index.js

import { Button } from '../Button';

function Moods({ type }) {
    const [drinks, setDrinks] = useState([]);
    const [songs, setSongs] = useState([]);

    useEffect(() => {
       

        getDrinks()
        getSongs()
    }, [])
     
    function getDrinks() {
        API.getDrinks(type)
            .then(res =>
                setDrinks(res.data)
            )
            .catch(err => console.log(err));
    };

    function getSongs() {
        API.getSongs(type)
            .then(res =>
                setSongs(res.data)
            )
            .catch(err => console.log(err));
    };


    return (
        <section className="grid grid-cols-1 gap-8 mood-card">
            <article className="relative rounded-lg shadow-xl p-20">
                <h3 className="text-white text-10xl mb-3">
                </h3>
                <div>
                    <h1>Playlist{type}</h1>
                    {songs.map(songs => {
                        return (
                            <ul>
                                <li songs>
                                </li>
                            </ul>
                        )
                    })}
                    <SongsCard />
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
                <Link to='/dashboard' className="back-btn">
                    <Button className="btns" buttonStyle="back--btn" buttonSize="btn--large">Go Back</Button>
                </Link>
                <Button className="btns" buttonStyle="favorite--btn" buttonSize="btn--large">Add to Favorites</Button>
            </div>
        </section>

    )
}

export default Moods
