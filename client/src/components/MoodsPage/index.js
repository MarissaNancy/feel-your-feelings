import React, { useState, useEffect } from 'react'
import '../MoodsPage/style.css';
import { Link } from 'react-router-dom';
import API from '../../utils/API';
import { SongsCard } from '../SongsCard/SongsCard.js';


import { Button } from '../Button';

function Moods({ type }) {
    const [drinks, setDrinks] = useState([]);
    const [songs, setSongs] = useState([]);

    useEffect(() => {
       type=type[0].toUpperCase()+type.slice(1)

        getDrinks()
        getSongs()
    }, [])
     
    useEffect(() => {
       

        console.log(drinks);
        console.log(songs);
    }, [drinks, songs])

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
                <div className="card-contents">
                    <h1>Playlist {type}</h1>
                    {/* {songs.map(song => {
                        return (
                            <ul>
                                <li >
                                    {song.name}
                                </li>
                            </ul>
                        )
                    })} */}
                    <SongsCard type={type}/>
                </div>
            </article>
            <article className="relative rounded-lg shadow-xl p-20">
                <h3 className="text-white text-10xl mb-3">
                </h3>
                <div className='drink-card'>
                    <h1>Drinks {type}</h1>
                    {drinks.map(drink => {
                        return (
                            <ul>
                                <li >
                                Drink name: {drink.name}
                                </li>
                                <li >
                                Contains Alcohol: {drink.alcoholictype}
                                </li>
                                <li> 
                                <img src={drink.img} />
                                </li>
                                <a href={drink.url}><span>URL to buy</span></a>
                                <br/>
                                <li >
                                Ingridients: {drink.ingridients}
                                </li>
                                <li >
                                How to make: {drink.instructions}
                                </li>
                                <br></br>
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
