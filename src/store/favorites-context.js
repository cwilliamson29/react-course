import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFav: (addFavHandler) => {},
  removeFav: (removeFavHandler) => {},
  itemIsFav: (itemIsFavHandler) => {},
});

export function FavoritescontextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavHandler(favMeetup) {
    setUserFavorites((prevUserFav) => {
      return prevUserFav.concat(favMeetup);
    });
  }

  function removeFavHandler(meetupId) {
    setUserFavorites((prevUserFav) => {
      return prevUserFav.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemIsFavHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFav: addFavHandler,
    removeFav: removeFavHandler,
    itemIsFav: itemIsFavHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
