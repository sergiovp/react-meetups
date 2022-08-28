import getFavorites from './getFavorites';

export default function removeFavorite(item) {
    const favorites = getFavorites();

    const itemToFindIndex = favorites.indexOf(
        favorites.find((favoritesItem) => favoritesItem.id === item.id),
    );

    if (itemToFindIndex !== -1) {
        favorites.splice(itemToFindIndex, 1);
    }

    window.localStorage.setItem('favorites', JSON.stringify(favorites));

    window.dispatchEvent(new Event('storage'));
}
