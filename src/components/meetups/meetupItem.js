import { useContext } from 'react';

import Card from '../ui/card';
import classes from './meetupItem.module.css';
import FavoritesContext from '../../store/favorites-context';

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFav = favoritesCtx.itemIsFav(props.id);

  function toggleFavStatus() {
    if (itemIsFav) {
      favoritesCtx.removeFav(props.id);
    } else {
      favoritesCtx.addFav({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3> {props.title} </h3>
          <address> {props.address} </address>
          <p> {props.description} </p>
        </div>
        <div className={classes.btn}>
          <button className={classes.actions} onClick={toggleFavStatus}>
            {itemIsFav ? 'Remove Favorite' : 'Add Favorite'}
          </button>
        </div>
      </Card>
    </li>
  );
}
export default MeetupItem;
