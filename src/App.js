//import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import CakeContainer from './Components/CakeContainer'
import IceCreamContainer from './Components/IceCreamContainer';
//import HooksCakeContainer from './Components/HooksCakeContainer'
function App() {
  return (

    <Provider store={store}>
    <div className="App">
      {/* <HooksCakeContainer /> */}
      <CakeContainer />
      <IceCreamContainer />
    </div>
    </Provider>
  );
}

export default App;
