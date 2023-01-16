import React from 'react';
import Banner from "../components/Banner/Banner";
import Card from '../components/Cards/Cards';
import Logements from '../data/logements';
import '../style/pages/Home.css'

export default function Home () {
  document.title = "Kasa - Accueil";
  return (
    <div>
      <Banner />
      <div className='cards-box'>
          {Logements.map((logement)=>(
            <Card key={logement.id} house={logement} />
          ))}
      </div>
    </div>
  );
};