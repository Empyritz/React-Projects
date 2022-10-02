import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


const Question = ({ title, info, toggleShow, stateShow, id }) => {
    const validateShow = () => {
        const current = stateShow.find((state)=>state.id === id)
        if (current.isShow) {
            return true
        } else {
            return false
        }
    }
    let validator = validateShow()

    const [showInfo, setShowInfo] = useState(false)
    return (
        <article className='question'>
            <header>
                <h4>{title}</h4>
                <button className='btn' onClick={()=>{toggleShow(id)}}>
                    { validator? <AiOutlineMinus />: <AiOutlinePlus/> }
                </button>
            </header>
            { validator && <p>{info}</p> }
            
        </article>
  );
};

export default Question;