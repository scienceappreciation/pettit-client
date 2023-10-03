import React from 'react';
import { NavLink } from 'react-router-dom';
import './CategoryItem.css';

function CategoryItem({ icon, sub, label }) {
    return (
        <NavLink to={sub} className='container category-item'>
            <li>
                <img src={icon} alt={`${sub} icon `} role="presentation" />
                <span className='label'>{label}</span>
            </li>
        </NavLink>
    );
}

export default CategoryItem;