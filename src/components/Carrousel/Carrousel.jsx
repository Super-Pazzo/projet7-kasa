import React, { useState } from "react";
import leftArrow from "../../assets/leftArrow.png"
import rightArrow from "../../assets/rightArrow.png"
import "../Carrousel/Carrousel.css"

export default function Carrousel({images}) {
  const [allImages] = useState(images);
  const [currentImage, setCurrentImage] = useState(images[0]);


  const Next = () => {
    const currentIndex = allImages.findIndex(img => img === currentImage);
    if(currentIndex + 1 < allImages.length){
    setCurrentImage(allImages[currentIndex + 1]);
    } else {
      setCurrentImage(allImages[0])
    }
  }

  const Prev = () => {
    const currentIndex = allImages.findIndex(img => img === currentImage);
    if(currentIndex - 1 >= 0){
    setCurrentImage(allImages[currentIndex - 1]);
    } else {
      setCurrentImage(allImages[allImages.length -1])
    }
  }

  return (
    <div>
      {allImages.length > 0 && currentImage && (
        <div className="blocSlider">

            <img src={currentImage} alt="" key={currentImage.id} className='sliderImages' />
            <img src={leftArrow} onClick={()=>Prev()} className="ArrowImg leftArrow" alt="" />
            <p className="imagePos"> {allImages.findIndex(img => img === currentImage) +1} / {images.length} </p>
            <img src={rightArrow} onClick={()=>Next()} className="ArrowImg rightArrow" alt=""/>


        </div>
      )}
    </div>
  );
}


