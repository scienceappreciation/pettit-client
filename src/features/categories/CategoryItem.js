import React from 'react';
import { NavLink } from 'react-router-dom';

function CategoryItem({ icon, sub, label }) {
    return (
        <li>
            <NavLink to={sub}>
                <img src={icon} alt={`${sub} icon `} role="presentation" />
                {label}
            </NavLink>
        </li>
    );
}

export default CategoryItem;