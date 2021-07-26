import React from 'react';
import '../../App.css';
import MoodsPage from '../MoodsPage/index';
import { Link, useParams } from "react-router-dom";

function Moods() {
    const {type} = useParams()
    console.log(type)
    return (<MoodsPage type={type} />)
}

export default Moods
