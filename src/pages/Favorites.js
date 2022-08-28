import MeetupItem from '../components/meetups/MeetupItem';
import getFavorites from '../utils/getFavorites';
import classes from './../components/meetups/MeetupList.module.css';

export default function FavoritesPage() {
    const favoritesMeetupts = getFavorites();

    return (
        <section>
            <h1>Favorites Page</h1>
            <ul className={classes.list}>
                {favoritesMeetupts.map((_, index) => {
                    return (
                        <MeetupItem
                            key={index}
                            id={index}
                            isFavoritePage={true}
                        />
                    );
                })}
            </ul>
        </section>
    );
}
