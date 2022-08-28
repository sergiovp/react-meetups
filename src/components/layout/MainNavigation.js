import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useScrollDirection } from '../../util-hooks/useScrollDirection';
import getFavorites from '../../utils/getFavorites';

import classes from './MainNavigation.module.css';

function MainNavigation() {
    const pathName = useLocation().pathname;
    const isScrollingDown = useScrollDirection() === 'down';
    const [favoritesNumber, setFavoritesNumber] = useState(
        getFavorites().length,
    );

    useEffect(() => {
        window.addEventListener('storage', () => {
            setFavoritesNumber(getFavorites().length);
        });

        return () => {
            window.removeEventListener('storage');
        };
    }, []);

    return (
        <header
            className={
                isScrollingDown ? `${classes.header}hide` : classes.header
            }
            data-test="navigation-header"
        >
            {!isScrollingDown && (
                <>
                    <div className={classes.logo}>React Meetups</div>
                    <nav>
                        <ul>
                            <li
                                className={pathName === '/' ? classes.item : ''}
                            >
                                <a href="/">All Meetups</a>
                            </li>

                            <li
                                className={
                                    pathName === '/new' ? classes.item : ''
                                }
                            >
                                <a href="/new">Add New Meetup</a>
                            </li>
                            <li
                                className={
                                    pathName === '/favorites'
                                        ? classes.item
                                        : ''
                                }
                            >
                                <a href="/favorites">
                                    My Favorites
                                    <span className={classes.badge}>
                                        {favoritesNumber || 0}
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </>
            )}
        </header>
    );
}

export default MainNavigation;
