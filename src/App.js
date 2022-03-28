import './App.css';
import Home from './Pages/Home/Home';
import Navigation from './Pages/Navigation/Navigation';
import Auctions from './Pages/Hot auctions/Auctions';
import Discover from './Pages/Discover/Discover';
import Getstarted from './Pages/GetStarted/Getstarted';
import Footer from './Pages/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Home></Home>
      <Auctions></Auctions>
      <Getstarted></Getstarted>
      <Discover></Discover>
      <Footer></Footer>
    </div>
  );
}

export default App;
