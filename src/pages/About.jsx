import React from "react";
import Collapse from "../components/Collapse/collapse";
import Data from "../data/about";
import "../style/pages/about.css"
import BannerAbout from "../components/bannerAbout/BannerAbout"

export default function About() {
    document.title = "Kasa - A propos";
    return (
        <main className="about-dis">
          <BannerAbout />
            <div className="collapses-dis">
                {Data.map((props, index) => (
                    <div className="collapses" key={index}>
                        <Collapse
                            key={index}
                            props={Data[index].text}
                            title={Data[index].title}
                        />
                    </div>
                ))}
            </div>
        </main>
    );
}