import './App.css';
import Header from "./component/header/header";
import Location from './component/location/location';
import Body from './component/body/body';
import Pollutant from './component/pollutant/pollutant';
function App() {
  return (
    <div className="App">
      <Header />
      <Location />
      <Body />
      <Pollutant />
    </div>
  );
}

export default App;
