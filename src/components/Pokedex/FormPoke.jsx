import React, { useEffect } from "react";
import { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import '../../components/Pokedex/styles/form_poke.css'

const FormPoke = ({setFormUrl}) => {
  const inputPoke = useRef();
  const navigate = useNavigate()
    const url = `https://pokeapi.co/api/v2/type/`
  const [types, getAllTypes] = useFetch(url)

    useEffect(() => {
     getAllTypes()
    }, [])
    
console.log(types)

  const handleSubmit = e => {
    e.preventDefault();
    const path = `/pokedex/${inputPoke.current.value.trim().toLowerCase()}`
    navigate(path);
};
const handleChange = e =>{
    setFormUrl(e.target.value)
}
    return (
      <div className="form__container">
        <form onSubmit={handleSubmit}>
          <input className="form__input" ref={inputPoke} type="text" />
          <button className="form__search">Search</button>
        </form>
        <select className="form__select" onChange={handleChange} id="">
          <option value={url}>All Pokemons</option>
         {
            types?.results.map(type =>(
                <option
                    key={type.url}
                    value={type.url}
                >{type.name}</option>
            ))
         }
        </select>
      </div>
    );
  
};
export default FormPoke;
