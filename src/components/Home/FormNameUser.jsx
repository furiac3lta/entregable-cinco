import React from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTrainerName } from "../../store/slices/trainerName.slice";

const FormNameUser = () => {
  
 const inputName = useRef();
const dispatch = useDispatch()
const { trainerName } = useSelector(state => state)

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setTrainerName(inputName.current.value.trim()))
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputName} type="text" />
      <button>Start</button>
    </form>
  );
};

export default FormNameUser;
