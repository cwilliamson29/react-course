import { Link } from 'react-router-dom';

import classes from './navbar.module.css';

function NavBar() {
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
            <Link to='/favorites'>Favorite Meetups</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
