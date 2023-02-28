import React from 'react';
import Button from './Button';
import { categories } from '../utils/constants';
import classes from '../styles/sideBar.module.css';

const SideBar = () => {
    console.log(categories);

    return <section className={classes.sideBar}>{
        categories.map((categories) => (<Button key={categories.name} {...categories} />))}
    </section>
}

export default SideBar;