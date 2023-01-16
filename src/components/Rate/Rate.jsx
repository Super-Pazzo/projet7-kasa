import React from "react";
import Star from "../../assets/star.png";
import StarEmpty from "../../assets/starEmpty.png";
import "../Rate/Rate.css"

export default function Rate ({Rates}) {
    const stars = [1, 2, 3, 4, 5];
    return (
		<div className="rateCont">
			{stars.map((score) =>
				Rates >= score ? (
					<img key={score.toString()} className="star" src={Star} alt="rating star" />
				) : ( //selon le score, l'étoile est pleine ou vide
					<img key={score.toString()} className="star" src={StarEmpty} alt="rating star" />
				)
			)}
		</div>
	);
}