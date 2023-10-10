import React, { useEffect, useState } from 'react';
import { useMediaQuery } from "@uidotdev/usehooks";

import CategoryItem from './CategoryItem.js';
import './CategoryList.css';
import ArrayKit from '../../util/ArrayKit.js';

function CategoryList(props) {

    const isTablet = useMediaQuery('only screen and (max-width: 810px)');
    const isPhone = useMediaQuery('only screen and (max-width: 600px)');

    const [ rawList, setRawList ] = useState([
        <CategoryItem icon="https://www.redditinc.com/assets/images/site/reddit-logo.png" key="categoryitem_1" sub="/" label="Reddit" />,
        <CategoryItem icon="https://styles.redditmedia.com/t5_2suml/styles/communityIcon_997ef2evx0p61.png" key="categoryitem_2" sub="Awww" label="r/Awww" />,
        <CategoryItem icon="https://styles.redditmedia.com/t5_2qhhk/styles/communityIcon_n7ckf4gv4ik11.png" key="categoryitem_3" sub="Dogs" label="r/Dogs" />,
        <CategoryItem icon="https://styles.redditmedia.com/t5_2qhta/styles/communityIcon_2fsd7ji8awg91.png" key="categoryitem_4" sub="Cats" label="r/Cats" />,
        <CategoryItem icon="https://styles.redditmedia.com/t5_2rqn4/styles/communityIcon_3542zwgsio941.jpg?format=pjpg&s=7e7b8152340fe70435019491bf2dd4e711006efe" key="categoryitem_5" sub="Guineapigs" label="r/Guineapigs" />,
        <CategoryItem icon="https://a.thumbs.redditmedia.com/4dtsZ5CTlKW7fp5qplUli0ET_3Kbu8gbsbsCsGRman0.png" key="categoryitem_6" sub="Fish" label="r/Fish" />
    ]);

    if (props.list) {
        setRawList(() => props.list);
    }

    const [ displayList, setDisplayList ] = useState([]);

    const [ index, setIndex ] = useState(0);

    const [ displayAmount, setDisplayAmount ] = useState(6);
    const [ buttonsVisible, setButtonsVisible ] = useState(true);

    useEffect(() => {
        if (isPhone) {
            setDisplayAmount(() => 2);
        } else if (isTablet) {
            setDisplayAmount(() => 4)
        } else {
            setDisplayAmount(() => 6);
        }

        const list_slice = ArrayKit.wrappedSlice(rawList, index, index + (displayAmount - 1));

        if (list_slice.length >= rawList.length) {
            setButtonsVisible(() => false)
        } else {
            setButtonsVisible(() => true);
        }

        // Override them in the displayList
        setDisplayList(() => list_slice);

    }, [rawList, index, displayAmount, isPhone, isTablet])

    function onLeft(e) {
        setIndex((prev) => ArrayKit.wrap(prev, -1, rawList.length));
    }

    function onRight(e) {
        setIndex((prev) => ArrayKit.wrap(prev, 1, rawList.length));
    }

    return (
        <nav className='container category-list'>
            {buttonsVisible && <button className='btn' onClick={onLeft}>&lt;</button> }
            { displayList }
            {buttonsVisible && <button className='btn' onClick={onRight}>&gt;</button>}
        </nav>
    );
}

export default CategoryList;