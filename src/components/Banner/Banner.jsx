import bannerImg from "../../assets/banner-image.png";
import backImg from "../../assets/Background-Banner.png";
import "../Banner/Banner.css"

export default function Banner () {
    return (
        <div
          className="banner">
          <img className="bannerImg posBan" src={bannerImg} alt="logo kasa" />
          <img className="bannerbg posBan" src={backImg} alt="logo kasa" />
          <div className="banner-text posBan">
            <p className="text1">Chez vous,</p> 
            <p className="text2">partout et ailleurs</p>
          </div>
        </div>
      );
    }