import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setTrainerName } from "../../store/slices/trainerName.slice";
import { useNavigate } from 'react-router-dom';
import './FormNameUser.css'
const FormNameUser = () => {
  
 const inputName = useRef();
const dispatch = useDispatch()
const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setTrainerName(inputName.current.value.trim()))
    navigate('/pokedex')
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
     <div>
     <input className='form__input' ref={inputName} type="text" />
      <button className='form__btn'>Start</button>
     </div>
    </form>
  );
};

export default FormNameUser;
