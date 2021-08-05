import { Link } from 'react-router-dom';
import { useContext } from 'react';

import classes from './navbar.module.css';
import FavoritesContext from '../../store/favorites-context';

function NavBar() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.navBar}>
      <div className={classes.logo}> React Meetups </div>

      <nav>
        <ul className={classes.navLinks}>
          <li className={classes.navLinksLi}>
            <Link to='/'>All Meetups</Link>
          </li>
          <li className={classes.navLinksLi}>
            <Link to='/new-meetup'>New Meetups</Link>
          </li>
          <li className={classes.navLinksLi}>
            <Link to='/favorites'>
              Favorite Meetups
              <span className={classes.favBadge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
