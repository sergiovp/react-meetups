export default function getFavorites() {
    return JSON.parse(window.localStorage.getItem('favorites')) || [];
}
