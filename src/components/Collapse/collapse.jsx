import React, { useState, useRef, useEffect } from "react";
import Arrow from "../../assets/arrowDown.png"
import "../Collapse/Collapse.css"

export default function Collapse({ props, title }) {
    const [toggle, setToggle] = useState(false); // state du toggle et par défaut = false
    const [heightEl, setHeightEl] = useState(); //state qui défini la hauter de mon Collapse

    const toggleState = () => {
        setToggle(!toggle);
    };
    //je récupère ici la valeur de hauteur de mon collpase déplié
    const refHeight = useRef(); 

    //défini la hauteur du collapse à sa première ouverture et la conserve
    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`);
    }, []);

    const display = () => {
        if (typeof props === "object") {
            return (
                //j'itère mon tableau props et pour chaque élément, et je retourne un <li> pour chaque élément
                <ul>
                    {props.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            );
        } else {
            return <p>{props}</p>;
        }
    };

    return (
        //j'affiche mon collpase plié par défaut, il s'ouvre au clic et se ferme et fais disparaitre les informations qu'il contient
        <div className="collapse">
            <div onClick={toggleState} className="collapse_bar">
                <h3>{title}</h3>
                <img
					className={toggle ? "arrow rotate" : "arrow"}
					src={Arrow}
					alt="arrow"
				/>
            </div>

            <div ref={refHeight} className={toggle ? "collapse_deploy animated" : "collapse_deploy"} style={{ height: toggle ? `${heightEl}` : "0px" }}>
                {display()}
            </div>
        </div>
    );
}