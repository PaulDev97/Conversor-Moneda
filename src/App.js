import { Provider } from 'react-redux';
import './App.css';
import store from './store/store';
import Main from './components/Main/Main';


function App() {
  return (
    <Provider store={store}>

    <div className="App">
    
      <Main/>

    </div>

  </Provider>
  );
}

export default App;
