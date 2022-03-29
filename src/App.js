import logo from './logo.svg';
import './App.css';
import Navigation from "./components/Navigation";
import 'bootstrap/dist/css/bootstrap.css';
import {createStore } from "redux";
import reducer from "./reducer/reducer";
import {Provider} from "react-redux";

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
        <div>
            <Navigation/>
        </div>
    </Provider>

  );
}

export default App;
