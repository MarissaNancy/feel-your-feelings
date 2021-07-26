import React, { useState, useEffect } from 'react'
import '../MoodsPage/style.css';
import { Link } from 'react-router-dom';
import API from '../../utils/API';



import { Button } from '../Button';

function Moods({ type }) {
    const [drinks, setDrinks] = useState([]);
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        function getDrinks() {
            API.getDrinks()
                .then(res =>
                    setDrinks(res.data)
                )
                .catch(err => console.log(err));
        };

        function getSongs() {
            API.getSongs()
                .then(res =>
                    setSongs(res.data)
                )
                .catch(err => console.log(err));
        };

    }, [])


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
                </div>
            </article>
            <article className="relative rounded-lg shadow-xl p-20">
                <h3 className="text-white text-10xl mb-3">
                </h3>
                <div>
                    <h1>Drinks{type}</h1>
                    {drinks(drinks => {
                        return (
                            <ul>
                                <li drinks>
                                </li>
                            </ul>
                        )
                    })}
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