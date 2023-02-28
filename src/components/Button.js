import React, { useContext } from 'react';
import classes from '../styles/button.module.css';
import { Context } from '../utils/Context';

const Button = ({ icon, name }) => {

    const contextObj = useContext(Context);

    const clickHandler = () => {
        contextObj.setSearchTermFunc(name);      
    }

    return <button className={classes.button} onClick={clickHandler}>
        <span>{icon}</span>

        <span>{name}</span>

    </button>
}

export default Button;