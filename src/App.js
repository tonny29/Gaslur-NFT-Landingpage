import './App.css';
import Home from './Pages/Home/Home';
import Navigation from './Pages/Navigation/Navigation';
import Auctions from './Pages/Hot auctions/Auctions';
import Discover from './Pages/Discover/Discover';
import Getstarted from './Pages/GetStarted/Getstarted';


function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Home></Home>
      <Auctions></Auctions>
      <Getstarted></Getstarted>
      <Discover></Discover>
    </div>
  );
}

export default App;
