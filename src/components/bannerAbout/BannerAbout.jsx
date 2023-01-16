import Bannerabout from "../../assets/aboutBannerImg.png";
import CoverAbout from "../../assets/aboutCoverBanner.png";
import "../Banner/Banner.css"

export default function Banner () {
    return (
        <div
          className="banner">
          <img className="bannerImg posBan" src={Bannerabout} alt="logo kasa" />
          <img className="bannerbg posBan" src={CoverAbout} alt="logo kasa" />
        </div>
      );
    }