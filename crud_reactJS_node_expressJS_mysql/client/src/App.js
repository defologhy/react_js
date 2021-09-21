import Home from './pages/home';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Konsumenlist from './pages/Konsumenlist';
import AddKonsumen from './pages/addkonsumen';
import EditKonsumen from './pages/editkonsumen';

function App() {
    return (
      <BrowserRouter>
      <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/konsumen' component={Konsumenlist} />
              <Route exact path='/addkonsumen' component={AddKonsumen} />
              <Route exact path='/konsumen/:id' component={EditKonsumen}  />
      </Switch>
      </BrowserRouter>
    );
  }
  
  export default App;
  