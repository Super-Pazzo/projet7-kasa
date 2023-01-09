import React from 'react';
import Banner from "../components/Banner/Banner";
import Card from '../components/Cards/cards';
import Logements from '../data/logements';
import '../style/pages/Home.css'

export default function Home () {
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