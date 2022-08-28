import { useFetch } from '../../util-hooks/useFetch';
import classes from './MeetupItem.module.css';
import Card from '../ui/Card';
import { useState } from 'react';
import removeFavorite from '../../utils/removeFavorite';
import addFavorite from '../../utils/addFavorite';
import getFavorites from '../../utils/getFavorites';

export default function MeetupItem({ id, isFavoritePage }) {
    const [isFavorite, setIsFavorite] = useState(
        !!getFavorites().find((favoriteItem) => favoriteItem.id === id),
    );

    const { data } = useFetch({
        url: '/data.json',
    });

    if (!data) return <p>Loading...</p>;
    let [item] = data;

    const setFavorite = () => {
        setIsFavorite(!isFavorite);
        if (isFavorite) {
            removeFavorite({ ...item, id });
        } else {
            addFavorite({ ...item, id });
        }
    };

    return (
        <li className={classes.item} data-test="meet-up-item">
            <Card>
                <div className={classes.image}>
                    <img src={item.image} alt={item.title} />
                </div>
                <div className={classes.content}>
                    <h3>{item.title}</h3>
                    <address>{item.address}</address>
                    <p>{item.description}</p>
                </div>
                <div className={classes.actions}>
                    {!isFavoritePage && (
                        <button onClick={setFavorite}>
                            {isFavorite
                                ? 'Remove from favorites'
                                : 'Add to favorites'}
                        </button>
                    )}
                </div>
            </Card>
        </li>
    );
}
