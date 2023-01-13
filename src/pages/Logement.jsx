import React from 'react';
import Carrousel from "../components/Carrousel/Carrousel";
import Logements from "../data/logements.json"
import { useParams } from 'react-router-dom';
import Collapse from "../components/Collapse/collapse";
import Tags from "../components/Tags/Tags"
import Rating from "../components/Rate/Rate"

const Logement = () => {
  let logementdId = useParams();
  let logementImg;
  let logementDescription;
  let logementTitle;
  let logementEquipement;
  let logementLocation;
  let logementHost
  let logementTags
  let logementRate

  Logements.forEach((logement)=>{
    if (logement.id === logementdId.id) {
      logementImg = logement.pictures;
      logementDescription = logement.description;
      logementTitle = logement.title;
      logementEquipement = logement.equipments;
      logementLocation = logement.location;
      logementHost = logement.host;
      logementTags = logement.tags
      logementRate = logement.rating
    }

  })
  return (
    <div>
      <div>
        <Carrousel images={logementImg}/>
      </div>
      <div className='globalDesc'>
          <div className='logementTitle'>
            <h1>{logementTitle}</h1>
            <h2>{logementLocation}</h2>
          </div>
          <div className='hosting'>
            <p>{logementHost.name}</p>
            <img src={logementHost.picture} alt="" className='profilImg' />
          </div>
          <div className='tagsCont'>
            <Tags tags={logementTags} />
          </div>
          <div className='StarsContainer'>
            <Rating Rates={logementRate}/>
          </div>
          <div className='allCollapse'>
            <div>
              <Collapse props={logementDescription} title={"Description"}/>
            </div>
            <div>
            <Collapse props={logementEquipement} title={"Equipement"}/>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Logement;
