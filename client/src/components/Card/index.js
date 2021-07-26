import React from 'react'
import "./style.css";
import { Button } from '../Button';

function Card() {
    return (
            <section className="grid grid-cols-1 gap-8 favorite-card">
                <article className="relative rounded-lg shadow-xl p-20">
                    <h3 className="text-white text-10xl mb-3">
                    </h3>
                    <div>
                        <h1>Card Playlist</h1>
                        <h1>Card Drinks</h1>
                        <h1>Card Food</h1>
                        <Button className="btns" buttonStyle="remove--btn" buttonSize="btn--large">Remove</Button>
                    </div>
                </article>
            </section>
            
    )
}
export default Card
