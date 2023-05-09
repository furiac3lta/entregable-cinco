import React, { useState } from "react";
import { useSelector } from "react-redux";
import FormPoke from "../components/Pokedex/FormPoke";
import '../components/Pokedex/styles/pokedesk.css'
import PokeContainer from "../components/Pokedex/PokeContainer";
import HeaderPoke from '../components/Header/HeaderPoke';

const Pokedex = () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=5&offset=0";
  
  const [formUrl, setFormUrl] = useState(url);
  const { trainerName } = useSelector((state) => state);

  return (
    <div>
       <HeaderPoke />
     <p className="pokedesk__parragraph">
        <span className="pokedesk__welcome"><b className="pokedesk__trainer">Welcome {trainerName}</b>, here you can find your favourite pokemon</span>
      </p>
      <div className="pokedesk__search">
      <FormPoke url={url} setFormUrl={setFormUrl} />
      </div>
      <PokeContainer formUrl={formUrl} />
     
    </div>
  );
};

export default Pokedex;
