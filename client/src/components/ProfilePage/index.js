import React, { useState } from "react";
import "./style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Card from "../Card";
import { Button } from '../Button';


function ProfilePage() {

    return (
        <div className="user-favorites">
            <h1>User Profile</h1>
            <h2>Saved Combos</h2>
            <Card />
        </div>



    )
}

export default ProfilePage
