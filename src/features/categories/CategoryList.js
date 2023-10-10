import React, { useEffect, useState } from 'react';
import CategoryItem from './CategoryItem.js';
import './CategoryList.css';
import ArrayKit from '../../util/ArrayKit.js';

function CategoryList(props) {

    const [ rawList, setRawList ] = useState([
        <CategoryItem icon="https://www.redditinc.com/assets/images/site/reddit-logo.png" sub="/" label="Reddit" />,
        <CategoryItem icon="https://styles.redditmedia.com/t5_2suml/styles/communityIcon_997ef2evx0p61.png" sub="Awww" label="r/Awww" />,
        <CategoryItem icon="https://styles.redditmedia.com/t5_2qhhk/styles/communityIcon_n7ckf4gv4ik11.png" sub="Dogs" label="r/Dogs" />,
        <CategoryItem icon="https://styles.redditmedia.com/t5_2qhta/styles/communityIcon_2fsd7ji8awg91.png" sub="Cats" label="r/Cats" />,
        <CategoryItem icon="https://styles.redditmedia.com/t5_2rqn4/styles/communityIcon_3542zwgsio941.jpg?format=pjpg&s=7e7b8152340fe70435019491bf2dd4e711006efe" sub="Guineapigs" label="r/Guineapigs" />,
        <CategoryItem icon="https://a.thumbs.redditmedia.com/4dtsZ5CTlKW7fp5qplUli0ET_3Kbu8gbsbsCsGRman0.png" sub="Fish" label="r/Fish" />
    ]);

    if (props.list) {
        setRawList(() => props.list);
    }

    const [ displayList, setDisplayList ] = useState([]);

    const [ index, setIndex ] = useState(0);

    useEffect(() => {
        // Select the first two elements at index
        const list_slice = [
            rawList[index],
            rawList[ArrayKit.wrap(index, 1, rawList.length)]
        ];

        // Override them in the displayList
        setDisplayList(() => list_slice);

    }, [rawList, index])

    function onLeft(e) {
        setIndex((prev) => ArrayKit.wrap(prev, -1, rawList.length));
    }

    function onRight(e) {
        setIndex((prev) => ArrayKit.wrap(prev, 1, rawList.length));
    }

    return (
        <nav className='container category-list'>
            <button className='left-btn' onClick={onLeft}>&lt;</button>
            { displayList }
            <button className='right-btn' onClick={onRight}>&gt;</button>
        </nav>
    );
}

export default CategoryList;