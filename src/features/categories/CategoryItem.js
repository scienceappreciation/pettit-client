import React from 'react';

function CategoryItem({ icon, sub }) {
    return (
        <li>
            <img src={icon} alt={`${sub} icon`} role="presentation" />
            <a href={`${sub}`}></a>
        </li>
    );
}

export default CategoryItem;