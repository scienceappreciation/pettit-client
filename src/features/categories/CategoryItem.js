import React from 'react';

function CategoryItem({ icon, sub, label }) {
    return (
        <li>
            <a href={`${sub}`}>
                <img src={icon} alt={`${sub} icon`} role="presentation" />
                {label}
            </a>
        </li>
    );
}

export default CategoryItem;