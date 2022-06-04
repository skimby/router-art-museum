import { Route, Switch } from 'react-router-dom';

import harvardArt from './data/harvardArt.js'
import Home from './components/Home/index.js';
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView/index.js';
import ArtImageTile from './components/ArtImageTile/index.js';


function App() {
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records} />
      <Switch>
        <Route path='/galleries/:galleryId'>
          <GalleryView galleries={harvardArt.records} />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route>
          <h2>Page Not Found</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
