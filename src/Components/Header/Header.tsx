import React from 'react';
import {NavLink} from "react-router-dom";
import './Header.css';

const Header: () => JSX.Element = () => {
    return (
        <div className='headerContainer'>
            <ul className='headerContainer__list'>
                <li className='headerContainer__item'><NavLink className='headerContainer__link' to='/' exact activeClassName={'active-item'}>Main</NavLink></li>
                <li className='headerContainer__item'><NavLink className='headerContainer__link' to='/news' activeClassName={'active-item'}>News</NavLink></li>
                <li className='headerContainer__item'><NavLink className='headerContainer__link' to='/list' activeClassName={'active-item'}>Example List</NavLink></li>
                <li className='headerContainer__item'><NavLink className='headerContainer__link' to='/teniteration' activeClassName={'active-item'}>10 итерация</NavLink></li>
                <li className='headerContainer__item'><NavLink className='headerContainer__link' to='/eleveniterationclass' activeClassName={'active-item'}>11 итерация(класс)</NavLink></li>
                <li className='headerContainer__item'><NavLink className='headerContainer__link' to='/eleveniterationfunc' activeClassName={'active-item'}>11 итерация(функция)</NavLink></li>
                <li className='headerContainer__item'><NavLink className='headerContainer__link' to='/reactcontext' activeClassName={'active-item'}>React Context</NavLink></li>
                <li className='headerContainer__item'><NavLink className='headerContainer__link' to='/redux' activeClassName={'active-item'}>Redux</NavLink></li>
                <li className='headerContainer__item'><NavLink className='headerContainer__link' to='/about' activeClassName={'active-item'}>About</NavLink></li>
            </ul>
        </div>
    )
}

export default Header
