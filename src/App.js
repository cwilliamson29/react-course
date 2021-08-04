import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupsPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/layout';

function App() {
  return (
    <Layout>
      <div className='spacer'></div>
      <Switch>
        <Route path='/' exact>
          <AllMeetupsPage />
        </Route>

        <Route path='/new-meetup' exact>
          <NewMeetupsPage />
        </Route>

        <Route path='/favorites' exact>
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
