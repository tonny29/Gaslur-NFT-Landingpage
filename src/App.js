
import './App.css';
import Home from './Pages/Home/Home';
import Navigation from './Pages/Navigation/Navigation';
import Auctions from './Pages/Hot auctions/Auctions';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Home></Home>
      <Auctions></Auctions>
    </div>
  );
}

export default App;
