import getFavorites from './getFavorites';

export default function addFavorite(item) {
    const favorites = getFavorites();

    const isRepeated = favorites.find(
        (favoritesItem) => favoritesItem.id === item.id,
    );

    if (!isRepeated) {
        favorites.push(item);

        window.localStorage.setItem('favorites', JSON.stringify(favorites));

        window.dispatchEvent(new Event('storage'));
    }
}
