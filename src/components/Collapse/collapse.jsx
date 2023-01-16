import React, { useState, useRef, useEffect } from "react";
import Arrow from "../../assets/arrowDown.png"
import "../Collapse/Collapse.css"

export default function Collapse({ props, title }) {
    const [toggle, setToggle] = useState(false);
    const [heightEl, setHeightEl] = useState();

    const toggleState = () => {
        setToggle(!toggle);
    };

    const refHeight = useRef();

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`);
    }, []);

    const display = () => {
        if (typeof props === "object") {
            return (
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
        <div className="collapse">
            <div onClick={toggleState} className="collapse_bar">
                <h3>{title}</h3>
                <img
					className={toggle ? "arrow rotate" : "arrow"}
					src={Arrow}
					alt="arrow"
				/>
            </div>

            <div
                ref={refHeight}
                className={
                    toggle ? "collapse_deploy animated" : "collapse_deploy"
                }
                style={{ height: toggle ? `${heightEl}` : "0px" }}
            >
                {display()}
            </div>
        </div>
    );
}