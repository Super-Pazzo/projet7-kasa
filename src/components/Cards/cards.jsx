import React from "react";
import { Link } from "react-router-dom";
import cardCover from "../../assets/cards-cover.png";
import "../Cards/Cards.css"

export default function Card ({ house }) {
    return (
        <div className="cards-cont">
            <Link to={`/Logement/${house.id}`}>
                <div className="cards-img">              
                    <img className="card-cover form" src={cardCover} alt=""/>               
                    <img className="card-img form" src={house.cover} alt="" />
                </div>  
                <p className="logement-title">{house.title}</p>
            </Link>
        </div>
    )
}
