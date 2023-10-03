import React from 'react';

function CategoryItem({ icon, sub, label }) {
    return (
        <li>
            <img src={icon} alt={`${sub} icon`} role="presentation" />
            <a href={`${sub}`}>{label}</a>
        </li>
    );
}

export default CategoryItem;