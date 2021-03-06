import React from 'react';
import Logo from '../Logo/Logo';
import NavItems from '../NavItems/NavItems'
import classes from './Toolbar.module.css';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <Logo />
        <nav>
            <NavItems />
        </nav>
    </header>
);

export default toolbar;